import papaparser from "papaparse";
import keys from "./Keys";
import countries from "../data/countries.json";

class LoadTemp {
  dataURL =
    "https://gist.githubusercontent.com/KesarEra/96eb24121aa2a2ad5bbcc77c15ef3159/raw/10f84d5429f2831084eb24373659f34a95bda090/countries_temp";

  setState = null;
  mapCountries = countries.features;

  load = (setState) => {
    this.setState = setState;

    papaparser.parse(this.dataURL, {
      download: true,
      header: true,
      complete: (result) => this.#processTempData(result.data),
    });
  };

  #processTempData = (tempCountries) => {
    for (let i = 0; i < this.mapCountries.length; i++) {
      const country = this.mapCountries[i];
      const tempCountry = tempCountries.find(
        (tempCountry) => country.properties.ISO_A3 === tempCountry.ISO3
      );

      if (tempCountry != null) {
        let temp = Number(tempCountry.Temperature);
        country.properties.temp = temp;
        country.properties.text = temp;
      }
      this.#setCountryColor(country);
    }

    this.setState(this.mapCountries);
  };

  #setCountryColor = (country) => {
    const key = keys.find((keyItem) =>
      keyItem.bounds(country.properties.temp)
    );

    if (key != null) country.properties.color = key.color;
  };

}

export default LoadTemp;