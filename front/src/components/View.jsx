// Body component
import React, { Component } from 'react';

// Local components
import TemperatureMap from './TemperatureMap';
import Slider from './Slider.jsx';

// CSS
import '../styles/View.css';
import '../styles/Slider.css';

export class Timescale extends Component {
    state = {}

    render() {
        return (
            <div className="slider">
                <Slider name="Timescale" value={2023} rangeStart={2023} rangeEnd={2050} width="calc(100vw - 350px)"/>
            </div>
        )
    }
}

class View extends Component {
    state = {}

    render() {
        return (
            <div className="view">
                <div className="map">
                    <TemperatureMap />
                </div>
                <div className="timescale">
                    <Timescale />
                </div>
            </div>
        );
    }
}

export default View;