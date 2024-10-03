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

//popup iklan 
$(document).ready(function() {
    $('#welcomeModal').modal('show');
  });

//buat search bar
$(document).ready(function(){
    $(".search input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".container-3 .col").filter(function() {
            $(this).toggle($(this).find('.card-title').text().toLowerCase().indexOf(value) > -1);
        });
    });
});
