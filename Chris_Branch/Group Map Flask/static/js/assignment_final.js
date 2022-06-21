

d3.json("/domain/navid_db").then(function (geoData){

  var data = [];


  store_subs=[]
   for (var i = 0; i < geoData.length; i++){
   store_subs.push(geoData[i].suburb)
   }

   const count = {};

    for (const element of store_subs) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }

   console.log(store_subs)
   console.log(count)
   console.log(typeof(count))

    var suburb=[];
    var value=[];

    console.log(Object.keys(count))

    // Create items array
    var items = Object.keys(count).map(function(key) {
      return [key, count[key]];
    });

    // Sort the array based on the second element
    items.sort(function(first, second) {
      return second[1] - first[1];
    });

    // Create a new array with only the first 5 items
    console.log(items.slice(0, 15));
    items_ten = items.slice(0, 15)

    for (i=0; i<items_ten.length;i++){
    suburb.push(items_ten[i][0]);
    value.push(items_ten[i][1]);

        }
    console.log(suburb)
    console.log(value)

      // Create your trace.
      var trace = {
        x: suburb,
        y: value,
        type: "bar"
      };
    // Create the data array for our pl
      var plotdata = [trace];

      // Define the plot layout
      var layout = {
        title: "Suburbs with the highest demand and most properties.",
        xaxis: { title: "Suburbs" },
        yaxis: { title: "Number of properties in the area"}
      };


    Plotly.newPlot("bar-plot", plotdata, layout);
});