console.log('This would be the main JS file.');

$('[data-toggle="popover"]').popover({
    trigger: 'hover',
        'placement': 'top'
});

/*http://www.webdesignerdepot.com/2013/07/how-to-create-a-simple-parallax-effect/*/
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top', -(scrolled * 0.2) + 'px');
}

$(window).scroll(function(e){
    parallax();
});
