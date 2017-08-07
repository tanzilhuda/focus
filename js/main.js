// Navigation Scroll
$(document).ready(function(){
        $(window).scroll(function(event) {
        Scroll();
    });

    $(' a').on('click', function() {  
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1500);
        return false;
    });
});
