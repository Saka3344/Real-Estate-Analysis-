from flask import Flask, jsonify
from flask import render_template
from pymongo import MongoClient
import json
from bson import json_util

app = Flask(__name__)

MONGODB_HOST = 'localhost'
MONGODB_PORT = 27017
DBS_NAME = 'domain'
COLLECTION_NAME = 'project3'
FIELDS = {'streetNumber': True, 'streetName': True, 'streetType': True,
                'suburb': True, 'state': True, 'geoLocation/latitude': True,
                'geoLocation/longitude': True,'propertyType': True,'bedrooms': True,
                'bathrooms': True,'price': True,'result': True,'agent': True, 'postcode':True}

@app.route("/")
def index():

    return render_template("index.html")

@app.route("/domain/project3")
def donorschoose_projects():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME]
    projects = collection.find(projection=FIELDS)
    json_projects = []
    for project in projects:
        json_projects.append(project)
    json_projects = json.dumps(json_projects, default=json_util.default)
    connection.close()
    return json_projects


if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000,debug=True)