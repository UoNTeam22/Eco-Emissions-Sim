const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

const {app, server} = require('../index');

describe('Models Router', () => {
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

    describe('GET /api/models/:modelName', () => {
        it('should return the model overview', async () => {
            let requester = chai.request(app);

            let resp = await requester.get('/api/models/ChangeTemperatureTimeModel');
            requester.close();

            resp.should.have.status(200);
            resp.body.should.be.a('object');

            testIsTemperatureModel(resp.body);
        });

        it('should return a 404 if the model does not exist', async () => {
            let requester = chai.request(app);

            let resp = await requester.get('/api/models/NonExistantModel');
            requester.close();

            resp.should.have.status(404);
        });
    });
});

after(() => {
    server.close();
});