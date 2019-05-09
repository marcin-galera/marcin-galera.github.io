AOS.init();


function initMap() {
        var location = {lat: 54.441582, lng: 18.560097};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: location
        });
        var marker = new google.maps.Marker({
            position: {lat: 54.402863, lng: 18.572110},
            map: map
        })
    }

    // AIzaSyB3azvVxi10WMCeJf5I62gAdL3w3tFDvp4