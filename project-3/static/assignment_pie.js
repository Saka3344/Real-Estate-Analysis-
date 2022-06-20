

d3.json("/domain/project3").then(function (geoData){

  var data = [];

  var sumCases = 0;
    // convert cases to numbers
  var numC;

  store_result=[]
   for (var i = 0; i < geoData.length; i++){
   store_result.push(geoData[i].result)
   }

   const count = {};

    for (const element of store_result) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }

   console.log(store_result)
   console.log(count)
   console.log(typeof(count))

    var result=[];
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
    console.log(items);
    items_ten = items
    console.log(items.length)

    for (i=0; i<items_ten.length;i++){
    result.push(items_ten[i][0]);
    value.push(items_ten[i][1]);

        }
    console.log(result)
    console.log(value)

    for (var i = 0; i < result.length; i++)
    {
    console.log(result[i])
    if(result[i] == "AUSN"){result[i] = "Auction -Sold"}
    else if(result[i] == "AUSA"){result[i] = "Auction -Sold After"}
    else if(result[i] == "AUSS"){result[i] = "Auction -Sold After"}
    else if(result[i] == "AUPN"){result[i] = "Auction -Sold Prior"}
    else if(result[i] == "AUSP"){result[i] = "Auction -Sold Prior"}
    else if(result[i] == "PTSD"){result[i] = "Private Treaty sold"}
    else if(result[i] == "PTSW"){result[i] = "Private Treaty sold Warning"}
    else if(result[i] == "PTLA"){result[i] = "Private Treaty - Related Parties"}
    else if(result[i] == "AUHB"){result[i] = "Auction -  Highest Bid"}
    else if(result[i] == "AUPI"){result[i] = "Auction -  Passed In"}
    else if(result[i] == "AUVB"){result[i] = "Auction -  Vendor Bid"}
    else if(result[i] == "AUWD"){result[i] = "Auction -  Withdrawn"}
    }

    var xValues = result;
    var yValues = value;
    const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);
    const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

    var barColors=[]
    for(i=0; i<items_ten.length;i++)
    {
        randomRGB();
        barColors.push(randomRGB())
    }


    new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor:barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
          text: "Auction and sale Results (Counts)"
        }
      }
    });


});