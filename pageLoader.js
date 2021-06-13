//Load modular components of the site via jQuery 
$(function(){
    $("#siteNav").load("pageElements.html #ramblNav-2", function(){
        $('#siteNav').addClass('sticky-top');
    });
    $("#pCard-1").load("pageElements.html #prvwCard");
    $("#pCard-2").load("pageElements.html #prvwCard");
    $("#pCard-3").load("pageElements.html #prvwCard");
    $("#modals").load("pageElements.html #accountModal",function(){
        $("#accountModalDialog").load("pageElements.html #loginModal");
    }); 
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

$(document).on("click", "#signUp", function(){
    $("#accountModalDialog").fadeOut(function(){
        $(this).empty();
        $(this).load("pageElements.html #signupModal").fadeIn();
    }); 
})
$(document).on("click", "#logIn", function(){
    $("#accountModalDialog").fadeOut(function(){
        $(this).empty();
        $(this).load("pageElements.html #loginModal").fadeIn();
    }); 
})