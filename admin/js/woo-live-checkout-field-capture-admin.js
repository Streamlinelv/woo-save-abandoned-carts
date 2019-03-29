(function( $ ) {
	'use strict';

	/**
	 * All of the code for your admin-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
	 
	 jQuery(document).ready(function(){

	 	$('.wclcfc-exit-intent-color-picker').wpColorPicker(); //Activating color picker

	 	function addGetProClass(){ //Adding class when changing radio button to display Get Pro notice
			$(this).siblings().removeClass('wclcfc-get-pro-active');
			$(this).addClass('wclcfc-get-pro-active');
		}

		function addLoadingIndicator(){ //Adding loading indicator once Submit button pressed
			$(this).parent().addClass('wclcfc-loading');
		}

		jQuery(".wclcfc-exit-intent-type").on("click", addGetProClass );
		jQuery("#wclcfc-page-wrapper #submit").on("mousedown", addLoadingIndicator );
	});

})( jQuery );