// Here's for the range slider
import React, { Component } from 'react';

import 'toolcool-range-slider';

// TODO add custom CSS for this

export default class SimpleWrappedSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || 0,
            min: props.min || 0,
            max: props.max || 100,
            step: props.step || 1,
            width: props.width || "270px",
            onChange: props.onChange || (() => {})
        }
    }
    
    render() {
        return (
            <toolcool-range-slider 
            min={this.state.min} 
            max={this.state.max} 
            value={this.state.value} 
            step={this.state.step} 
            slider-width={this.state.width} 
            slider-height="0.5rem"
            slider-bg="#2D4373" 
            slider-bg-hover="#2D4373" 
            slider-bg-fill="#71ff1a" 
            pointer-width="1.5rem"
            pointer-height="1.5rem"
            pointer-bg="#71ff1a"
            pointer-bg-hover="#71ff1a">
            </toolcool-range-slider>
        );
    }

    #handleChange(e) {
        this.state.onChange(e.detail.value);
    }

    componentDidMount() {
        let slider = document.querySelector('toolcool-range-slider');
        slider.addEventListener('change', this.#handleChange.bind(this));
    }

    componentWillUnmount() {
        let slider = document.querySelector('toolcool-range-slider');
        slider.removeEventListener('change', this.#handleChange.bind(this));

    }
}