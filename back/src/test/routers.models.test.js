const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

const {app, server} = require('../index');

describe('Models Router', () => {
    describe('GET /api/models', () => {
        it('should return a list of models', async () => {
            let requester = chai.request(app);

            let resp = await requester.get('/api/models');
            requester.close();

            resp.should.have.status(200);
            resp.body.should.be.a('array');
            resp.body.should.have.lengthOf(1);

            let model = resp.body[0];
            
            // For now they're just strings
            model.should.be.a('string');
            model.should.equal('ChangeTemperatureTimeModel');
        });
    });
});

after(() => {
    server.close();
});