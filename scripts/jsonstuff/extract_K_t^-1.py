# So here we are going to extract the co-efficients for the different countries

# I nabbed this from "https://github.com/UoNTeam22/Data-Analysis/blob/main/notebooks/country-model-equations.ipynb"

from common import Country, get_data
import json

data = get_data()

# Trim the data
data = data.strip()

# Remove all "The model of" from the data
data = data.replace('The model of ', '')

# Get each line of data
data = data.split('\n')

# Remove the stuff after the colon
names = [name.split(':')[0] for name in data]

# Keep the stuff after the colon
coefs = [name.split(':')[-1] for name in data]

# Get all of the coefficients
for i in range(len(coefs)):
    # Get the coef
    coef = coefs[i]

    # Remove the brackets
    coef = coef.replace('[', '')
    coef = coef.replace(']', '')

    # Split the coef into two parts
    coef = coef.split()

    # Make sure the coef is in the right order
    assert len(coef) == 2

    # Set the coef
    coefs[i] = [float(i) for i in coef]

# For some reason, the thing after the comma should be before the comma
for i in range(len(names)):
    name = names[i]
    if ',' not in name:
        continue
    
    names[i] = name.split(',')[1].strip() + ' ' + name.split(',')[0].strip()

# Strip the whitespace
names = [name.strip() for name in names]

assert len(names) == len(coefs)

class TemperatureTime:
    def __init__(self, country, time_coef, const) -> None:
        self.country = country
        self.time_coef = time_coef
        self.const = const
    
    def __str__(self) -> str:
        return f'{self.country.name}\'s temperature (Degrees C) = {self.time_coef} * (time in years) + {self.const}'

countries = [Country(name, None) for name in names]
kt = [TemperatureTime(country, coef[0], coef[1]) for country, coef in zip(countries, coefs)]

exports = []
for i in range(len(kt)):
    k = kt[i]
    
    exports.append(
        {
            'country': k.country.name,
            'xYearCoef': k.time_coef,
            'const': k.const
        }
    )

# Print the JSON
print(json.dumps(exports, indent=4))