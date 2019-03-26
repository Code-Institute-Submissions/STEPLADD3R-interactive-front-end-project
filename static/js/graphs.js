// load CSV content using the queue.js library
queue()
    // call the defer method which takes two arguments
    // the format of the data, in this case CSV
    // the second is the path to the file
    .defer(d3.csv, 'static/data/tourism-data.csv')
    // then call the await method which takes one argument
    // the name of the function to call once the data is downloaded
    .await(makeGraphs)
    
// then create the function, which takes two arguments
// the first is error
// the second is a variable that the data from queue.js
// will be passed in to.
function makeGraphs(error, tourismData) {
    // first create a crossfilter, one per site
    // load the data in to the crossfilter
    var ndx = crossfilter(tourismData);
    
    // pass the crossfilter variable (ndx)
    // to the function that's going to draw the graph
    show_paris_tourism(ndx);
    
    // render graphs
    dc.renderAll();
}

function show_paris_tourism(ndx) {
    // inside the function use the crossfilter to
    // create our dimension, in this case
    // i pluck the destination column of the CSV
    var year_dim = ndx.dimension(dc.pluck('year'));
    // group the data on destination dim
    var arrivals_per_year = year_dim.group().reduceSum(dc.pluck('tourist.arrivals'));
    
    // use dc.barChart to create bar chart
    dc.barChart('#paris-tourism')
        .width(322)
        .height(250)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(year_dim)
        .group(arrivals_per_year)
        .transitionDuration(250)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        // .xAxisLabel('Arrivals Per Year')
        .yAxis().ticks(4)
}