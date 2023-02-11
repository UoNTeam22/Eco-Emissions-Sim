// Body component

import React, { Component } from 'react';
import '../styles/View.css';
import TemperatureMap from './TemperatureMap';
import SimpleWrappedSlider from './SimpleWrappedSlider.jsx';

export class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            value: props.value,
            rangeStart: props.rangeStart === undefined ? NaN : props.rangeStart,
            rangeEnd: props.rangeEnd === undefined ? NaN : props.rangeEnd,
            onChange: props.onChange || (() => {})
        }
    }

    #renderSlider() {
        return <SimpleWrappedSlider onChange={this.state.onChange} min={this.state.rangeStart} max={this.state.rangeEnd} value={this.state.value}/>;
    }

    #renderNumberInput() {
        // Check if we have a slider
        if (!isNaN(this.state.rangeStart) && !isNaN(this.state.rangeEnd)) {
            return this.#renderSlider();
        }

        return <input type="number" value={this.state.value} />;
    }


    renderInput() {
        let funcs = {
            'number': this.#renderNumberInput
        }

        let type = typeof this.state.value;
        if (type in funcs) {
            return funcs[type].call(this);
        }
        
        console.trace();
        console.warn(`Unknown type ${type} for setting ${this.state.name}`);
        return this.state.value;
    }


    render() {
        return (
            <div className="time">
                <div className="name">{this.state.name}</div>
                {this.renderInput()}
            </div>
        )
    }
}

export class Times extends Component {
    state = {}

    // This is a placeholder as an example
    render() {
        return (
            <div className="times">
                <Time name="TimeScaler" value={900} rangeStart={0} rangeEnd={2050} onChange={console.log} />
            </div>
        )
    }
}

class View extends Component {
    state = {}

    render() {
        return (
            <div className="view">
                <div className="body">
                    <TemperatureMap />
                </div>
                <div className="footer">
                    <Times />
                </div>
            </div>
        );
    }
}

export default View;