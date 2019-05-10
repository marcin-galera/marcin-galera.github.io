
window.onload = function() {

    AOS.init();
    initMap();
    
  };

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


let button = document.querySelector(".showMore_about");
let textAbout = document.querySelector(".text_about");
let buttonContent = document.querySelector(".button_content");

button.addEventListener("click", function() {
    if ( textAbout.style.display == "" || textAbout.style.display == "none") {
    textAbout.style.display = "block";
    buttonContent.textContent = "Pokaż mniej";
    } else if ( textAbout.style.display == "block" ) {
        textAbout.style.display = "none";
    buttonContent.textContent = "Pokaż więcej";
    }
})








    // AIzaSyB3azvVxi10WMCeJf5I62gAdL3w3tFDvp4