define([
		'jquery',
		'underscore',
		'backbone',
		'modules/Fb'
	], function($, _, Backbone, fb){
	fb.init();
	var PhotosView = Backbone.View.extend({
		el: $('#page'),

		render: function(){
			this.$el.html('AlbumView');
		}
	});

	return PhotosView;
});