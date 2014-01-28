console.log('This would be the main JS file.');

$('[data-toggle="popover"]').popover({
    trigger: 'hover',
        'placement': 'top'
});

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top', -(scrolled * 0.2) + 'px');
}

$(window).scroll(function(e){
    parallax();
});
