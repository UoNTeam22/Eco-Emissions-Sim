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
            onChange: props.onChange || (() => {})
        }
    }
    
    render() {
        return (
            <toolcool-range-slider min={this.state.min} max={this.state.max} value={this.state.value}></toolcool-range-slider>
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