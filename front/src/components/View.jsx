// Body component
import React from 'react';

// Local components
import TemperatureMap from './TemperatureMap';
import NewSlider from './NewSlider';

// CSS
import '../styles/View.css';

function View({ sliderStates }) {
    return (
        <div className="view">
            <div className="map">
                <TemperatureMap />
            </div>
            <div className="timescale">
                {/* <Timescale /> */}
                <p>{sliderStates[sliderStates.length - 1].setValue}</p>
                <NewSlider sliderState={sliderStates[sliderStates.length - 1]} minRange={2023} maxRange={2050}/>
            </div>
        </div>
    );
}

export default View;