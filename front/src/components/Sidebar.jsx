// Sidebar component
import React, { Component } from 'react';

// Local components
import ApplyButton from './ApplyButton.jsx';
import Slider from './Slider.jsx';
import FactorsList from './FactorsList.jsx';
import ClientModel from '../api/models.js';
import countries from "../data/countries.json";
import keys from "./Keys";

// CSS
import '../styles/Sidebar.css';
import '../styles/Slider.css';

export class Factors extends Component {
    state = {}

    render() {
        return (
            <div>
                <div className="slider">
                    <Slider name="Fossil Fuels" value={0} rangeStart={-100} rangeEnd={100} step={20}/>
                </div>
                <div className="slider">
                    <Slider name="Vegetarianism" value={0} rangeStart={0} rangeEnd={7} step={1}/>
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
                    <FactorsList/>
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
        console.log('apply changes');

        ClientModel.getModels().then(async models => {
            for (let model of models) {
                // Current the only one is "ChangeTemperatureTimeModel"
                let yearResults = await model.getResults({"time": 2030});
                //console.log(yearResults);

                for (let i = 0; i < countries.features.length; i++) {
                    const country = countries.features[i];
                    const temperatureCountry = yearResults.find(
                      (temperatureCountry) => country.properties.ISO_A3 === temperatureCountry.code
                    );
                    if (temperatureCountry != null) {
                      let temperature = Number(temperatureCountry.value);
                      country.properties.temperature = temperature;
                    }
                    const key = keys.find((keyItem) =>
                        keyItem.bounds(country.properties.temperature)
                    );
                    if (key != null) {
                        country.properties.color = key.color;
                    }
                }
                console.log("After updates:");
                console.log(countries.features);
            }
        });
    }
}