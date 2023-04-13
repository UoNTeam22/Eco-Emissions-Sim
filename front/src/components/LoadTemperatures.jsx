import papaparser from "papaparse";
import keys from "./Keys";
import countries from "../data/countries.json";
import ClientModel from '../api/models.js';

const DATA_URL =  "https://gist.githubusercontent.com/KesarEra/96eb24121aa2a2ad5bbcc77c15ef3159/raw/10f84d5429f2831084eb24373659f34a95bda090/countries_temp";

class LoadTemperatures {
  /** setState is null until all the temperature data is processed. */
  setState = null;
  mapCountries = countries.features;

  load = (setState) => {
    this.setState = setState;

    ClientModel.getModels().then(async models => {
      for (let model of models) {
          let yearResults = await model.getResults({"time": 2023});
          //console.log(yearResults);
          this.#processTemperatureData(yearResults);
      }
    });

    /*papaparser.parse(DATA_URL, {
      download: true,
      header: true,
      complete: (result) => this.#processTemperatureData(result.data),
    });*/
  };

  #processTemperatureData = (temperatureCountries) => {
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

  #setCountryColor = (country) => {
    const key = keys.find((keyItem) =>
      keyItem.bounds(country.properties.temperature)
    );

    if (key != null) {
      country.properties.color = key.color;
    }
  };

}

export default LoadTemperatures;