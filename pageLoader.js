//Load modular components of the site via jQuery 
$(function(){
    $("#siteNav").load("pageElements.html #ramblNav-2");
    $("#pCard-1").load("pageElements.html #prvwCard");
    $("#pCard-2").load("pageElements.html #prvwCard");
    $("#pCard-3").load("pageElements.html #prvwCard");
    $("#modals").load("pageElements.html #accountModal");
    $("#accountModal").load("pageElements.html #loginModal");

    $('#siteNav').addClass('sticky-top');
});

// Uses document selector due to dynamic content load
$(document).on("click", "#rememberLogin", function(){
    if ($(this).is(':checked')){
        $(this).siblings('label').fadeOut(function(){
            $(this).html("You will be remembered").fadeIn();
        });     
    }
    else{
        $(this).siblings('label').fadeOut(function(){
            $(this).html("Remember Me").fadeIn();
        });
    }
})