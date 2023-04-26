import { useEffect, useState } from "react";
import * as React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import View from "./View";
import TemperatureDataFactory from "./LoadTemperatures";

function All() {
    // Create states for factor sliders.
    const [slider1, setSlider1] = useState(0);
    const [slider2, setSlider2] = useState(0);
    // Create state for timescale slider.
    const [year, setYear] = useState(2023);
    // Create state for map data.
    const [countriesData, setCountries] = useState([]);

    // Calling useEffect function on page load to have data in map by default.
    useEffect(() => {
        callCountriesData();
    }, []);

    // Calling service class to get map results for selected year.
    function callCountriesData() {
        setCountries([]);
        const loadTemperature = new TemperatureDataFactory();
        loadTemperature.load((countries) => {
            setCountries(countries)
        }, year);
    }

    // Creating state variables to lower prop count.
    const slider1State = {
        setValue: slider1,
        setFunction: setSlider1,
    };

    const slider2State = {
        setValue: slider2,
        setFunction: setSlider2,
    };

    const yearState = {
        setValue: year,
        setFunction: setYear,
    };

    // Storing states for all sliders in a list for easy access.
    const allSliderStates = [
        slider1State,
        slider2State,
        yearState,
    ];

    // Returing all components of website.
    return (
        <>
            <Navbar />
            <Sidebar sliderStates={allSliderStates} onApply={callCountriesData} />
            <View sliderStates={allSliderStates} countriesData={countriesData} />
        </>
    );
}

export default All;
