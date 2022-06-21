var url ="/domain/qasse_db/"
d3.json(url).then(function (data) {

   
   console.log(data)
   var group = _.groupBy(data, 'agent_new')

var result = _.map(_.keys(group), function(e) {
  return _.reduce(group[e], function(r, o) {
    return r.price += +o.price, r
  }, {agent: e, price: 0})
})
// var agent=result.map(d=>d.agent);
// console.log(agent)
// var price=result.map(d=>d.price);
// console.log(price)
var sortedResult= result.sort((a, b) => b.price - a.price);

// Slice the first 10 objects for plotting
slicedData = sortedResult.slice(0, 15);
var trace1={
   x:slicedData.map(d=>d.agent),
   y:slicedData.map(d=>d.price),
   text:slicedData.map(d=>d.agent),
   type:"bar"
  
};
var layout={
   title:"Agent vs Price",
   xaxis:{title:"Agent"},
   yaxis:{title:"price"}
   
};
var data1=[trace1]
Plotly.newPlot("bar",data1,layout);


  })