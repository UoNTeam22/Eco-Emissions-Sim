import papaparser from "papaparse";
import keys from "./Keys";
import countries from "../data/countries.json";

const DATA_URL =  "https://gist.githubusercontent.com/KesarEra/96eb24121aa2a2ad5bbcc77c15ef3159/raw/10f84d5429f2831084eb24373659f34a95bda090/countries_temp";

class LoadTemperatures {
  setState = null;
  mapCountries = countries.features;

  load = (setState) => {
    this.setState = setState;

    papaparser.parse(DATA_URL, {
      download: true,
      header: true,
      complete: (result) => this.#processTemperatureData(result.data),
    });
  };

  #processTemperatureData = (temperatureCountries) => {
    for (let i = 0; i < this.mapCountries.length; i++) {
      const country = this.mapCountries[i];
      const temperatureCountry = temperatureCountries.find(
        (temperatureCountry) => country.properties.ISO_A3 === temperatureCountry.ISO3
      );

      if (temperatureCountry != null) {
        let temperature = Number(temperatureCountry.Temperature);
        country.properties.temperature = temperature;
      }
      this.#setCountryColor(country);
    }

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