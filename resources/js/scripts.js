$(document).ready(function (){

    // * For sticky navigation  *//
    var animateNav = new Waypoint({
        element: document.querySelector('.js--section-features'),
        handler: function(direction){
            if(direction === 'down'){

                $('nav').addClass('sticky');

            } else {
                
                $('nav').removeClass('sticky');
            }
        },
        offset: '70px'
    });


    //* For scroll to element animation *//
    $('.js--scroll-to-plans').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-features').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });


    //* Animate on scroll *//
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });


    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated pulse');
    }, {
        offset: '50%'
    });


    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated bounce');
    }, {
        offset: '100%'
    });

    //* Mobile Navigation *//
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        nav.slideToggle(200);
        var icon = $('.js--nav-icon i');

        if(icon.hasClass('ion-ios-menu')){

            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');

        } else {

            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }
    });


});

{/* <i class="icon ion-ios-close"></i> */}