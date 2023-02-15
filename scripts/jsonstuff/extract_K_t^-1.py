# So here we are going to extract the co-efficients for the different countries

# I nabbed this from "https://github.com/UoNTeam22/Data-Analysis/blob/main/notebooks/country-model-equations.ipynb"

from common import Country
import json

data = """


The model of Afghanistan, Islamic Rep. of: [ 2.68462189e-02 -5.29391989e+01]
The model of Albania: [ 3.17259122e-02 -6.26657338e+01]
The model of Algeria: [ 3.27581174e-02 -6.45183626e+01]
The model of American Samoa: [ 1.91069858e-02 -3.76447792e+01]
The model of Andorra, Principality of: [ 3.36609730e-02 -6.63066694e+01]
The model of Angola: [ 2.63468006e-02 -5.19046440e+01]
The model of Anguilla: [ 1.97925965e-02 -3.90078465e+01]
The model of Antigua and Barbuda: [ 1.97777438e-02 -3.89818491e+01]
The model of Argentina: [ 1.34446325e-02 -2.64556567e+01]
The model of Armenia, Rep. of: [ 6.77328142e-02 -1.32721075e+02]
The model of Aruba, Kingdom of the Netherlands: [ 2.10088283e-02 -4.14006157e+01]
The model of Australia: [ 1.97647805e-02 -3.88883994e+01]
The model of Austria: [ 3.99552089e-02 -7.87641815e+01]
The model of Azerbaijan, Rep. of: [ 6.76173526e-02 -1.32473613e+02]
The model of Bahamas, The: [ 2.12482813e-02 -4.18409183e+01]
The model of Bahrain, Kingdom of: [ 3.83793231e-02 -7.58067077e+01]
The model of Bangladesh: [ 1.80710206e-02 -3.57575660e+01]
The model of Barbados: [ 1.86130918e-02 -3.67454763e+01]
The model of Belarus, Rep. of: [ 5.87510567e-02 -1.14580713e+02]
The model of Belgium: [ 3.01434218e-02 -5.79843015e+01]
The model of Belize: [ 1.97640931e-02 -3.89263913e+01]
The model of Benin: [ 2.54584347e-02 -5.01152353e+01]
The model of Bhutan: [ 2.2886991e-02 -4.5271868e+01]
The model of Bolivia: [ 1.26413009e-02 -2.47801580e+01]
The model of Bosnia and Herzegovina: [ 5.11619577e-02 -9.98401475e+01]
The model of Botswana: [ 1.77649921e-02 -3.49407058e+01]
The model of Brazil: [ 2.58350608e-02 -5.08936225e+01]
The model of British Virgin Islands: [ 1.99738763e-02 -3.93525122e+01]
The model of Brunei Darussalam: [ 2.07313591e-02 -4.08822343e+01]
The model of Bulgaria: [ 3.16736647e-02 -6.25549550e+01]
The model of Burkina Faso: [ 2.46537811e-02 -4.84990552e+01]
The model of Burundi: [ 4.89793103e-02 -9.63520000e+01]
The model of Cabo Verde: [ 3.67709865e-02 -7.21376363e+01]
The model of Cambodia: [ 2.07782655e-02 -4.09372151e+01]
The model of Cameroon: [ 2.26955050e-02 -4.47003571e+01]
The model of Canada: [ 3.49813855e-02 -6.89982828e+01]
The model of Cayman Islands: [ 2.16839836e-02 -4.25335988e+01]
The model of Central African Rep.: [ 2.24985722e-02 -4.43247392e+01]
The model of Chad: [ 2.20864093e-02 -4.34982868e+01]
The model of Chile: [ 9.88212586e-03 -1.94463454e+01]
The model of China, P.R.: Hong Kong: [ 2.45441036e-02 -4.84734907e+01]
The model of China, P.R.: Macao: [ 2.45441036e-02 -4.84734907e+01]
The model of China, P.R.: Mainland: [ 2.83076150e-02 -5.58049533e+01]
The model of Colombia: [ 1.82630883e-02 -3.60220875e+01]
The model of Comoros, Union of the: [ 1.35416131e-02 -2.67180304e+01]
The model of Congo, Dem. Rep. of the: [ 2.71537282e-02 -5.35387941e+01]
The model of Congo, Rep. of: [ 2.57003612e-02 -5.07077690e+01]
The model of Cook Islands: [ 2.35830777e-02 -4.64885143e+01]
The model of Costa Rica: [ 1.55476529e-02 -3.05394737e+01]
The model of Croatia, Rep. of: [ 4.90654060e-02 -9.56372762e+01]
The model of Cuba: [ 2.08632998e-02 -4.10238628e+01]
The model of Cyprus: [ 2.92505024e-02 -5.78248322e+01]
The model of Czech Rep.: [ 5.28561576e-02 -1.03038842e+02]
The model of Denmark: [ 3.68338445e-02 -7.26336599e+01]
The model of Djibouti: [ 2.97827986e-02 -5.87420330e+01]
The model of Dominica: [ 1.95069276e-02 -3.84532928e+01]
The model of Dominican Rep.: [ 2.49893178e-02 -4.91712892e+01]
The model of Ecuador: [ 1.84325754e-02 -3.63157166e+01]
The model of Egypt, Arab Rep. of: [ 2.52468535e-02 -4.99479280e+01]
The model of El Salvador: [ 2.30266526e-02 -4.53765407e+01]
The model of Equatorial Guinea, Rep. of: [ 2.28056692e-02 -4.49650105e+01]
The model of Eritrea, The State of: [ 3.63546154e-02 -7.07262962e+01]
The model of Estonia, Rep. of: [ 5.61159066e-02 -1.09340073e+02]
The model of Eswatini, Kingdom of: [ 1.64524590e-02 -3.23833213e+01]
The model of Ethiopia, The Federal Dem. Rep. of: [ 3.55339901e-02 -6.91629754e+01]
The model of Falkland Islands (Malvinas): [ 1.82168831e-02 -3.58974766e+01]
The model of Faroe Islands: [ 2.26706504e-02 -4.47455109e+01]
The model of Fiji, Rep. of: [ 2.03096774e-02 -4.00618792e+01]
The model of Finland: [ 4.20287150e-02 -8.29074338e+01]
The model of France: [ 3.38772607e-02 -6.67757736e+01]
The model of French Polynesia: [ 1.70741407e-02 -3.36536632e+01]
The model of Gabon: [ 2.11746695e-02 -4.17852915e+01]
The model of Gambia, The: [ 3.14260180e-02 -6.17429395e+01]
The model of Georgia: [ 6.69922136e-02 -1.31389851e+02]
The model of Germany: [ 3.75959810e-02 -7.41228112e+01]
The model of Ghana: [ 2.61223162e-02 -5.14118923e+01]
The model of Gibraltar: [ 3.07927552e-02 -6.06839493e+01]
The model of Greece: [ 2.51666314e-02 -4.97775008e+01]
The model of Greenland: [ 3.85900053e-02 -7.64106022e+01]
The model of Grenada: [ 1.91158646e-02 -3.76950635e+01]
The model of Guadeloupe: [ 1.96252776e-02 -3.86815835e+01]
The model of Guatemala: [ 2.29498149e-02 -4.52309995e+01]
The model of Guiana, French: [ 2.64707033e-02 -5.22323343e+01]
The model of Guinea: [ 2.66219461e-02 -5.23939176e+01]
The model of Guinea-Bissau: [ 3.14550502e-02 -6.18601690e+01]
The model of Guyana: [ 2.59124273e-02 -5.11382329e+01]
The model of Haiti: [ 2.68083554e-02 -5.27267470e+01]
The model of Holy See: [ 2.76659968e-02 -5.45946718e+01]
The model of Honduras: [ 2.11929667e-02 -4.17490819e+01]
The model of Hungary: [ 3.70062401e-02 -7.30278502e+01]
The model of Iceland: [ 2.75756742e-02 -5.45488232e+01]
The model of India: [ 1.68426230e-02 -3.32606131e+01]
The model of Indonesia: [ 1.77986779e-02 -3.51005448e+01]
The model of Iran, Islamic Rep. of: [ 3.30517715e-02 -6.52011427e+01]
The model of Iraq: [ 3.42367002e-02 -6.76389421e+01]
The model of Ireland: [ 2.38065045e-02 -4.69863242e+01]
The model of Isle of Man: [ 2.39142253e-02 -4.72094520e+01]
The model of Israel: [ 2.98556319e-02 -5.90995304e+01]
The model of Italy: [ 3.19606029e-02 -6.30318718e+01]
The model of Jamaica: [ 2.17007906e-02 -4.26244297e+01]
The model of Japan: [ 2.09240613e-02 -4.13216586e+01]
The model of Jordan: [ 3.14743522e-02 -6.22975828e+01]
The model of Kazakhstan, Rep. of: [ 3.84186874e-02 -7.46201837e+01]
The model of Kenya: [ 2.24866208e-02 -4.43460096e+01]
The model of Kiribati: [ 2.71383402e-02 -5.35932461e+01]
The model of Korea, Dem. People's Rep. of: [ 2.93426230e-02 -5.77917033e+01]
The model of Korea, Rep. of: [ 2.46895293e-02 -4.86839841e+01]
The model of Kuwait: [ 3.71677948e-02 -7.33980139e+01]
The model of Kyrgyz Rep.: [ 3.78533927e-02 -7.37396105e+01]
The model of Lao People's Dem. Rep.: [ 2.42914331e-02 -4.78594892e+01]
The model of Latvia: [ 5.38238042e-02 -1.04860525e+02]
The model of Lebanon: [ 3.21841354e-02 -6.36425644e+01]
The model of Lesotho, Kingdom of: [ 1.74851930e-02 -3.43553636e+01]
The model of Liberia: [ 2.75636171e-02 -5.42712273e+01]
The model of Libya: [ 2.53308831e-02 -5.00359359e+01]
The model of Liechtenstein: [ 3.74895822e-02 -7.38825779e+01]
The model of Lithuania: [ 5.28589544e-02 -1.02996364e+02]
The model of Luxembourg: [ 3.18469791e-02 -6.12830011e+01]
The model of Madagascar, Rep. of: [ 1.94144368e-02 -3.82788158e+01]
The model of Malawi: [ 2.34045479e-02 -4.61028646e+01]
The model of Malaysia: [ 2.33913802e-02 -4.61028938e+01]
The model of Maldives: [ 1.60688312e-02 -3.15472364e+01]
The model of Mali: [ 2.59643046e-02 -5.10327337e+01]
The model of Malta: [ 3.21245373e-02 -6.33424127e+01]
The model of Marshall Islands, Rep. of the: [ 2.62548387e-02 -5.15091097e+01]
The model of Martinique: [ 1.95261237e-02 -3.84963648e+01]
The model of Mauritania, Islamic Rep. of: [ 3.14948176e-02 -6.18912965e+01]
The model of Mauritius: [ 1.64803279e-02 -3.25068410e+01]
The model of Mayotte: [ 1.59224830e-02 -3.14029868e+01]
The model of Mexico: [ 2.41144897e-02 -4.76220637e+01]
The model of Micronesia, Federated States of: [ 1.77403226e-02 -3.46790710e+01]
The model of Moldova, Rep. of: [ 6.70115684e-02 -1.31205453e+02]
The model of Monaco: [ 3.09306187e-02 -6.09624356e+01]
The model of Mongolia: [ 3.49053411e-02 -6.86142062e+01]
The model of Montenegro: [ 5.41691176e-02 -1.05099221e+02]
The model of Montserrat: [ 1.97777438e-02 -3.89818491e+01]
The model of Morocco: [ 3.56748281e-02 -7.02459763e+01]
The model of Mozambique, Rep. of: [ 1.65814384e-02 -3.26737750e+01]
The model of Myanmar: [ 2.40946589e-02 -4.75351872e+01]
The model of Namibia: [ 2.78528821e-02 -5.48509243e+01]
The model of Nauru, Rep. of: [ 2.05127820e-02 -4.04278368e+01]
The model of Nepal: [ 1.64762559e-02 -3.25749633e+01]
The model of Netherlands, The: [ 3.67628239e-02 -7.24915365e+01]
The model of New Caledonia: [ 1.56467478e-02 -3.08367403e+01]
The model of New Zealand: [ 1.42700687e-02 -2.81373954e+01]
The model of Nicaragua: [ 2.06274458e-02 -4.06547692e+01]
The model of Niger: [ 2.51097303e-02 -4.94057189e+01]
The model of Nigeria: [ 2.37907456e-02 -4.67967680e+01]
The model of Niue: [ 7.92266010e-03 -1.56100468e+01]
The model of Norfolk Island: [ 1.37797676e-02 -2.71333893e+01]
The model of North Macedonia, Republic of : [ 5.88803115e-02 -1.15329155e+02]
The model of Norway: [ 3.53485986e-02 -6.97318631e+01]
The model of Oman: [ 2.34071391e-02 -4.62027614e+01]
The model of Pakistan: [ 2.10214172e-02 -4.15587565e+01]
The model of Palau, Rep. of: [ 1.99015385e-02 -3.86238400e+01]
The model of Panama: [ 1.98156598e-02 -3.90367509e+01]
The model of Papua New Guinea: [ 1.70952935e-02 -3.37089753e+01]
The model of Paraguay: [ 1.27004231e-02 -2.49529030e+01]
The model of Peru: [ 2.10804336e-02 -4.14853729e+01]
The model of Philippines: [ 2.11438921e-02 -4.16566695e+01]
The model of Pitcairn Islands: [-2.97765306e-03  5.84764133e+00]
The model of Poland, Rep. of: [ 3.62008461e-02 -7.13793108e+01]
The model of Portugal: [ 2.87258593e-02 -5.65705958e+01]
The model of Puerto Rico: [ 2.20722898e-02 -4.34833552e+01]
The model of Qatar: [ 3.68738763e-02 -7.28321335e+01]
The model of Romania: [ 3.36810682e-02 -6.65030068e+01]
The model of Russian Federation: [ 6.03512792e-02 -1.17742452e+02]
The model of Rwanda: [ 4.38251232e-02 -8.61920665e+01]
The model of Saint Helena: [ 2.93380751e-02 -5.77606977e+01]
The model of Saint Pierre and Miquelon: [ 2.35501851e-02 -4.66551234e+01]
The model of Samoa: [ 1.68706204e-02 -3.32719442e+01]
The model of San Marino, Rep. of: [ 3.25823903e-02 -6.42633915e+01]
The model of São Tomé and Príncipe, Dem. Rep. of: [ 2.60147135e-02 -5.12567038e+01]
The model of Saudi Arabia: [ 3.36768377e-02 -6.65655182e+01]
The model of Senegal: [ 2.94026970e-02 -5.77609664e+01]
The model of Serbia, Rep. of: [ 5.90250000e-02 -1.14621275e+02]
The model of Seychelles: [ 1.74928080e-02 -3.44954595e+01]
The model of Sierra Leone: [ 2.55363156e-02 -5.02950696e+01]
The model of Singapore: [ 2.01453202e-02 -3.96163276e+01]
The model of Slovak Rep.: [ 5.79566502e-02 -1.13254936e+02]
The model of Slovenia, Rep. of: [ 4.73486096e-02 -9.20755115e+01]
The model of Solomon Islands: [ 1.20326371e-02 -2.37130867e+01]
The model of Somalia: [ 2.92415653e-02 -5.76220713e+01]
The model of South Africa: [ 1.83712850e-02 -3.61316219e+01]
The model of South Sudan, Rep. of: [-4.32454545e-02  8.59802909e+01]
The model of Spain: [ 2.95196192e-02 -5.81343816e+01]
The model of Sri Lanka: [ 2.33064516e-02 -4.58827681e+01]
The model of St. Kitts and Nevis: [ 1.97777438e-02 -3.89818491e+01]
The model of St. Lucia: [ 1.93250132e-02 -3.81107571e+01]
The model of St. Vincent and the Grenadines: [ 1.90783712e-02 -3.76196601e+01]
The model of Sudan: [-1.26636364e-02  2.58737091e+01]
The model of Suriname: [ 3.06887361e-02 -6.05560933e+01]
The model of Sweden: [ 3.90456901e-02 -7.70038543e+01]
The model of Switzerland: [ 3.67743522e-02 -7.24801123e+01]
The model of Syrian Arab Rep.: [ 3.30455315e-02 -6.53128171e+01]
The model of Taiwan Province of China: [ 2.35152300e-02 -4.64759705e+01]
The model of Tajikistan, Rep. of: [ 3.60487208e-02 -7.02498146e+01]
The model of Tanzania, United Rep. of: [ 2.07945003e-02 -4.09713418e+01]
The model of Thailand: [ 2.30897409e-02 -4.55014610e+01]
The model of Timor-Leste, Dem. Rep. of: [ 2.89604082e-02 -5.70650633e+01]
The model of Togo: [ 2.58592279e-02 -5.09022802e+01]
The model of Tokelau: [ 2.70322581e-02 -5.32702581e+01]
The model of Tonga: [ 1.31740349e-02 -2.59463068e+01]
The model of Trinidad and Tobago: [ 2.00656849e-02 -3.96007458e+01]
The model of Tunisia: [ 3.57509783e-02 -7.04396241e+01]
The model of Turkey: [ 2.80489688e-02 -5.54165788e+01]
The model of Turkmenistan: [ 4.04320356e-02 -7.87432863e+01]
The model of Turks and Caicos Islands: [ 1.26470588e-04 -2.00082353e-01]
The model of Tuvalu: [ 2.17609585e-02 -4.29448498e+01]
The model of Uganda: [ 1.98143310e-02 -3.90084151e+01]
The model of Ukraine: [ 7.07379310e-02 -1.38506549e+02]
The model of United Arab Emirates: [ 2.82145426e-02 -5.57355313e+01]
The model of United Kingdom: [ 2.56367530e-02 -5.06026442e+01]
The model of United States: [ 2.59251190e-02 -5.11408463e+01]
The model of United States Virgin Islands: [ 2.03984664e-02 -4.01988548e+01]
The model of Uruguay: [ 1.75269170e-02 -3.45007638e+01]
The model of Uzbekistan, Rep. of: [ 4.01790879e-02 -7.82289548e+01]
The model of Vanuatu: [ 1.62788472e-02 -3.21193323e+01]
The model of Venezuela, Rep. Bolivariana de: [ 1.88997356e-02 -3.72812096e+01]
The model of Vietnam: [ 2.30268112e-02 -4.54109549e+01]
The model of Wallis and Futuna Islands: [ 1.70761502e-02 -3.36911888e+01]
The model of West Bank and Gaza: [ 2.99289265e-02 -5.92455418e+01]
The model of Western Sahara: [ 3.03029085e-02 -5.95992056e+01]
The model of World: [ 2.78117927e-02 -5.48173121e+01]
The model of Yemen, Rep. of: [ 1.80467742e-02 -3.55133613e+01]
The model of Zambia: [ 2.27603384e-02 -4.47988502e+01]
"""

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