//Load modular components of the site via jQuery 
$(function(){
    $("#siteNav").load("pageElements.html #ramblNav-2");
    $("#pCard-1").load("pageElements.html #prvwCard");
    $("#pCard-2").load("pageElements.html #prvwCard");
    $("#pCard-3").load("pageElements.html #prvwCard");
    //$("#modals").load("pageElements.html #login-modal");
	
    $('#siteNav').addClass('sticky-top');
});

$("img").attr("src","duck.jpg")

/*$(document).on("click", "#rememberLogin", function(){
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
})*/