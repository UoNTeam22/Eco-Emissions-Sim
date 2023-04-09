# This is a script used to convert 'codes.csv to temperature-change-at-year.json
#

import csv
import os
import json

CSV_DELIMITER = ';'

# Get the script directory.
script_dir = os.path.dirname(__file__)

# Read all of the country codes
codes = {}
with open(script_dir + '/codes.csv') as f:
    reader = csv.reader(f, delimiter=CSV_DELIMITER)
    next(reader) # Skip the header row.
    for row in reader:
        codes[row[0]] = row[1:]

BOUNCED = []
for name in codes:
    # Get the data
    data = codes[name]

    [iso_code, m, c] = data

    BOUNCED.append({
        "country": name,
        # "code": iso_code,
        "xYearCoef": float(m),
        "const": float(c)
    })

print('Loaded', len(BOUNCED), 'countries.')

BACK_DATA_PATH = 'back/src/data/models/temperature-change-at-year.json'

# Read the existing data.
with open(BACK_DATA_PATH) as f:
    data = json.load(f)

# Print how many countries are in the data.
print('There are', len(data), 'countries in the data.')

# Update the old data with the new data. (just so we don't lose any data)
for country in data:
    # Search the data for the name.
    for bounced in BOUNCED:
        # Check if the name is in the country name (ignore case).
        if bounced['country'].lower() in country['country'].lower():
            # Set the code.
            country['xYearCoef'] = bounced['xYearCoef']
            country['const'] = bounced['const']
            break

# Write the data back to the file.
with open(BACK_DATA_PATH, 'w') as f:
    json.dump(data, f, indent=4)