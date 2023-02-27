const chai = require('chai');

const {Country, ChangeTemperatureTimeModel} = require('../models');

describe('Models', () => {
    describe('TemperatureTimeModel', () => {
        const VALID_EXAMPLE_COUNTRY_NAMES = [
            'Albania',
            'Algeria',
            'Argentina',
            'Rep. of Azerbaijan',
            'Bosnia and Herzegovina',
            'Cabo Verde',
            'Chile'
        ]

        const INVALID_EXAMPLE_COUNTRY_NAMES = [
            'Game of Thrones',
            'Rem Lezar'
        ]

        describe('calculate', () => {
            const YEAR = 2050;

            function calc() {
                // Get the first country
                const country = Country.all[0];

                // Create a new model
                const model = new ChangeTemperatureTimeModel();
                
                // Calculate the result
                return model.calculate(country, {time: YEAR});
            }

            it('should return a number', () => {
                chai.expect(calc()).to.be.a('number');
            });

            it('should be something reasonable (i.e. between 0 and 10 degrees change)', () => {
                chai.expect(calc()).to.be.within(0, 10);
            });
        });
    });
});