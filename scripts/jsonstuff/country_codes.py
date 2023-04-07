import csv
import os
import json



# Get the script directory.
script_dir = os.path.dirname(__file__)
filename = script_dir + '/codes.csv'

# Read all of the country codes
codes = {}
with open(filename) as f:
    reader = csv.reader(f)
    next(reader) # Skip the header row.
    for row in reader:
        codes[row[0]] = row[1]

BACK_DATA_PATH = 'back/src/data/countries.json'

# Read the existing data.
with open(BACK_DATA_PATH) as f:
    data = json.load(f)

# The names don't line up exactly, so let's just fit the codes to the names.
for name in codes:
    # Get the code
    code = codes[name]

    # Search the data for the name.
    for country in data:
        # Check if the name is in the country name (ignore case).
        if name.lower() in country['name'].lower():
            # Set the code.
            country['code'] = code
            break

# Write the data back to the file.
with open(BACK_DATA_PATH, 'w') as f:
    json.dump(data, f, indent=4)