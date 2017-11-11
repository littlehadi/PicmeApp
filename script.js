(function() {
    new WOW().init();

    // init smooth scroll
    new SmoothScroll('a[href*="#"]');

    // make navbar transparent if at top of page
    $(window).on('scroll', onScroll);

    // trigger event so if the page is loaded somewhere else than the top the navbar updates
    onScroll();
})();

function onScroll() {
    var scroll = $(window).scrollTop();

    if (scroll > 100)
        $('#site-navigation').removeClass('nav-top');
    else
        $('#site-navigation').addClass('nav-top');
}