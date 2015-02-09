(function(){
Template.__checkName("submitbox");
Template["submitbox"] = new Template("Template.submitbox", (function() {
  var view = this;
  return HTML.DIV({
    id: "submitbox"
  }, "\n		", HTML.DIV({
    "class": "viewer-padding"
  }, "\n			", HTML.DIV("\n				", HTML.Raw("<p>Username</p>"), "\n				", HTML.INPUT({
    type: "text",
    id: "username-submit",
    value: function() {
      return Spacebars.mustache(view.lookup("username"));
    }
  }), "\n			"), "\n			", HTML.DIV("\n				", HTML.Raw("<p>Body</p>"), "\n				", HTML.TEXTAREA({
    id: "body-submit"
  }), "\n			"), "\n			", HTML.Raw('<div>\n				<select id="edge-type">\n					<option value="disagreement"> disagreement </option>\n					<option value="agreement"> agreement </option>\n					<option value="quote"> quote </option>\n				</select>\n			</div>'), "\n			", HTML.Raw('<div>\n				<input id="submit-node" type="button" value="submit">\n			</div>'), "\n		"), "\n	");
}));

})();
