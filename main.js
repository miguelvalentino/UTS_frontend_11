$(document).ready(function() {
    $(".btn-primary").click(function() {

        var cardTitle = $(this).closest(".card-body").find(".card-title").text();
        
        alert("Akan Menuju Halaman " + cardTitle);
    });
});
