Meteor.subscribe('nodes');
Meteor.subscribe('edges');
Meteor.subscribe("allUserData");

Meteor.startup(function(){
  width = 960;
  height = 700;
})

<<<<<<< HEAD
//adding a loading spinner for a better UX experience.
// Router.configure({
//   loadingTemplate: 'loading',
//     waitOn: function() {
//       return [Meteor.subscribe('nodes'), Meteor.subscribe('edges')];
//     }
// });
=======
>>>>>>> ed94764ecbb059881751a332153d78bc7f7aef25

Template.dropper.events({
  'click #drop': function(){
    Meteor.call('dropNodes', Session.get("target_id"));
  }
});

// FIXME: THIS IS NOT SECURE
Template.dropper.isUserAdmin = function(){
  if(Meteor.user() && Meteor.user().emails){
    var adminEmail = Meteor.user().emails[0].address;
    if( adminEmail === "tylsmith@gmail.com"){
      return true;
    } else {
      return false;
      //add some logic for displaying error template.
    }
  }
}

Accounts.ui.config({
  passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"
})

Router.configure({
   layoutTemplate: 'layout'
 });

Router.route('/', function () {
  this.render('topics');
});

Router.route('/view/:_id', function () {
  var target = Nodes.findOne({_id: this.params._id}) || Links.findOne({_id: this.params._id});
  if(target)
    this.render('graphview', {target_id: target});
  else
  	this.render('notfound');
});

Router.route("/user/:_username", function () {
  var user = Meteor.users.findOne({username:this.params._username});
  if(user)
    this.render('user');
  else
    this.render('notfound');
})

Router.route("new", function () {
	this.render("newtopic");
});

Router.route("what", function () {
	this.render("what");
});

Router.route("how", function () { 
	this.render("how");
});

// Trello

// If target is node:
// 	if root is self:
// 		find all nodes and edges with root as target root 
// 	else if root is not self
// 		find all nodes and edges with root as target root

// If target is edge:
// 	find all nodes and edges with root as target

// Cleanup: selected to selected_id
// In general, specify xxx_id with things that are IDs
// make edge/link stuff consistent
// use consistent "box" name scheme