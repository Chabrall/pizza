'use strict';
$(function() {
    var vpw = $(window).width();
    var vph = $(window).height();
    $('.full-page').height(vph);
    $('.site-content').css('margin-top', vph);


    $(window).load(function () {
        $(window).off('load');
        $('body').removeClass('load');
    });

    $(window).scroll(function() {
        if($(window).width()>800){
            if ($(window).scrollTop() > 740) {
                $('.header').css('background', '#474B24');
                $('.header').css('border-bottom', '1px solid #323413');
                $('.logo').addClass('visible');
            }
            else {
                $('.header').css('background', 'transparent');
                $('.header').css('border-bottom', 'none');
                $('.logo').removeClass('visible');
            }
        }
    });

    $('.mobile-menu').click(function(){
        $('nav').toggleClass('mobile-menu-down');
        $('.mobile-menu').toggleClass('mobile-menu-color');

    });

    $('nav a').on('click', function() {
        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top-100;
        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);
        return false;
    });

    $('.map-container').click(function(){
        window.location.href = "https://www.google.se/maps/place/Varbergsv%C3%A4gen+12,+504+30+Bor%C3%A5s/@57.7169378,12.9315749,17z/data=!3m1!4b1!4m2!3m1!1s0x465aa0acaf3801df:0x7bb9792bfb868773?hl=sv";
    });


    // All list items
    var menuItems = $('nav a');
    // Anchors corresponding to menu items
    var scrollItems = menuItems.map(function(){
        var item = $($(this).attr('href'));
        if (item.length) { return item; }
    });

    $(window).scroll(function() {
        // Get container scroll position
        var fromTop = $(this).scrollTop()+60;
        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop){
                return this;
            }
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : '';
        // Set/remove active class
        menuItems
            .parent().removeClass('active')
            .end().filter('[href=#'+id+']').parent().addClass('active');
    });
});
