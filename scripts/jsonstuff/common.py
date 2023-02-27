import os

class Country:
    def __init__(self, name, code):
        self.name = name
        self.code = code

def get_data():
    # Get the directory of this file
    dir = os.path.dirname(os.path.realpath(__file__))

    # Read the data
    with open(dir + '/raw.txt', 'r') as f:
        return f.read()