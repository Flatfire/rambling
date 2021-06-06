//This script loads the modular components of the site via jQuery 
$(function(){
    $("#siteNav").load("pageElements.html #ramblNav-2");
    $("#pCard-1").load("pageElements.html #prvwCard");
    $("#pCard-2").load("pageElements.html #prvwCard");
    $("#pCard-3").load("pageElements.html #prvwCard");
    $("#pCard-4").load("pageElements.html #prvwCard");
});

$("img").attr("src","duck.jpg")

$(window).on('scroll', function(){
    if ($(window).scrollTop() >= 0) {
        $('#siteNav').addClass('sticky-top');
    }
    else {
        $('#siteNav').removeClass('sticky-top');
    }
});