$(window).scroll(function() {

    $('.fade-in-animation').each(function(){

        let secPos = $(this).offset().top;
        let secHeight = $(this).height();
        let windowTopPos = $(window).scrollTop();

        if (
            secPos < (secHeight + windowTopPos + 100) &&
            (secHeight + secPos + 100) > windowTopPos
        ) {
            $(this).addClass("fade-in");
        } else {
            $(this).removeClass("fade-in");
        }

    });

});