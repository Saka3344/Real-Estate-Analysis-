// Function to determine marker size based on population
function markerSize(data) {
  return data * 200;
}

//Import Data:

var national_data = [

  {
      cityname: "Melbourne",
      location: [-37.8136, 144.9631],
      numberListedForAuction: 1095,
      numberWithdrawn: 99,
      numberUnreported: 7,
      numberAuctioned: 833,
      numberSold: 492,
      totalSales: 362636776,
      median: 990000,
      adjClearanceRate: 0.5906362545018007,
      auctionedDate: "2022-06-04",
      lastModifiedDateTime: "2022-06-07T10:33:19.812+10:00"
  },
  {
      cityname: "Sydney",
      location: [-33.8688, 151.2093],
      numberListedForAuction: 801,
      numberWithdrawn: 148,
      numberUnreported: 6,
      numberAuctioned: 612,
      numberSold: 329,
      totalSales: 331386000,
      median: 1378000,
      adjClearanceRate: 0.5375816993464052,
      auctionedDate: "2022-06-04",
      lastModifiedDateTime: "2022-06-07T10:38:34.353+10:00"
  },
  {
      cityname: "Brisbane",
      location: [-27.4705, 153.0260],
      numberListedForAuction: 86,
      numberWithdrawn: 1,
      numberUnreported: 5,
      numberAuctioned: 49,
      numberSold: 35,
      totalSales: 25734000,
      median: 1170000,
      adjClearanceRate: 0.7142857142857143,
      auctionedDate: "2022-06-04",
      lastModifiedDateTime: "2022-06-07T10:43:48.795+10:00"
  },
  {
      cityname: "Adelaide",
      location: [-34.9285, 138.6007],
      numberListedForAuction: 143,
      numberWithdrawn: 9,
      numberUnreported: 3,
      numberAuctioned: 102,
      numberSold: 79,
      totalSales: 45263898,
      median: 772000,
      adjClearanceRate: 0.7745098039215687,
      auctionedDate: "2022-06-04",
      lastModifiedDateTime: "2022-06-07T10:48:57.919+10:00"
  },
  {
      cityname: "Canberra",
      location: [-35.2802, 149.1310],
      numberListedForAuction: 95,
      numberWithdrawn: 5,
      numberUnreported: 5,
      numberAuctioned: 68,
      numberSold: 44,
      totalSales: 34612200,
      median: 942500,
      adjClearanceRate: 0.6470588235294118,
      auctionedDate: "2022-06-04",
      lastModifiedDateTime: "2022-06-07T10:48:57.919+10:00"
  }
]


// Define arrays to hold created city and state markers
var auction_salesMarkers = [];
var auctionMarkers = [];

// Loop through locations and create city and state markers
for (var i = 0; i < national_data.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  auctionMarkers.push(
    L.circle(national_data[i].location, {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "red",
      radius: markerSize(national_data[i].numberListedForAuction)
    })
  );

  // Setting the marker radius for the city by passing population into the markerSize function
  auction_salesMarkers.push(
    L.circle(national_data[i].location, {
      stroke: false,
      fillOpacity: 0.75,
      color: "purple",
      fillColor: "orange",
      radius: markerSize(national_data[i].numberSold)
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

// Create two separate layer groups: one for cities and one for states
var auctions = L.layerGroup(auctionMarkers);
var auction_sales = L.layerGroup(auction_salesMarkers);

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap,
  "Light Map": lightmap
};

// Create an overlay object
var overlayMaps = {
  "Auctions Registered": auctions,
  "Auction Sales": auction_sales
};

// Define a map object
var myMap = L.map("map", {
  center: [-25.27, 138.77],
  zoom: 4,
  layers: [streetmap, darkmap, lightmap, auctions, auction_sales]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
