// Body component
import React from 'react';

// Local components
import TemperatureMap from './TemperatureMap';
import Slider from './Slider';

// CSS
import '../styles/View.css';

function View({ sliderStates }) {
    return (
        <div className="view">
            <div className="map">
                <TemperatureMap />
            </div>
            <div className="timescale">
                <p>{sliderStates[sliderStates.length - 1].setValue}</p>
                <Slider sliderState={sliderStates[sliderStates.length - 1]} minRange={2023} maxRange={2050}/>
            </div>
        </div>
    );
}

export default View;