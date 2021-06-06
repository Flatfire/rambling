//This script loads the modular components of the site via jQuery 
$(function(){
    $("#siteNav").load("pageElements.html #ramblNav-2");
});

$(window).on('scroll', function(){
    if ($(window).scrollTop() >= 0) {
        $('#siteNav').addClass('sticky-top');
    }
    else {
        $('#siteNav').removeClass('sticky-top');
    }
});