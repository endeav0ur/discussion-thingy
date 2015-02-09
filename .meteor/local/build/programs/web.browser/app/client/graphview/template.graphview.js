(function(){
Template.__checkName("graphview");
Template["graphview"] = new Template("Template.graphview", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("graph")), "\n  ", Spacebars.include(view.lookupTemplate("submitbox")), "\n  ", Spacebars.include(view.lookupTemplate("nodeviewer")), HTML.Raw("\n  <!-- {{> dropper}}  Dont like this guy -->") ];
}));

})();
