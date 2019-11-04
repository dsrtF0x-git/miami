let $window = $('html, body');

$('a[href*="#"]').click(function() {
    $window.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 20
    }, 200);
});