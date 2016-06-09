$(document).ready(function() {  
    if($(window).width() > 768) {  
         $('img.a').hover(function() {
            $(this).stop().animate({'opacity': '1'}, 'slow');
        }, function() {
            $(this).stop().animate({'opacity':'0'}, 'slow');
        });
    }
    //back to top functionality & scroll down from menu
    var offset = 250;
    var duration = 500;    
    $(window).scroll(function() {
        if($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });    
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });    
    $('#goportfolio').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: $('#portfolio-section').offset().top}, duration);
        return false;
    });    
    $('#goabout').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: $('#about-section').offset().top}, duration);
        return false;
    });
    $('#gocontact').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: $('#contact-section').offset().top}, duration);
        return false;
    });
});