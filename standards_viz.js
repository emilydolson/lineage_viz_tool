var data = [];

function change_color() {
    var color_col = document.getElementById("color_col").value;
    console.log(color_col);

    if (color_col == "") {
        color_col="id";
    }

    var max = d3.max(data, function(d) { return d[color_col]; } );

    var color_scale = d3.scaleSequential(d3.interpolateViridis).domain([0, max]);
    d3.selectAll("circle").style("fill", function(d){return color_scale(d.data.data[color_col])});
}

function make_viz(filename) {
    var svg = d3.select("#viz");
    data = d3.csvParse(filename);
    data.push({"id":-1, "ancestor_list":"[null]"}); 
    console.log(data);


    var strat_data = d3.stratify()
    .id(function(d) { return d.id; })
    .parentId(function(d) { if(d.ancestor_list.toLowerCase() == "[none]" || d.ancestor_list.toLowerCase() == '["none"]') {return -1} var a = JSON.parse(d.ancestor_list); return a[0]; })
    (data);
    // console.log(strat_data);
    var root = d3.hierarchy(strat_data);
    var treeLayout = d3.tree();
    treeLayout.size([800, 1500]);
    treeLayout(root);

    // Nodes
    svg.selectAll('circle')
    .data(root.descendants())
    .enter()
    .append('circle')
    .classed('node', true)
    .attr('cy', function(d) {return d.x;})
    .attr('cx', function(d) {return d.y;})
    .attr('r', 4);

    change_color();

    // Links
    svg.selectAll('line')
    .data(root.links())
    .enter()
    .append('line')
    .classed('link', true)
    .style("stroke", "black")
    .attr('y1', function(d) {return d.source.x;})
    .attr('x1', function(d) {return d.source.y;})
    .attr('y2', function(d) {return d.target.x;})
    .attr('x2', function(d) {return d.target.y;});      
}

// handle upload button
// from http://bl.ocks.org/syntagmatic/raw/3299303/
function upload_button(el, callback) {
    var uploader = document.getElementById(el);  
    var reader = new FileReader();
  
    reader.onload = function(e) {
      var contents = e.target.result;
      callback(contents);
    };
  
    uploader.addEventListener("change", handleFiles, false);  
  
    function handleFiles() {
      d3.select("#table").text("loading...");
      var file = this.files[0];
      reader.readAsText(file);
    };
  };

  