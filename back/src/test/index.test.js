const chai = require('chai');

describe('Example', () => {
    describe('true', () => {
        it('should be true', () => {
            chai.expect(true).to.be.true;
        });

        it('should not be false', () => {
            chai.expect(true).to.not.be.false;
        });
    });
});