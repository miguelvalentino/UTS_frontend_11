//tombol buat balik keatas
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function(){
        $('html, body').animate({scrollTop: 0}, 0);
        return false;
    });
});

