var $ = jQuery.noConflict();
jQuery(function($) {
    "use strict";
    $(window).load(function() {
        $("#preloader").delay(500).fadeOut("slow");
        setTimeout(function() {
            $(".home").addClass("selected")
        }, 0);
        setTimeout(function() {
            $("#logo h1").addClass("animated fadeInDown")
        }, 1300);
        setTimeout(function() {
            $("#logo img").addClass("animated fadeInDown")
        }, 1300);
        setTimeout(function() {
            $("#logo p").addClass("animated fadeInDown")
        }, 1600);
        setTimeout(function() {
            $("#textslider").addClass("animated fadeInDown")
        }, 1900);
    })
});