// Include express
const express = require('express');

// Create a router
const router = express.Router();

// TODO add your routes here

// Here's an example route
router.get('/', (req, res) => {
    res.send({
        message: 'Hello World!'
    });
});

// Export the router
module.exports = router;