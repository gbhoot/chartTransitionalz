var bars = d3.select("#chart")
    .selectAll("section")
    .data([4, 8, 15, 16, 20, 12]);
bars.enter().append("section")
    .text(function(d){ return d; })
    .style("height", function(d){ return d*20 +"px"; });
function generateRandomData() {
    var nums = [];
    var size = Math.floor(Math.random() * 20);
    for (var i=0; i<size; i++){
        nums.push(Math.floor(Math.random() * 20));
    }
    buildChart(nums);
}

function buildChart(newData) {
    var bars = d3.select("#chart")
        .selectAll("section")
        .data(newData)
        // .transition()
        // .duration(2000)
        .text(function(d){ return d; })
        .style("height", function(d) { return d*20 +"px"; })
        .style("background-color", "gray");
    bars.enter().append("section")
        .transition()
        .duration(2000)
        .text(function(d){ return d; })
        .style("height", function(d){ return d*20 +"px"; })
        .style("background-color", "lightblue");
    bars.exit().remove();
};