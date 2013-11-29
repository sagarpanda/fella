define([
		'jquery',
		'underscore',
		'backbone',
		'modules/Fb'
	], function($, _, Backbone, fb){
	//fb.init();
	//fb.getVal('/me/albums', function(e){ console.log(e); });
	//fb.getVal('/652615154772418/photos', function(e){ console.log(e); });
	var albumIds = [];
	var albums = [];
	var getAlbum = function(index){
		fb.getVal('/'+albumIds[index]+'/photos', function(e){
			albums[index] = e;
			if (index < (albumIds.length-1)) {
				index = index + 1;
				getAlbum(index);
			}else{
				//PhotosView.renderAlbum();
				console.log(albums);
				for (var i = 0; i < albums[0].data.length; i++) {
					$('#page').append('<img src="'+albums[0].data[i].picture+'" />');
				};
			};
		});
	};

	var PhotosView = Backbone.View.extend({
		el: $('#page'),

		showAlbums: function(){
			fb.getAlbums(function(e){
				for (var i = 0; i < e.data.length; i++) { albumIds[i] = e.data[i].id; };
				if (albumIds.length > 0) {
					getAlbum(0);
				};
			});
		},

		render: function(){
			this.$el.html('AlbumView');
		},

		renderAlbum: function(){
			console.log(albums);
		}
	});

	return PhotosView;
});