from flask import Flask
from flask import render_template
from pymongo import MongoClient
import json
from bson import json_util
from bson.json_util import dumps

app = Flask(__name__)

MONGODB_HOST = 'localhost'
MONGODB_PORT = 27017
DBS_NAME = 'domain'
COLLECTION_NAME = 'projects'
FIELDS = {'streetNumber': True, 'streetName': True, 'streetType': True,
                'suburb': True, 'postcode': True, 'state': True,
                'geoLocation/latitude': True,'geoLocation/longitude': True,'propertyType': True,
                'bedrooms': True,'bathrooms': True,'price': True,'result': True, 'agent':True}


FIELDS2 = {'cityname': True, 'location/0': True, 'location/1': True,
                'numberListedForAuction': True, 'numberWithdrawn': True, 'numberUnreported': True,
                'numberAuctioned': True,'numberSold': True,'totalSales': True,
                'median': True,'adjClearanceRate': True,'auctionedDate': True,'lastModifiedDateTime': True}

FIELDS3 = {'streetNumber': True, 'streetName': True, 'streetType ': True,
                'suburb': True, 'state': True, 'geoLocationLatitude': True,
                'geoLocationLongitude': True,'propertyType': True,'bedrooms': True,
                'bathrooms': True,'price': True,'result': True,'agent': True}

FIELDS4 = {'streetNumber': True, 'streetName': True, 'streetType ': True,
                'suburb': True, 'state': True, 'geoLocation/latitude': True,
                'geoLocation/longitude': True,'propertyType': True,'bedrooms': True,
                'bathrooms': True,'price': True,'result': True,'agent': True,'agent_new':True}

FIELDS5 = {'streetNumber': True, 'streetName': True, 'streetType': True,
                'suburb': True, 'state': True, 'geoLocation/latitude': True,
                'geoLocation/longitude': True,'propertyType': True,'bedrooms': True,
                'bathrooms': True,'price': True,'result': True,'agent': True, 'postcode':True}


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/Chris1")
def Chris1():
    return render_template("indexChris1.html")

@app.route("/Chris2")
def Chris2():
    return render_template("Chris2.html")

@app.route("/Joanna")
def Joanna():
    return render_template("Joanna.html")

@app.route("/Navid")
def Navid():
    return render_template("indexNavid.html")

@app.route("/Christian")
def Christian():
    return render_template("clusters.html")

@app.route("/Qasse")
def Qasse():
    return render_template("indexQasse.html")


# Chris 1 Map
@app.route("/domain/projects/")
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

# Chris 2 Map
@app.route("/domain/projects2/")
def donorschoose_projects2():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME]["projects2"]
    projects = collection.find(projection=FIELDS2)
    json_projects = []
    for project in projects:
        json_projects.append(project)
    json_projects = json.dumps(json_projects, default=json_util.default)
    connection.close()
    return json_projects

# Christian Map
@app.route("/domain/christian_db/")
def donorschoose_christian_db():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection["christian_db"]["domain"]
    projects = collection.find(projection=FIELDS3)
    json_projects = []
    for project in projects:
        json_projects.append(project)
    json_projects = json.dumps(json_projects, default=json_util.default)
    connection.close()
    return json_projects

# Qasse Map
@app.route("/domain/qasse_db/")
def donorschoose_qasse_db():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection["qasse_db"]["domain"]
    projects = collection.find(projection=FIELDS4)
    json_projects = []
    for project in projects:
        json_projects.append(project)
    json_projects = json.dumps(json_projects, default=json_util.default)
    connection.close()
    return json_projects

# Navid Map
@app.route("/domain/navid_db/")
def donorschoose_navid_db():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection["navid_db"]["domain"]
    projects = collection.find(projection=FIELDS5)
    json_projects = []
    for project in projects:
        json_projects.append(project)
    json_projects = json.dumps(json_projects, default=json_util.default)
    connection.close()
    return json_projects


if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5001,debug=True)