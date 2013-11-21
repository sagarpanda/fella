require.config({
	//baseUrl: 'js',
	urlArgs: "bust=" + (new Date()).getTime(),
	enforceDefine: true,
	paths: {
		jquery: 'libs/jquery-1.10.2.min',
		underscore: 'libs/underscore-min',
		backbone: 'libs/backbone-min',
		router: 'router',
		templates: '../templates'
	},
	//fixed the issue of non-AMD modules like underscore and backbone
	shim: {
		underscore: {
		  exports: '_'
		},
		backbone: {
		  deps: ["underscore", "jquery"],
		  exports: "Backbone"
		}
	}

});

define(['app', 'jquery'], function(App, $){
  App.init();
});