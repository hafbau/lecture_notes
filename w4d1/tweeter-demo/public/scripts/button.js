$(function() {
    const $compose = $('.btn--scroll');
    const $composeSquare =$('.round-btn')

    // On scroll, hide top button and show lower button
    
    $(document).scroll(function() {
        $compose.css({display: $(this).scrollTop() > 100? "none":"block"});
        $composeSquare.css({display: $(this).scrollTop() > 100? "block":"none"});
    });
});