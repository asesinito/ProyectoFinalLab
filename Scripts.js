function initMap(){
    var options = {
        zoom:15,
        center: {lat:-32.217098,lng:-58.148788}
    }
    var map = new google.maps.Map(document.getElementById('map'), options);

    var  marker = new google.maps.Marker({
        position:{lat:-32.217098,lng:-58.148788},
        map: map
    });

}
