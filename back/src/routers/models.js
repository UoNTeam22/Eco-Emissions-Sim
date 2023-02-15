// Include express
const express = require('express');

const {Model} = require('../models');

class ModelRegistry {
    #models;
    
    constructor() {
        this.#models = {};
    }

    /**
     * Adds a model to the registry
     * @param {Model} model the model to add 
     */
    addModel(model) {
        // Check that the model is an instance of the Model class
        if (!(model instanceof Model)) {
            throw new Error('Model must be an instance of the Model class');
        }

        // Get the model name
        let modelName = model.constructor.name;

        // Check that we don't already have a model with this name
        if (this.#models[modelName]) {
            throw new Error(`Model ${modelName} is already registered`);
        }

        this.#models[modelName] = model;
    }

    /**
     * Removes a model from the registry
     * @param {String} modelName the name of the model to remove
     */
    removeModel(modelName) {
        // Check that we have a model with this name
        if (!this.#models[modelName]) {
            throw new Error(`Model ${modelName} is not registered`);
        }

        delete this.#models[modelName];
    }

    /**
     * Gets a model from the registry
     * @param {String} modelName the name of the model to get
     * @returns {Model} the model or undefined if it doesn't exist
    */
    getModel(modelName) {
        return this.#models[modelName];
    }

    getModelNames() {
        return Object.keys(this.#models);
    }

    getModelOverview(modelName) {
        let model = this.getModel(modelName);
        if (!model) return model;

        let modelParams = model.paramNames;
        let modelOverview = {
            name: modelName,
            params: modelParams
        };

        return modelOverview;
    }

    get overview() {
        let overviews = [];

        for (let modelName in this.#models) {
            let overview = this.getModelOverview(modelName);
    
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
router.modelRegistry.addModel(new ChangeTemperatureTimeModel());

router.get('/', (req, res) => {
    // Display the model overview
    res.json(router.modelRegistry.overview);
});

router.get('/:modelName', (req, res) => {
    // Get the model name
    let modelName = req.params.modelName;

    // Get the model
    let model = router.modelRegistry.getModel(modelName);

    // Check that the model exists
    if (!model) {
        res.status(404).send(`Model ${modelName} not found`);
        return;
    }

    // Get the overview
    let overview = router.modelRegistry.getModelOverview(modelName);

    // Display the model overview
    res.json(overview);
});

// Export the router
module.exports = router;