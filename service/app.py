from flask import request, url_for, jsonify
from flask_api import FlaskAPI, status, exceptions
import csv, json
import pandas as pd



app = FlaskAPI(__name__)

notes = {
    0: 'do the shopping',
    1: 'build the codez',
    2: 'paint the door',
}

members = {
    0: 'Walid',
    1: 'Hicham',
    2: 'Bas',
    3: 'Lorenzo',
    4: 'Joost',
}

def products():
    # with open('../resources/products.json', 'r') as theFile:
    #     data = theFile.read()
    #     return { data } 
    f = open('../resources/Dept_products3.csv', 'r' ) 
    reader = csv.DictReader( f, fieldnames = ( "ID","Brand","CPUrating","RAM","GPUrating"))  
    out = json.dumps( [ row for row in reader ] ) 

    response = json.loads(out) 
    return response
    # print (out)n

    # df = pd.read_csv('../resources/Dept_products3.csv')
    # any operations on dataframe df
    # return df.to_json('file.json')
   

@app.route("/products", methods=['GET'])
def product_list():
    return products()

def member_repr(key):
    return {
        'name': members[key]
    }

@app.route("/members", methods=['GET'])
def member_list():
    return [member_repr(idx) for idx in sorted(members.keys())]

def note_repr(key):
    return {
        'url': request.host_url.rstrip('/') + url_for('notes_detail', key=key),
        'text': notes[key]
    }

@app.route("/", methods=['GET', 'POST'])
def notes_list():
    """
    List or create notes.
    """
    if request.method == 'POST':
        note = str(request.data.get('text', ''))
        idx = max(notes.keys()) + 1
        notes[idx] = note
        return note_repr(idx), status.HTTP_201_CREATED

    # request.method == 'GET'
    return [note_repr(idx) for idx in sorted(notes.keys())]


@app.route("/<int:key>/", methods=['GET', 'PUT', 'DELETE'])
def notes_detail(key):
    """
    Retrieve, update or delete note instances.
    """
    if request.method == 'PUT':
        note = str(request.data.get('text', ''))
        notes[key] = note
        return note_repr(key)

    elif request.method == 'DELETE':
        notes.pop(key, None)
        return '', status.HTTP_204_NO_CONTENT

    # request.method == 'GET'
    if key not in notes:
        raise exceptions.NotFound()
    return note_repr(key)


if __name__ == "__main__":
    app.run(debug=True)