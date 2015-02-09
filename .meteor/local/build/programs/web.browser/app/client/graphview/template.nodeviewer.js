(function(){
Template.__checkName("nodeviewer");
Template["nodeviewer"] = new Template("Template.nodeviewer", (function() {
  var view = this;
  return HTML.DIV({
    id: "nodeviewer"
  }, "\n		", HTML.DIV({
    "class": "viewer-padding"
  }, "\n			", HTML.DIV("\n				Username: ", Blaze.View(function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("selected"), "username"));
  }), "\n			"), "\n			", HTML.DIV("\n				value: ", Blaze.View(function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("selected"), "value"));
  }), "\n			"), "\n			", HTML.DIV("\n				Body: ", Blaze.View(function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("selected"), "body"));
  }), "\n			"), "\n			", HTML.Raw('<div>\n				<input id="delete-node" type="button" value="delete">\n			</div>'), "\n		"), "\n	");
}));

})();
