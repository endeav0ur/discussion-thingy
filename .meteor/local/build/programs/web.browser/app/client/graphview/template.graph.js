(function(){
Template.__checkName("graph");
Template["graph"] = new Template("Template.graph", (function() {
  var view = this;
  return [ HTML.DIV({
    id: "graph-container"
  }, "\n		", HTML.SVG({
    id: "graph",
    width: "1200",
    height: "500"
  }, "\n			", HTML.G({
    id: "edges"
  }, "\n\n			"), "\n			", HTML.G({
    id: "nodes"
  }, "\n\n			"), "\n\n			", HTML.DEFS("\n        ", HTML.MARKER({
    id: "Triangle",
    viewBox: "0 0 10 10",
    refX: "1",
    refY: "5",
    markerWidth: "6",
    markerHeight: "6",
    orient: "auto"
  }, "\n            ", HTML.PATH({
    d: "M 0 0 L 10 5 L 0 10 z"
  }), "\n	    	"), "\n    	"), "\n		"), "\n	"), HTML.Raw('\n	<div id="infobox">\n		<div class="viewer-padding">\n			<div id="hover">\n			<div id="quotes">\n				<img src="quoteMarks.svg" alt="whereami" width="245px">\n			</div>\n				<body></body>\n			</div>\n		</div>\n	</div>') ];
}));

})();
