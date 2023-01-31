// Sidebar component

import React, { Component } from 'react';

// Local components
import ApplyButton from './ApplyButton.jsx';
import SimpleWrappedSlider from './SimpleWrappedSlider.jsx';

// CSS
import '../styles/Sidebar.css';

export class Setting extends Component {
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
            <div className="setting">
                <div className="name">{this.state.name}</div>
                {this.renderInput()}
            </div>
        )
    }
}

export class Settings extends Component {
    state = {}

    // This is a placeholder as an example
    render() {
        return (
            <div className="settings">
                <Setting name="Veganism" value={900} rangeStart={0} rangeEnd={1200} onChange={console.log} />
            </div>
        )
    }
}

export default class Sidebar extends Component {
    state = {}
    render() {
        return (
            <div className="sidebar">
                <div className="body">
                    <Settings />
                    <div className="overlay">
                        <ApplyButton onClick={this.applyChanges} text="Apply" />
                    </div>
                </div>
            </div >

        );
    }

    /**
     * Triggered when the apply button is clicked
     */
    async applyChanges() {
        // TODO implement this
        console.log('apply changes');
    }
}