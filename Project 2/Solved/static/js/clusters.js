// Creating map object
var myMap = L.map("map", {
  center: [-37.813629, 144.963058],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Store API query variables
var baseURL = "static/data/properties_melb_cleanedCopy.geojson";
// var baseURL = "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?";
// var date = "$where=created_date between'2016-01-01T00:00:00' and '2017-01-01T00:00:00'";
// var complaint = "&complaint_type=Rodent";
// var limit = "&$limit=10000";

// Assemble API query URL
var url = baseURL
// var url = baseURL + date + complaint + limit;

// Grab the data with d3
d3.json(url).then(function(response) {

  // Create a new marker cluster group
  var markers = L.markerClusterGroup();



  // Loop through data
  for (var i = 0; i < response.features.length; i++) {

    var location1 = response.features[i].geometry.coordinates[0];
    var location2 = response.features[i].geometry.coordinates[1];
    // Set the data location property to a variable
//    var location = response[i].location;


    console.log(location1, location2)
    // Check for location property
    if (location1) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([location2, location1]))
//        .bindPopup(response[i].descriptor));
    }

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});
