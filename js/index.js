window.onload = function(){
    $(".loading").hide();
};

$(function(){
    $('.navbar-collapse ul li a').on('click', function () {
        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 100 }, 500);
        return false;
    });
});

var deadline = new Date("2018/04/14 08:00:00 GMT-0000(CST)");

var now = new Date();
if (deadline > now) { setInterval(timeShow, 1000); }

function timeShow() {
    var counttime = new CountTime(deadline);
    $("#dayCount").html(counttime.fomate(counttime.day()));
    $("#hourCount").html(counttime.fomate(counttime.hour()));
    $("#minCount").html(counttime.fomate(counttime.minute()));
    $("#secCount").html(counttime.fomate(counttime.second()));
}

function initMap() {
    var uluru = { lat: 52.364302, lng: 4.8786986 };
    document.getElementById('map').style.maxHeight = "500px";
    document.getElementById('map').style.height = "300px";
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}