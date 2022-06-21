queue().defer(d3.json, "/domain/projects")
  .await(makeGraphs);

function makeGraphs(error, melb_data) {
  console.log(melb_data)

  // Define arrays to hold 'bedroom number' markers
  var bedrooms = [];

  // Loop through locations and create house markers
  for (var i = 0; i < melb_data.length; i++) {

    // Conditionals for countries points
    var color = "";
      if (melb_data[i].bedrooms > 4) {
        color = "green";
    }
      else if (melb_data[i].bedrooms > 3) {
        color = "yellow";
    }
      else if (melb_data[i].bedrooms > 2) {
        color = "orange";
    }
      else {
        color = "red";
  }

    // Setting the marker radius for the house by passing population into the markerSize function
    bedrooms.push(
      L.circle([melb_data[i]['geoLocation/latitude'],melb_data[i]['geoLocation/longitude']], {
        stroke: false,
        fillOpacity: 0.75,
        color: "purple",
        fillColor: color,
        radius: 400
      })
    );
  }

  // Create base layers

  // Streetmap Layer
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
  });

  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  });

  // Create a layer group for bedrooms numbers
  var bedrooms_num = L.layerGroup(bedrooms);

  // Create a baseMaps object
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap,
    "Light Map": lightmap
  };

  // Create an overlay object
  var overlayMaps = {
    "Bedroom Numbers": bedrooms_num
  };

  // Define a map object
  var myMap = L.map("map", {
    center: [-37.81, 144.96],
    zoom: 11,
    layers: [streetmap, darkmap, lightmap, bedrooms_num]
  });

  // Pass our map layers into our layer control
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
};