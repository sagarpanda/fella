define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'users': 'showUsers',
			'user/:id': 'showUser',
			'*actions': 'defaultAction'
		}
	});

	var initialize = function(option){

		var app_router = new AppRouter(option);

		app_router.on('route:showUsers', function (actions) {
			console.log('showUsers');
			console.log(actions);
		});

		app_router.on('route:showUser', function (actions) {
			console.log('showUser: '+actions);
		});

		app_router.on('route:defaultAction', function (actions) {

			//var homeView = new HomeView();
			//homeView.render();
			console.log('defaultAction');
		});

		Backbone.history.start();
	};

	return { 
		init: initialize
	};

});