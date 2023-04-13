// Body component
import React, { Component } from 'react';

// Local components
import Slider from './Slider.jsx';

// CSS
import '../styles/Slider.css';

export class Timescale extends Component {
    state = {}

    render() {
        return (
            <div className="slider">
                <Slider id="timescale" name="Timescale" value={2023} rangeStart={2023} rangeEnd={2050} width="calc(100vw - 350px)"/>
            </div>
        )
    }
}

export default Timescale;