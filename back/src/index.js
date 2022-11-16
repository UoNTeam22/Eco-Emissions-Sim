let express = require('express');
let app = express();

const PORT = 3000;

app.get('/', function (req, res) {
    res.send('Here\'s where it all begins!');
});

app.listen(PORT, () => {
    console.log(`Eco RESTful API bound locally on port ${PORT}!`);
});