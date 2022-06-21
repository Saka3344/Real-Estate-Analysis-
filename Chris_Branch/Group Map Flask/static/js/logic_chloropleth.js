queue().defer(d3.json, "static/geojson/geo_json_mean_price_dump.geojson")
    .await(makeGraphs);

function makeGraphs(error, geoData) {



// Declare the starting parameters for the map
var myMap = L.map("map", {
    center: [-37.81, 144.96],
    zoom: 11
  });
  
  // Declare the source of the map tiles
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

  // var geoData = "geo_json_mean_price_dump.geojson";

  var geojson;


/////////////// Adding some more funky features ////////////
function chooseColor(d) {
  return   d > 5000000  ? '#800026' :
           d > 4000000  ? '#BD0026' :
           d > 3000000  ? '#E31A1C' :
           d > 2000000  ? '#FC4E2A' :
           d > 1000000  ? '#FD8D3C' :
           d > 500000   ? '#FEB24C' :
           d > 250000   ? '#FED976' :
                          '#FFEDA0';
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Grab data with d3
// d3.json(geoData).then(function(data) {
  L.geoJson(geoData, {
    // Style each feature (in this case suburb)
    
    style: function(feature) {
      
      return {
        color: "white",
        fillColor: chooseColor(feature.properties.mean_price),
        fillOpacity: 0.5,
        weight: 1.5
      };
    },

    // Called on each feature
    onEachFeature: function(feature, layer) {
      // Set mouse events to change map styling
      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function,
        // that feature's opacity changes to 90% so that it stands out
        mouseover: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.8
          });
        },
        // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
        mouseout: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.5
          });
        },
        // When a feature (country) is clicked, it is enlarged to fit the screen
        click: function(event) {
          myMap.fitBounds(event.target.getBounds());
        }
      });
      // Giving each feature a pop-up with information pertinent to it
      layer.bindPopup("<span>Suburb: </span><h1>" + feature.properties.vic_loca_2 + 
                        "</h1> <hr> <span>Mean Price: </span> <h2>$" + 
                        numberWithCommas(Math.round(feature.properties.mean_price)) + 
                        "</h2>"
                     );

    }
  }).addTo(myMap);

  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 250000, 500000, 1000000, 2000000, 3000000, 4000000, 5000000, 6000000],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + chooseColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

  legend.addTo(myMap);

  
// });

};

