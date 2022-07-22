import json
def write_json(new_data, filename='first.json'):
    with open  (filename, 'w') as f:
        json.dump(new_data, f)
