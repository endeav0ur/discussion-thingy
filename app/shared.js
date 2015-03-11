
Nodes = new Meteor.Collection("nodes");
Links = new Meteor.Collection("links");
Chatter = new Meteor.Collection("Chatter");

EasySearch.createSearchIndex('nodes', {
  'field' : ['tags'],
  'collection' : Nodes,
  'query' : function (searchString) {
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);
    query.tags = searchString;
    if(searchString)
      return query;
  }
});

if (Meteor.is_server){
	Nodes.allow({
	    'update': function (userId,doc) {
	      /* user and doc checks ,
	      return true to allow insert */
	      return true;
    }
  });
}