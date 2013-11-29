define([
		'jquery',
		'underscore',
		'backbone'
	], function($, _, Backbone){

	var homeView = Backbone.View.extend({
		el: $('#page'),

		render: function(){
			this.$el.html('HomeView');
		}
	});

	return homeView;
});