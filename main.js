$(window).scroll(function(){
    var yOffset = window.pageYOffset;
    var breakpoint = 191;

    if(yOffset > breakpoint){
        $('#nav-section').addClass('active');
    } else {
        $('#nav-section').removeClass('active');
    }
});
