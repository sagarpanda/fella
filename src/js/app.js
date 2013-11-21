define(['jquery', 'underscore', 'backbone', 'router'], function($, _ , Backbone, router){

	var init = function(){
		router.init();
	};

	return {
		init: init
	};
});