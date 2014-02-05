console.log('This would be the main JS file.');

$('.container a').click(function(){ 
    var $target = $($(this).data('target')); 
    if(!$target.hasClass('in'))
        $('.container .in').removeClass('in').height(0);
});

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

/*Go to flashing fish*/
$("a.fish_link").click(function(){
	//alert("yes link clicked");
    $('#myCarousel').carousel(2);
 });