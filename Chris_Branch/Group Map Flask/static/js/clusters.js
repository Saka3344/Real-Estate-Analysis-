// var propData = d3.json("/domain/projects")
// d3.json(propData).then(function (data) {
//   console.log(data)

// Creating map object
var myMap = L.map("map", {
  center: [-37.8136, 144.9631],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "light-v10",
  accessToken: API_KEY
}).addTo(myMap);

L.circle([-37.8136, 144.9631], {
  color: "salmon",
  fillColor: "salmon",
  fillOpacity: 0.2,
  radius: 10000
}).addTo(myMap);

L.circle([-37.8136, 144.9631], {
  color: "orange",
  fillColor: "orange",
  fillOpacity: 0.1,
  radius: 20000
}).addTo(myMap);

L.circle([-37.8136, 144.9631], {
  color: "green",
  fillColor: "green",
  fillOpacity: 0.05,
  radius: 30000
}).addTo(myMap);

// Store API query variables
// var propData = d3.json("/domain/projects")

// Data Preview
console.log("---Data Preview---");
d3.json("/domain/christian_db").then((data) => {console.log(data);});

// // Grab the data with d3
d3.json("/domain/christian_db").then(function(response) {

  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    var property = response[i]

    if (property) {
    
      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([property.geoLocationLatitude, property.geoLocationLongitude])
        .bindPopup("<h5>" + response[i].propertyType +"</h5><h5>Price: " + response[i].price + "</h5"));
    }
  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});
