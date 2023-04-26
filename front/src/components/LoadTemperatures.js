import keys from "./Keys";
import countries from "../data/countries.json";
import ClientModel from '../api/models.js';

class TemperatureDataFactory {
    /** setState is null until all the temperature data is processed. */
    setState = null;
    mapCountries = countries.features;

    load(setState, year) {
        this.setState = setState;
        ClientModel.getModels().then(async models => {
            for (let model of models) {
                let yearResults = await model.getResults({ "time": year });
                //console.log(yearResults);
                this.#processTemperatureData(yearResults);
            }
        });
    };

    #processTemperatureData(temperatureCountries) {
        for (let i = 0; i < this.mapCountries.length; i++) {
            const country = this.mapCountries[i];
            const temperatureCountry = temperatureCountries.find(
                (temperatureCountry) => country.properties.ISO_A3 === temperatureCountry.code
            );

            if (temperatureCountry != null) {
                let temperature = Number(temperatureCountry.value);
                country.properties.temperature = temperature;
            }
            this.#setCountryColor(country);
        }
        /** Sets state once all countries are assigned a color according to their temperature & the key. */
        this.setState(this.mapCountries);
    };

    #setCountryColor(country) {
        const key = keys.find((keyItem) =>
            keyItem.bounds(country.properties.temperature)
        );

        if (key != null) {
            country.properties.color = key.color;
        }
    };

}

export default TemperatureDataFactory;