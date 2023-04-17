// This is a model wrapper for the models portion of the backend.

const MODELS_ENDPOINT = '/api/models';

export default class ModelClient {
    #id = null;
    #cachedBase = null;
    #pullPromise = null;

    constructor(id) {
        this.#id = id;
    }

    /**
     * The ID of the model
     */
    get id() {
        return this.#id;
    }

    /**
     * Gets the base URL for the model
     */
    get url() {
        return `${MODELS_ENDPOINT}/${this.#id}`;
    }

    /**
     * Pulls the data for the model
     * @returns {Promise<Object>} the base data for the model
     */
    async #pullBase() {
        const response = await fetch(this.url);
        const data = await response.json();
        return data;
    }

    /**
     * Pulls the base data for the model or uses the cached data
     * @returns {Promise<Object>} the base data for the model
     */
    async getBase() {
        // Attempt to get the base data
        if (this.#cachedBase === null) {

            // If there is no pull promise, create one
            if (this.#pullPromise === null) {
                this.#pullPromise = this.#pullBase();
            }

            // Wait for the pull promise to resolve
            this.#cachedBase = await this.#pullPromise;
        }

        // Return the cached base
        return this.#cachedBase;
    }

    /**
     * Gets the parameters for the model
     * @returns {Promise<Object>} the parameters for the model
     */
    async getParams() {
        const base = await this.getBase();
        return base.params;
    }

    /**
     * Gets the name of the model
     * @returns {Promise<String>} the name of the model
    */
    async getName() {
        const base = await this.getBase();
        return base.name;
    }

    /**
     * Internal method to send the parameters to the model
     * @param {Object} params parameters to send to the model 
     * @returns {Promise<Object>} the result of the calculation (JSON of every country's results)
     */
    async #calculate(params) {
        // PUT the parameters to the model
        const URL = this.url;

        const response = await fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

        return await response.json();
    }

    /**
     * Gets the results of the model
     * @param  {...any} args arguments to pass to the internal calculate method
     * @returns {Promise<Object>} the results of the calculation (JSON of every country's results)
     */
    async getResults(...args) {
        const calculated = await this.#calculate(...args);
        return calculated.results;
    }

    /**
     * Gets all the models from the server
     * @returns {Promise<Array<ModelClient>>} the models from the server
    */
    static async getModels() {
        const response = await fetch(MODELS_ENDPOINT);
        const data = await response.json();

        let models = [];
        for (let model of data) {
            models.push(new ModelClient(model.id));
        }

        return models;
    }

    toString() {
        return `${this.constructor.name}(${this.#id})`;
    }
}

// Here's some example code for using the client model
/**
    import ClientModel from './api/models';
    
    ClientModel.getModels().then(async models => {
        for (let model of models) {
            // Current the only one is "ChangeTemperatureTimeModel"

            console.log(await model.getName());
            console.log(await model.getParams());
            console.log(await model.getResults({
                "time": 2020 // Year 2020
            }))
        }
    });
 */