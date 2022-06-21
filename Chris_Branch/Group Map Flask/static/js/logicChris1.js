queue().defer(d3.json, "/domain/projects")
  .await(makeGraphs);

function makeGraphs(error, melb_data) {
  console.log(melb_data);

  // Define arrays to hold 'bedroom number' markers
  var one_bedroom = [];
  var two_bedrooms = [];
  var three_bedrooms = [];
  var four_bedrooms = [];
  var five_bedrooms = [];
  var six_bedrooms = [];
  var other=[];

  // Loop through locations and create house markers
  for (var i = 0; i < melb_data.length; i++) {

    // Conditionals for countries points
      if (melb_data[i].bedrooms == 6) {
        six_bedrooms.push(melb_data[i])
    }
      else if (melb_data[i].bedrooms == 5) {
        five_bedrooms.push(melb_data[i])
    }
      else if (melb_data[i].bedrooms == 4) {
        four_bedrooms.push(melb_data[i])
    }
      else if (melb_data[i].bedrooms == 3) {
        three_bedrooms.push(melb_data[i])
    }
      else if (melb_data[i].bedrooms == 2) {
        two_bedrooms.push(melb_data[i])
    }
      else if (melb_data[i].bedrooms == 1) {
        one_bedroom.push(melb_data[i])
    }
      else {
        other.push(melb_data[i]) 
    }
  };

  console.log(six_bedrooms);
  console.log(five_bedrooms);
  console.log(four_bedrooms);
  console.log(three_bedrooms);
  console.log(two_bedrooms);
  console.log(one_bedroom);
  console.log(other);


  var six_beds_circles = [];
  var five_beds_circles = [];
  var four_beds_circles = [];
  var three_beds_circles = [];
  var two_beds_circles = [];
  var one_bed_circles = [];
  var other_circles = [];

  for (var i = 0; i < six_bedrooms.length; i++) {
    six_beds_circles.push(
      L.circle([six_bedrooms[i]['geoLocation/latitude'], six_bedrooms[i]['geoLocation/longitude']], {
        stroke: false,
        fillOpacity: 0.75,
        color: "black",
        fillColor: '#BD0026',
        radius: 400
      }).bindPopup("<h5><strong>Address: </strong>" +
        + six_bedrooms[i].streetNumber + " " + six_bedrooms[i].streetName + " " + six_bedrooms[i].streetType + "</h5>" + 
        "<h5><strong>Suburb: </strong>" + 
        six_bedrooms[i].suburb + "</h5>"+ 
        "<h5><strong>Bedrooms: </strong>" + 
        six_bedrooms[i].bedrooms + "</h5>"));
  };

  for (var i = 0; i < five_bedrooms.length; i++) {
    five_beds_circles.push(
      L.circle([five_bedrooms[i]['geoLocation/latitude'], five_bedrooms[i]['geoLocation/longitude']], {
        stroke: false,
        fillOpacity: 0.75,
        color: "black",
        fillColor: '#E31A1C',
        radius: 400
      }).bindPopup("<h5><strong>Address: </strong>" +
      + five_bedrooms[i].streetNumber + " " + five_bedrooms[i].streetName + " " + five_bedrooms[i].streetType + "</h5>" + 
      "<h5><strong>Suburb: </strong>" + 
      five_bedrooms[i].suburb + "</h5>"+ 
      "<h5><strong>Bedrooms: </strong>" + 
      five_bedrooms[i].bedrooms + "</h5>"));
  };

  for (var i = 0; i < four_bedrooms.length; i++) {
    four_beds_circles.push(
      L.circle([four_bedrooms[i]['geoLocation/latitude'], four_bedrooms[i]['geoLocation/longitude']], {
        stroke: false,
        fillOpacity: 0.75,
        color: "black",
        fillColor: '#FC4E2A',
        radius: 400
      }).bindPopup("<h5><strong>Address: </strong>" +
      + four_bedrooms[i].streetNumber + " " + four_bedrooms[i].streetName + " " + four_bedrooms[i].streetType + "</h5>" + 
      "<h5><strong>Suburb: </strong>" + 
      four_bedrooms[i].suburb + "</h5>"+ 
      "<h5><strong>Bedrooms: </strong>" + 
      four_bedrooms[i].bedrooms + "</h5>"));
  };

  for (var i = 0; i < three_bedrooms.length; i++) {
    three_beds_circles.push(
      L.circle([three_bedrooms[i]['geoLocation/latitude'], three_bedrooms[i]['geoLocation/longitude']], {
        stroke: false,
        fillOpacity: 0.75,
        color: "black",
        fillColor: '#FD8D3C',
        radius: 400
      }).bindPopup("<h5><strong>Address: </strong>" +
      + three_bedrooms[i].streetNumber + " " + three_bedrooms[i].streetName + " " + three_bedrooms[i].streetType + "</h5>" + 
      "<h5><strong>Suburb: </strong>" + 
      three_bedrooms[i].suburb + "</h5>"+ 
      "<h5><strong>Bedrooms: </strong>" + 
      three_bedrooms[i].bedrooms + "</h5>"));
  };

  for (var i = 0; i < two_bedrooms.length; i++) {
    two_beds_circles.push(
      L.circle([two_bedrooms[i]['geoLocation/latitude'], two_bedrooms[i]['geoLocation/longitude']], {
        stroke: false,
        fillOpacity: 0.75,
        color: "black",
        fillColor: '#ffcc00',
        radius: 400
      }).bindPopup("<h5><strong>Address: </strong>" +
      + two_bedrooms[i].streetNumber + " " + two_bedrooms[i].streetName + " " + two_bedrooms[i].streetType + "</h5>" + 
      "<h5><strong>Suburb: </strong>" + 
      two_bedrooms[i].suburb + "</h5>"+ 
      "<h5><strong>Bedrooms: </strong>" + 
      two_bedrooms[i].bedrooms + "</h5>"));
  };

  for (var i = 0; i < one_bedroom.length; i++) {
    one_bed_circles.push(
      L.circle([one_bedroom[i]['geoLocation/latitude'], one_bedroom[i]['geoLocation/longitude']], {
        stroke: false,
        fillOpacity: 0.75,
        color: "black",
        fillColor: '#FED976',
        radius: 400
      }).bindPopup("<h5><strong>Address: </strong>" +
      + one_bedroom[i].streetNumber + " " + one_bedroom[i].streetName + " " + one_bedroom[i].streetType + "</h5>" + 
      "<h5><strong>Suburb: </strong>" + 
      one_bedroom[i].suburb + "</h5>"+ 
      "<h5><strong>Bedrooms: </strong>" + 
      one_bedroom[i].bedrooms + "</h5>"));
  };

  for (var i = 0; i < other.length; i++) {
    other_circles.push(
      L.circle([other[i]['geoLocation/latitude'], other[i]['geoLocation/longitude']], {
        stroke: false,
        fillOpacity: 0.75,
        color: "black",
        fillColor: '#800026',
        radius: 400
      }).bindPopup("<h5><strong>Address: </strong>" +
      + other[i].streetNumber + " " + other[i].streetName + " " + other[i].streetType + "</h5>" + 
      "<h5><strong>Suburb: </strong>" + 
      other[i].suburb + "</h5>"+ 
      "<h5><strong>Bedrooms: </strong>" + 
      other[i].bedrooms + "</h5>"));
  };

  
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
  var bedrooms_six = L.layerGroup(six_beds_circles);
  var bedrooms_five = L.layerGroup(five_beds_circles);
  var bedrooms_four = L.layerGroup(four_beds_circles);
  var bedrooms_three = L.layerGroup(three_beds_circles);
  var bedrooms_two = L.layerGroup(two_beds_circles);
  var bedroom_one = L.layerGroup(one_bed_circles);
  var bedrooms_other = L.layerGroup(other_circles);

  // Create a baseMaps object
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap,
    "Light Map": lightmap
  };

  // Create an overlay object
  var overlayMaps = {
    "Other Bedrooms": bedrooms_other,
    "Six Bedrooms": bedrooms_six,
    "Five Bedrooms": bedrooms_five,
    "Four Bedrooms": bedrooms_four,
    "Three Bedrooms": bedrooms_three,
    "Two Bedrooms": bedrooms_two,
    "One Bedroom": bedroom_one
  };

  // Define a map object
  var myMap = L.map("map", {
    center: [-37.81, 144.96],
    zoom: 11,
    layers: [streetmap, darkmap, lightmap, bedrooms_other, bedrooms_six, bedrooms_five, bedrooms_four, bedrooms_three, bedrooms_two, bedroom_one]
  });

  // Pass our map layers into our layer control
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

  function getColor(d) {
    return d == "1 Bedroom" ? '#FED976' :
           d == "2 Bedrooms"  ? '#ffcc00' :
           d == "3 Bedrooms"  ? '#FD8D3C' :
           d == "4 Bedrooms"  ? '#FC4E2A' :
           d == "5 Bedrooms"   ? '#E31A1C' :
           d == "6 Bedrooms"   ? '#BD0026' :
           d == "Other"   ? '#800026' :
                      '#FFEDA0';
  };

  function style(feature) {
    return {
        weight: 1.5,
        opacity: 1,
        fillOpacity: 1,
        radius: 6,
        fillColor: getColor(feature.properties.TypeOfIssue),
        color: "grey"

    };
}

var legend = L.control({position: 'bottomleft'});
    legend.onAdd = function (myMap) {

    var div = L.DomUtil.create('div', 'info legend');
    labels = ['<strong>Categories</strong>'],
    categories = ["1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4 Bedrooms", "5 Bedrooms", "6 Bedrooms", "Other"];

    for (var i = 0; i < categories.length; i++) {

            div.innerHTML += 
            labels.push(
                '<i class="circle" style="background:' + getColor(categories[i]) + '"></i> ' +
            (categories[i] ? categories[i] : '+'));

        }
        div.innerHTML = labels.join('<br>');
    return div;
    };
    legend.addTo(myMap);
};