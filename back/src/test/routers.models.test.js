const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

const {app, server} = require('../index');

describe('Models Router', () => {
    const MODEL_ID = 'change-temperature-time';

    function testIsTemperatureModel(model) {
        model.should.have.property('name');
        model.should.have.property('params');
        
        // Check params
        model.params.should.be.a('array');

        // Check that the params are strings
        for (let param of model.params) {
            param.should.be.a('string');
        }

        // Check the name of the model
        model.name.should.be.a('string');
        model.name.should.equal('ChangeTemperatureTimeModel');

        // Check the model id
        model.id.should.be.a('string');
        model.id.should.equal(MODEL_ID);

        // Make sure that there is only one param (for now)
        model.params.should.have.lengthOf(1);

        // Check that the param is the correct one
        model.params[0].should.equal('time');
    }

    describe('GET /api/models', () => {
        it('should return a list of models', async () => {
            let requester = chai.request(app);

            let resp = await requester.get('/api/models');
            requester.close();

            resp.should.have.status(200);
            resp.body.should.be.a('array');
            resp.body.should.have.lengthOf(1);

            testIsTemperatureModel(resp.body[0]);
        });
    });

    describe('GET /api/models/:modelId', () => {
        it('should return the model overview', async () => {
            let requester = chai.request(app);

            let resp = await requester.get('/api/models/' + MODEL_ID);
            requester.close();

            resp.should.have.status(200);
            resp.body.should.be.a('object');

            testIsTemperatureModel(resp.body);
        });

        it('should return a 404 if the model does not exist', async () => {
            let requester = chai.request(app);

            let resp = await requester.get('/api/models/non-existent-model');
            requester.close();

            resp.should.have.status(404);
        });
    });

    describe('PUT /api/models/:modelId', () => {
        it('should return a 404 if the model does not exist', async () => {
            let requester = chai.request(app);

            let resp = await requester.put('/api/models/non-existent-model');
            requester.close();

            resp.should.have.status(404);
        });

        it('should return a 400 if the parameters are invalid', async () => {
            let requester = chai.request(app);

            let resp = await requester.put('/api/models/' + MODEL_ID)
                .send({funny: 'idk something that you would not expect'});
            requester.close();

            resp.should.have.status(400);
        });

        it('should return a 200 if the parameters are valid', async () => {
            let requester = chai.request(app);

            let resp = await requester.put('/api/models/' + MODEL_ID)
                .send({time: 2040});
            requester.close();

            resp.should.have.status(200);

            resp.body.should.be.a('object');
            
            resp.body.should.have.property('params');
            resp.body.params.should.be.a('object');

            resp.body.params.should.have.property('time');
            resp.body.params.time.should.be.a('number');
            resp.body.params.time.should.equal(2040);

            resp.body.should.have.property('results');

            // Get the results
            let results = resp.body.results;

            // Make sure that the results are an array
            results.should.be.a('array');
            
            // Make sure that there is more than one result
            results.should.have.lengthOf.above(1);

            allNull = true;
            // Check all the results
            for (let result of results) {

                // Make sure that the first result is an object
                result.should.be.a('object');

                // Make sure that the first result has a country property
                result.should.have.property('country');
                result.country.should.be.a('string');

                // Make sure that the first result has a value property
                result.should.have.property('value');
                result.value.should.be.a('number');

                // Should have a country code
                result.should.have.property('code');

                // Check if it is null
                if (result.code !== null) {
                    result.code.should.be.a('string');
                    allNull = false;

                    // Make sure it has 3 characters
                    result.code.should.have.lengthOf(3);
                }

                // Make sure that the result is between -10 and 10
                result.value.should.be.within(-10, 10, 'The value is not between -10 and 10 for ' + result.country);
            }

            // Make sure that there is at least one country with a code
            allNull.should.be.false;
        });

        it('should return 400 if the time is invalid', async () => {
            let requester = chai.request(app);

            let resp = await requester.put('/api/models/' + MODEL_ID)
                .send({time: 'not a number'});
            requester.close();

            resp.should.have.status(400);
        });
    });
});

after(() => {
    server.close();
});