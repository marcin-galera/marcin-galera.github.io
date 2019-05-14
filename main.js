window.onload = function () {

    AOS.init();
    initMap();

};

AOS.init();

function initMap() {
    var location = {
        lat: 54.441582,
        lng: 18.560097
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location
    });
    var marker = new google.maps.Marker({
        position: {
            lat: 54.402863,
            lng: 18.572110
        },
        map: map
    })
}


let button = document.querySelector(".showMore_about");
let textAbout = document.querySelector(".text_about");
let buttonContent = document.querySelector(".button_content");

button.addEventListener("click", function () {
    if (textAbout.style.display == "" || textAbout.style.display == "none") {
        textAbout.style.display = "block";
        buttonContent.textContent = "Pokaż mniej";
    } else if (textAbout.style.display == "block") {
        textAbout.style.display = "none";
        buttonContent.textContent = "Pokaż więcej";
    }
})


let toogleNav = document.getElementById("myNav");
let burger = document.querySelector(".burger");
let barOne = document.querySelector(".bar1");
let barTwo = document.querySelector(".bar2");
let barThree = document.querySelector(".bar3");
let hrefElements = document.querySelectorAll('.overlay-content > *')
let menuBar = document.querySelector(".overlay-content")

if (window.innerWidth > 600) {
    toogleNav.style.width = '100%';
} else {
    toogleNav.style.width = '0px';
}

function showMenu() {
    if (toogleNav.style.width == "0px") {
        toogleNav.style.width = "100%";
        barOne.classList.add('change1');
        barTwo.classList.add('change2');
        barThree.classList.add('change3');

    } else {
        toogleNav.style.width = "0px";
        barOne.classList.remove('change1');
        barTwo.classList.remove('change2');
        barThree.classList.remove('change3');
    }
}

if (window.innerWidth < 600) {
    function hideMenu() {
        toogleNav.style.width = "0px";
        barOne.classList.remove('change1');
        barTwo.classList.remove('change2');
        barThree.classList.remove('change3');
    }
}


window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 473 || document.documentElement.scrollTop > 473) {
        
            hrefElements[0].style.padding = "6px 12px 6px 12px";
            hrefElements[1].style.padding = "6px 12px 6px 12px";
            hrefElements[2].style.padding = "6px 12px 6px 12px";
            hrefElements[3].style.padding = "6px 12px 6px 12px";
            hrefElements[4].style.padding = "6px 12px 6px 12px";
        menuBar.style.backgroundColor = "black";
        menuBar.style.height = "30px";
        } else {
            hrefElements[0].style.padding = "7px 20px 7px 20px";
            hrefElements[1].style.padding = "7px 20px 7px 20px";
            hrefElements[2].style.padding = "7px 20px 7px 20px";
            hrefElements[3].style.padding = "7px 20px 7px 20px";
            hrefElements[4].style.padding = "7px 20px 7px 20px";
        menuBar.style.backgroundColor = "black";
        menuBar.style.height = "40px";
        }
    }