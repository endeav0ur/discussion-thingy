(function(){
Template.__checkName("newtopic");
Template["newtopic"] = new Template("Template.newtopic", (function() {
  var view = this;
  return [ HTML.Raw("<p>Username</p>\n	"), HTML.INPUT({
    type: "text",
    id: "username-submit",
    value: function() {
      return Spacebars.mustache(view.lookup("username"));
    }
  }), HTML.Raw("\n	<p>A topic to argue about, in the form of a statement.</p>\n	"), HTML.TEXTAREA({
    id: "body-submit"
  }), HTML.Raw('\n	<input id="submit-node" type="button" value="submit">') ];
}));

})();
