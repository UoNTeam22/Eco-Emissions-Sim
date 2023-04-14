// Body component
import React, { Component } from 'react';

// Local components
import Slider from './Slider.jsx';

// CSS
import '../styles/Slider.css';

export class Timescale extends Component {
    state = {}
    static #slider = React.createRef();

    static get timeRef() {
        return Timescale.#slider.current;
    }

    render() {
        return (
            <div className="slider">
                <Slider 
                ref={Timescale.#slider} 
                name="Timescale" 
                value={2023} 
                rangeStart={2023} 
                rangeEnd={2050} 
                width="calc(100vw - 350px)" 
                step={1} 
                onChange={console.log}
                />
            </div>
        )
    }
}

export default Timescale;