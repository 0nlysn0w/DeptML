from flask import request, url_for, jsonify
from flask_api import FlaskAPI, status, exceptions
import csv, json
import pandas as pd
from flask_cors import CORS, cross_origin
from testpredict import prediction


app = FlaskAPI(__name__)
cors = CORS(app)

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

@app.route("/predict", methods=['GET'])
def predict():
    return prediction()

def products():
    with open('../resources/products.json') as f:
        data = json.load(f)
    return data

@app.route("/products", methods=['GET'])
def product_list():
    return products()

@app.route("/products/<int:productid>", methods=['GET'])
def product_detail(productid):
    filtered = list(filter(lambda x: x['ID'] == productid, products()))
    return filtered
   
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