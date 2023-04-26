import React from 'react';
import TemperatureMap from './TemperatureMap';
import Slider from './Slider';
import '../styles/View.css';

// View component containing Temperature Map and timescale slider.
function View({ sliderStates, countriesData }) {
    return (
        <div className="view">
            <div className="map">
                <TemperatureMap countries={countriesData}/>
            </div>
            <div className="timescale">
                <p>{sliderStates[sliderStates.length - 1].setValue}</p>
                <Slider sliderState={sliderStates[sliderStates.length - 1]} minRange={2023} maxRange={2050} />
            </div>
        </div>
    );
}

export default View;