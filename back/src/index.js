let express = require('express');
let app = express();

const PORT = 3000;

// Include the routers
let exampleRouter = require('./routers/example');

// Use the routers
app.use('/api', exampleRouter); // TODO currently bound to /api to mimic the nginx config

app.listen(PORT, () => {
    console.log(`Eco RESTful API bound locally on port ${PORT}!`);
});