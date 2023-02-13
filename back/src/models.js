const fs = require('fs');

class Country {
    #name = '';

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    toString() {
        return this.#name;
    }

    static get all() {
        const JSON_PATH = './data/countries.json';

        // Read the countries from the JSON file
        let data = fs.readFileSync(JSON_PATH);

        // Parse the JSON data
        let countries = JSON.parse(data);

        // Convert the countries to Country objects
        let converted = [];
        for (let country of countries) {
            // TODO use the code to get the country name (rather than hardcoded English name)
            let {name, code} = country;

            // Create the country object
            country = new Country(name);
            
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
}