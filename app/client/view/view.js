Template.view.events({
  'click #forumview-link': function(){
    Session.set("viewMode", "standard");
  },
  'click #graphview-link': function(){
    Session.set("viewMode", "graph");
  }
});

Template.view.rendered = function(){
  Session.set("viewMode", "standard");
}

Template.view.helpers({
  isStandard: function(){
    return Session.get("viewMode") == "standard"; 
  }
})

// NEWTAG //

Template.tags.helpers({
  getTags: function(_id){
    var node = Nodes.findOne({_id:_id})
    if(!node)
      return []
    
    return node.tags;
  }
});

Template.tags.events({
  'keypress input': function(e) {

    // if spacebar or enter
    if(e.keyCode == 32 || e.keyCode == 13){
      if(e.target.value.length == 0)
        return;
      Meteor.call("newTag", this._id, e.target.value);
      e.target.value = "";
    }
  },
  'click #tag-remove': function(e){
    var innerText = e.target.parentNode.innerText;
    Meteor.call("removeTag", Session.get("tagging"), innerText.substring(3, innerText.length - 1));
  }
});