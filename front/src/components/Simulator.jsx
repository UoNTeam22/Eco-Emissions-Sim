import { useEffect, useState } from "react";
import * as React from "react";
import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import View from "./View.jsx";
import TemperatureDataFactory from "./TemperatureDataFactory.js";

/**
 * Main component containing all other components.
 * Sets up states for all sliders and year.
 * @returns 
 */
export default function Simulator() {
    // Create states for factor sliders

    // Fossil fuels slider
    const [fossilFuelsSlider, setFossilFuelsSlider] = useState(0);
    // Vegitarianism slider
    const [vegitarianismSlider, setVegitarianismSlider] = useState(0);

    // Create state for timescale slider (i.e., years)
    const [year, setYear] = useState(2023);

    // Create state for map data
    const [countriesData, setCountries] = useState([]);

    // Create state for selected list of factors.
    const [checkedList, setCheckedList] = useState([]);

    // Calling useEffect function on page load to have data in map by default
    useEffect(() => {
        callCountriesData();
    }, []);

    // Calling service class to get map results for selected year
    function callCountriesData() {
        setCountries([]);
        const loadTemperature = new TemperatureDataFactory();
        loadTemperature.load((countries) => {
            setCountries(countries)
        }, year, checkedList, allSliderStates);
    }

    // Creating state variables to lower prop count

    // Fossil fuels slider state
    const fossilFuelsSliderState = {
        setValue: fossilFuelsSlider,
        setFunction: setFossilFuelsSlider,
    };

    // Vegitarianism slider state.
    const vegitarianismSliderState = {
        setValue: vegitarianismSlider,
        setFunction: setVegitarianismSlider,
    };

    // Create the year state to allow changing of year (as a slider)
    const yearState = {
        setValue: year,
        setFunction: setYear,
    };

    const factorListStates = {
        setValue: checkedList,
        setFunction: setCheckedList,
    }

    // Storing states for all sliders in a list for easy access in other components
    const allSliderStates = [
        // Variables sliders
        fossilFuelsSliderState,
        vegitarianismSliderState,

        // Year slider
        yearState,
    ];

    // Returing all components of the simulator
    return (
        <>
            <Navbar />
            <Sidebar sliderStates={allSliderStates} onApply={callCountriesData} factorListStates={factorListStates} />
            <View sliderStates={allSliderStates} countriesData={countriesData} />
        </>
    );
}
