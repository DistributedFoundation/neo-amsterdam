window.onload = function(){
    $(".loading").hide();
    initMap();
};

$(function(){
    $('#navBar ').on('click', function () {
        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 5 }, 500);
        return false;
    });
});

function initMap() {
    var uluru = { lat: 37.7819117000, lng: -122.4046539000 };
    document.getElementById('map').style.height = "500px";
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}