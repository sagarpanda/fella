require.config({
	//baseUrl: 'js',
	paths: {
		jquery: 'libs/jquery-1.10.2.min',
		underscore: 'libs/underscore-min',
		backbone: 'libs/backbone-min',
		templates: '../templates'
	}

});

require(['app', 'underscore'], function(App, _){
  App.init();
});