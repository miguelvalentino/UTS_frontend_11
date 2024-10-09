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

//buat animasi text
$(document).ready(function(){
    let typed = new Typed('.typing', {
        strings : ['selamat datang di Makmursehat'],
        typeSpeed : 100,
        backSpeed : 60,
        loop : true
    });
})

$(document).ready(function(){
    let typed = new Typed('.typing-1', {
        strings : ['Resep Yang Populer'],
        typeSpeed : 100,
        backSpeed : 60,
        loop : true
    });
})

$(document).ready(function(){
    let typed = new Typed('.typing-2', {
        strings : ['Tips Hidup Sehat'],
        typeSpeed : 100,
        backSpeed : 60,
        loop : true
    });
})

$(document).ready(function(){
    let typed = new Typed('.typing-3', {
        strings : ['About Us'],
        typeSpeed : 100,
        backSpeed : 60,
        loop : true
    });
})
