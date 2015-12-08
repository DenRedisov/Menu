/*! Menu - v0.1.2 - 2015-12-08
* https://github.com/filamentgroup/menu
* Copyright (c) 2015 Scott Jehl; Licensed MIT */
/* global Menu:true */
(function( Menu, $ ) {

	var pluginName = "menu",
		initSelector = "[data-" + pluginName + "]";

	$.fn[ pluginName ] = function(){
		return this.each(function(){
			new window.componentNamespace.Menu( this ).init();
		});
	};

	// auto-init on enhance (which is called on domready)
	$( document ).bind( "enhance", function( e ){
		$( initSelector, e.target )[ pluginName ]();
	});

}( Menu, jQuery, this ));
