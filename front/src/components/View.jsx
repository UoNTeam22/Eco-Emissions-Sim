import React from "react";
import TemperatureMap from "./TemperatureMap.jsx";
import Slider from "./Slider.jsx";
import "../styles/View.css";
import InfoButton from "./InfoButton.jsx";

// View component containing Temperature Map and timescale slider.
function View({ sliderStates, countriesData }) {
    return (
        <div className="view">
            <div className="map">
                <TemperatureMap countries={countriesData}/>
            </div>
            <div className="timescale">
                <p>{sliderStates[sliderStates.length - 1].setValue}</p>
                <Slider sliderState={sliderStates[sliderStates.length - 1]} minRange={2023} maxRange={2100} />
                <InfoButton text = {"Move the slider to change the value"}></InfoButton>
            </div>
        </div>
    );
}

export default View;