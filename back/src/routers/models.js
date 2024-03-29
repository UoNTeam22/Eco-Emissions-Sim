// Include express
const express = require('express');

const {Model, Country} = require('../models');

class ModelRegistry {
    #models;
    
    constructor() {
        this.#models = {};
    }

    /**
     * Adds a model to the registry
     * @param {Model} model the model to add #
     * @param {String} modelId the id of the model to add, defaults to the model's constructor name (however this may not be unique or RESTful)
     */
    addModel(model, modelId) {
        // Check that the model is an instance of the Model class
        if (!(model instanceof Model)) {
            throw new Error('Model must be an instance of the Model class');
        }

        // Get the model name
        modelId = modelId || model.constructor.name;

        // Check that we don't already have a model with this name
        if (this.#models[modelId]) {
            throw new Error(`Model ${modelId} is already registered`);
        }

        this.#models[modelId] = model;
    }

    /**
     * Removes a model from the registry
     * @param {String} modelId the id of the model to remove
     */
    removeModel(modelId) {
        // Check that we have a model with this name
        if (!this.#models[modelId]) {
            throw new Error(`Model ${modelId} is not registered`);
        }

        delete this.#models[modelId];
    }

    /**
     * Gets a model from the registry
     * @param {String} modelId the name of the model to get
     * @returns {Model} the model or undefined if it doesn't exist
    */
    getModel(modelId) {
        return this.#models[modelId];
    }

    getModelNames() {
        return Object.keys(this.#models);
    }

    getModelOverview(modelId) {
        let model = this.getModel(modelId);
        if (!model) return model;

        let modelParams = model.paramNames;
        let modelOverview = {
            name: model.constructor.name,
            params: modelParams,
            id: modelId
        };

        return modelOverview;
    }

    get overview() {
        let overviews = [];

        for (let modelId in this.#models) {
            let overview = this.getModelOverview(modelId);
    
            // Ensure that we got an overview
            if (!overview) continue;

            // Add it
            overviews.push(overview);
        }

        return overviews;
    }
}

// Create a router
const router = express.Router();

// Create the model registry
router.modelRegistry = new ModelRegistry();

// Include the models
const {ChangeTemperatureTimeModel} = require('../models');

// Register them
router.modelRegistry.addModel(new ChangeTemperatureTimeModel(), 'change-temperature-time');

router.get('/', (req, res) => {
    // Display the model overview
    res.json(router.modelRegistry.overview);
});

// For any /:modelId routes, get the model and set it on the request
// This will validate that the model exists
router.use('/:modelId', (req, res, next) => {
    // Get the model name
    let modelId = req.params.modelId;

    // Get the model
    let model = router.modelRegistry.getModel(modelId);

    // Check that the model exists
    if (!model) {
        res.status(404).send(`Model ${modelId} not found`);
        return;
    }

    // Set the model
    req.model = model;

    // Continue
    next();
});

router.get('/:modelId', (req, res) => {
    // Display the model overview
    res.json(router.modelRegistry.getModelOverview(req.params.modelId));
});

router.put('/:modelId', async (req, res) => {
    // Get the model
    let model = req.model;

    // Get the parameters
    let params = req.body;

    // Run the calculation
    // I am awaiting the result here as future models may be asynchronous (e.g. if they use a database or an API)
    let results = [];

    for (let country of Country.all) {
        try {
            let result = await model.calculate(country, params);

            if (!result) continue;

            results.push({
                country: country.name,
                code: country.code,
                value: result
            });
        } catch (err) {
            continue;
        }
    }

    if (results.length === 0) {
        res.status(400).send('Unable to calculate any valid results');
        return;
    }

    let resultOverview = {
        params,
        results
    };

    // Display the result
    res.json(resultOverview);
});

// Export the router
module.exports = router;