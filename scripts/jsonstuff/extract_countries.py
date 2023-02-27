from common import Country, get_data
import json

# I nabbed this from "https://github.com/UoNTeam22/Data-Analysis/blob/main/notebooks/country-model-equations.ipynb"

data = get_data()

# Trim the data
data = data.strip()

# Remove all "The model of" from the data
data = data.replace('The model of ', '')

# Get each line of data
names = data.split('\n')

# Remove the stuff after the colon
names = [':'.join(name.split(':')[:-1]) for name in names]

# For some reason, the thing after the comma should be before the comma
for i in range(len(names)):
    name = names[i]
    if ',' not in name:
        continue
    
    names[i] = name.split(',')[1].strip() + ' ' + name.split(',')[0].strip()

# Strip the whitespace
names = [name.strip() for name in names]

countries = []
for name in names:
    countries.append(Country(name, None)) # TODO: Add the country code

# JSONify the data
print(json.dumps([country.__dict__ for country in countries], indent=4))