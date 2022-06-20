

d3.json("/domain/project2").then(function (geoData){

  var data = [];


  store_subs=[]
   for (var i = 0; i < geoData.length; i++){
   store_subs.push(geoData[i].agent)
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

    var xValues = suburb;
    var yValues = value;
    const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);
    const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

    var barColors=[]
    for(i=0; i<items_ten.length;i++)
    {
        randomRGB();
        barColors.push(randomRGB())
    }


    new Chart("myChart1", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor:barColors,
          data: yValues
        }]
      },
      options: {
      scales:{
      title: {
          display: true,
          text: "Agent Listings"
        },

        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'No of Listings'
      }
    }],
            xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Top 15 agents'
      },
                      ticks: {
                    autoSkip: false,
                    maxRotation: -45,
                    minRotation: -45
                }

    }
    ]

      }
      }
    });
});