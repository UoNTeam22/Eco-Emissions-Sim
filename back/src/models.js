const fs = require('fs');
const path = require('path');

function openJsonData(filepath) {
    let dataPath = './data';

    // Make JSON file path absolute
    dataPath = path.resolve(__dirname, dataPath);

    // Get the JSON file path
    let jsonPath = path.join(dataPath, filepath);

    // Read the countries from the JSON file
    return JSON.parse(fs.readFileSync(jsonPath));
}

class Country {
    #name = '';
    #code = '';

    constructor(name, code = null) {
        this.#name = name;
        this.#code = code;
    }

    get name() {
        return this.#name;
    }

    get code() {
        return this.#code;
    }

    toString() {
        return this.#name;
    }

    static get all() {
        // Parse the JSON data
        let countries = openJsonData('countries.json');

        // Convert the countries to Country objects
        let converted = [];
        for (let country of countries) {
            // TODO use the code to get the country name (rather than hardcoded English name)
            let {name, code} = country;

            // Create the country object
            country = new Country(name, code);
            
            // Add the code to the country object
            converted.push(country);
        }

        return converted;
    }
}

class Model {
    #params = {};

    constructor(params) {
        this.#params = params;
    }

    get params() {
        return this.#params;
    }

    /**
     * Calculate the result for the given country
     * @param {Country} country country to calculate for
     * @param {Object} options validated parameters for the model 
     * @returns {Number} the result
     */
    _calculate(country, options) {
        return 0;
    }

    /**
     * Checks that the perameters are valid
     * @param {Object} options parameters for the model 
     * @returns {Boolean} true if the options are valid
     */
    _validateOptions(options) {
        return true;
    }

    /**
     * Calculate the result for the given country
     * @param {Country} country the country to calculate for
     * @param {Object} options parameters for the model 
     * @returns {Number} the result
     */
    calculate(country, options) {
        // Ensure that all of the perameters are present
        let paramNames = Object.keys(this.#params);
        for (let i = 0; i < paramNames.length; i++) {
            if (!options[paramNames[i]]) {
                throw new Error(`Missing parameter: ${paramNames[i]}`);
            }
        }

        // Validate the options
        if (!this._validateOptions(options)) {
            throw new Error('Invalid options');
        }

        // Calculate the result
        return this._calculate(country, options);
    }

    get paramNames() {
        return Object.keys(this.#params);
    }
}

class ChangeTemperatureTimeModel extends Model {
    constructor() {
        super({
            'time': 0
        });
    }

    _calculate(country, options) {
        let {time} = options;

        // Get the country coefficients
        let coefs = ChangeTemperatureTimeModel.getCountryCoefs(country);

        if (!coefs) {
            throw new Error(`No coefficients found for country: ${country}`);
        }

        // y = mx + c

        // Where:

        // y is the temperature in change degrees Celsius
        // x is the year (so 1997, 2025, 2050, etc.)

        // m is a coefficient related to the country
        // c is an obituary constant

        // What we now
        const m = coefs['xYearCoef'];
        const c = coefs['const'];
        let x = time;

        // What we want
        let y = (m * x) + c;

        return y;
    }

    _validateOptions(options) {
        let {time} = options;

        // Ensure that time isn't negative
        if (time < 0) {
            return false;
        }

        return true;
    }

    static get coefs() {
        return openJsonData('models/temperature-change-at-year.json');
    }

    static getCountryCoefs(country) {
        // Get the country name
        let name = country.name;

        // Search the coefficients for the country
        let coefs = this.coefs;

        for (let coef of coefs) {
            if (coef.country != name) continue;
            
            return coef;
        }

        return null;
    }
}

module.exports = {Country, Model, ChangeTemperatureTimeModel};