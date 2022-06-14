var myMap = L.map("map", {
  center: [-37.813629, 144.963058],
  zoom:11
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

var url = "static/data/properties_melb_cleanedCopy.geojson";


d3.json(url).then(function(response) {

  var heatArray = [];

//  const location={
//  latitude = 0,
//  longitude = 0
//  };


  for (var i = 0; i < response.features.length; i++) {

    var location1 = response.features[i].geometry.coordinates[0];
    var location2 = response.features[i].geometry.coordinates[1];

//    location =location.push(response.features[i].geometry.coordinates[1])
    console.log(response.features[i].geometry.coordinates[0])
    console.log(typeof(location1), typeof(location2))
//    console.log(response.features[i])

    if(typeof location1 === 'undefined'){
      // element does not exist
    }

    else {
      if(typeof location1 === 'undefined'){
        console.log(location1)
      }
      if(typeof location2 === 'undefined'){
        console.log(location2)
      }
      if(location1 != null && location2 != null ){
        heatArray.push([location2, location1]);
      }
    }
  }


console.log(heatArray)



  var heat = L.heatLayer(heatArray, {
    radius: 100,
    blur: 35
  }).addTo(myMap);

});