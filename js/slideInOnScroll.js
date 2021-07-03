$(window).scroll(function () {
    $('.slide-in-left-animation').each(function () {
        let secPos = $(this).offset().top;
        let secHeight = $(this).height();
        let windowTopPos = $(window).scrollTop();

        if (
            secPos < (secHeight + windowTopPos) &&
            (secHeight + secPos) > windowTopPos
            ) {
            $(this).addClass("slide-in-left");
        } else {
            $(this).removeClass("slide-in-left");
        }
    });
    $('.slide-in-right-animation').each(function () {
        let secPos = $(this).offset().top;
        let secHeight = $(this).height();
        let windowTopPos = $(window).scrollTop();

        if (secPos < (secHeight + 3 * windowTopPos) &&
        (secHeight + 3*secPos) > windowTopPos) {
            $(this).addClass("slide-in-right");
        } else {
            $(this).removeClass("slide-in-right")
        }
        
    });
});