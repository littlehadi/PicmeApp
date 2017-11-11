

(function() {
    // init smooth scroll
    new SmoothScroll('a[href*="#"]');

    // make navbar transparent if at top of page
    $(window).on('scroll', onScroll);

    // trigger event so if the page is loaded somewhere else than the top the navbar updates
    onScroll();
})();

function onScroll() {
    var scroll = $(window).scrollTop();
    var documentHeight = $(window).height();

    if (scroll > 100)
        $('#site-navigation').removeClass('nav-top');
    else
        $('#site-navigation').addClass('nav-top');

    var $elements = [];

    // get all scrollreveal elements that weren't animated yet
    $('.scrollreveal:not(.revealed)').each(function () {
        var $self = $(this);
        var top = $self.offset().top;

        // only reveal if bottom of page is higher than top offset of element
        if (scroll + documentHeight > top)
            $elements.push($self);
    });

    // iterate through elements that should be revealed
    for (var i = 0; i < $elements.length; i++) {
        var $self = $elements[i];
        var top = $self.offset().top;
        var height = $self.height();
        var animationName = $self.data('animation-name');
        var delay = 100; // TODO: should not be hardcoded

        // show element
        $self.css('visibility', 'visible');

        // only animate if whole element isn't in viewport (indicating page was refreshed at a certain position)
        if (scroll + documentHeight < top + height) {
            $self.css('animation-name', animationName);
            $self.css('animation-delay', i * delay + 'ms'); // add delay between elements being revealed at the same time
            $self.addClass('animated');
        }

        $self.addClass('revealed');
    }
}