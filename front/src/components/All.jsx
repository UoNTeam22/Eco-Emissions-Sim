import { useEffect, useState } from "react";
import * as React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import View from "./View";
import TemperatureDataFactory from "./LoadTemperatures";
import countriesJSON from "../data/countries.json";

function All() {
    //create some states to use
    const [slider1, setSlider1] = useState(0);
    const [slider2, setSlider2] = useState(0);
    const [year, setYear] = useState(2023);
    const [countriesData, setCountries] = useState([]);

    //call this function on page load to have some data there by default
    useEffect(() => {
        callCountriesData();
    }, []);

    //call service class to get some data
    function callCountriesData() {
        //console.log('Retrieving data for year: ' + year);
        console.log("Before: ", countriesData);
        const loadTemperature = new TemperatureDataFactory();
        loadTemperature.load((countries) => {
            setCountries(countries)
            //console.log("Recieved data back:", countries)
        }, year);
        console.log("After: ", countriesData); // This is still empty [], why?
    }

    //create some nicer state variables to lower prop count
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

    const allSliderStates = [
        slider1State,
        slider2State,
        yearState,
    ];

    return (
        <>
            <Navbar />
            <Sidebar sliderStates={allSliderStates} onApply={callCountriesData} />
            <View sliderStates={allSliderStates} countriesData={countriesData} />
        </>
    );
}

export default All;
