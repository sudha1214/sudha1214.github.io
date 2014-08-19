define(function( require){
	require('backbone');
             
	var DataCollection=Backbone.Collection.extend({
 		model: this.DataModel
	});
	return DataCollection;
});