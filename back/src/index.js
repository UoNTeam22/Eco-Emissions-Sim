let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// Use body parser
app.use(bodyParser.json());

const PORT = 3000;

// Include the routers
let modelsRouter = require('./routers/models');

// Use the routers
app.use('/api/models', modelsRouter); // TODO currently bound to /api to mimic the nginx config

const server = app.listen(PORT, () => {
    console.log(`Eco RESTful API bound locally on port ${PORT}!`);
});

module.exports = {app, server};