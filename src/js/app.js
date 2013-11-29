define(['jquery', 'underscore', 'backbone', 'router'], function($, _ , Backbone, router){

	var init = function(){
		router.init();
		$(window).resize(resizer);
	};

	var resizer = function(){
		//console.log('hello resizer');
	};

	return {
		init: init
	};
});