//This script loads the modular components of the site via jQuery 
$(function(){
    $("#siteNav").load("navbar.html #ramblNav");
});

$(window).on('scroll', function(){
    if ($(window).scrollTop() >= 0) {
        $('#siteNav').addClass('sticky-top');
    }
    else {
        $('#siteNav').removeClass('sticky-top');
    }
});