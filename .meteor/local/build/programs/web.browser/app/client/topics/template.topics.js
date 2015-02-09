(function(){
Template.__checkName("topics");
Template["topics"] = new Template("Template.topics", (function() {
  var view = this;
  return [ HTML.Raw('<h2> Topics: </h2>\n	<div>\n 		<a href="new"> New </a>\n 	</div>\n 	'), HTML.DIV({
    "class": "knowledge"
  }, "\n 		", HTML.Raw('<em> "Things that are right"</em>'), "\n	 	", Blaze.Each(function() {
    return Spacebars.call(view.lookup("correct"));
  }, function() {
    return [ "\n			", HTML.DIV("\n	 			", HTML.A({
      href: "view",
      "class": "graphlink"
    }, " ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("body"));
    }), " : Value: ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("value"));
    })), "\n			"), "\n		" ];
  }), "\n	"), "\n	", HTML.DIV({
    "class": "knowledge"
  }, "\n 		", HTML.Raw('<em> "Things that are not right"</em>'), "\n	 	", Blaze.Each(function() {
    return Spacebars.call(view.lookup("incorrect"));
  }, function() {
    return [ "\n			", HTML.DIV("\n	 			", HTML.A({
      href: "view",
      "class": "graphlink"
    }, " ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("body"));
    }), " : Value ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("value"));
    })), "\n			"), "\n		" ];
  }), "\n	"), HTML.Raw('\n	<div>\n		<a href="what"> What is this?</a>\n	</div>\n	<div>\n		<a href="how"> How do I use it? </a>\n	</div>') ];
}));

})();
