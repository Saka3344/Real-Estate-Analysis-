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
COLLECTION_NAME = 'projects2'
FIELDS = {'cityname': True, 'location/0': True, 'location/1': True,
                'numberListedForAuction': True, 'numberWithdrawn': True, 'numberUnreported': True,
                'numberAuctioned': True,'numberSold': True,'totalSales': True,
                'median': True,'adjClearanceRate': True,'auctionedDate': True,'lastModifiedDateTime': True}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/domain/projects2/")
def donorschoose_projects2():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME]
    projects2 = collection.find(projection=FIELDS)
    json_projects2 = []
    for project in projects2:
        json_projects2.append(project)
    json_projects2 = json.dumps(json_projects2, default=json_util.default)
    connection.close()
    return json_projects2

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5001,debug=True)