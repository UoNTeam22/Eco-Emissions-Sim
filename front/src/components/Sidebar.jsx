// Sidebar component
import React, { Component } from 'react';

// Local components
import ApplyButton from './ApplyButton.jsx';
import Slider from './Slider.jsx';

// CSS
import '../styles/Sidebar.css';
import '../styles/Slider.css';

export class Factors extends Component {
    state = {}

    // This is a placeholder as an example
    render() {
        return (
            <div>
                <div className="slider">
                    <Slider name="Fossil Fuels" value={0} rangeStart={-100} rangeEnd={100} onChange={console.log} step={20}/>
                </div>
                <div className="slider">
                    <Slider name="Vegetarianism" value={0} rangeStart={-100} rangeEnd={100} onChange={console.log} step={20}/>
                </div>
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
                    <Factors/>
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