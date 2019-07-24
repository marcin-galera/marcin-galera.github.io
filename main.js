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


let arrowBounce = document.querySelector('.bounce')
let windowHeight = window.innerHeight

// arrowBounce.addEventListener("click", function () {

//     document.scrollBy(100, 100);
// })
function scrollWin() {
    window.scrollTo(0, windowHeight);
}



let button = document.querySelector(".showMoreAbout");
let textAbout = document.querySelector(".textAbout");
let buttonContent = document.querySelector(".buttonContent");

button.addEventListener("click", myFunction)



function myFunction() {
    if (textAbout.style.display == "" || textAbout.style.display == "none") {
        textAbout.style.display = "block";
        buttonContent.textContent = "Pokaż mniej";
    } else if (textAbout.style.display == "block") {
        textAbout.style.display = "none";
        buttonContent.textContent = "Pokaż więcej";
    }
}


let toogleNav = document.getElementById("myNav");
let burger = document.querySelector(".burger");
let barOne = document.querySelector(".bar1");
let barTwo = document.querySelector(".bar2");
let barThree = document.querySelector(".bar3");
let hrefElements = document.querySelectorAll('.overlay-content > *')
let menuBar = document.querySelector(".overlay-content")
var x = document.querySelector(".overlay-content").querySelectorAll("a");

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

        x[0].innerHTML = "O mnie";
        x[1].innerHTML = "Umiejętności";
        x[2].innerHTML = "Doświadczenie";
        x[3].innerHTML = "Oczekiwania";
        x[4].innerHTML = "Kontakt";

    } else {
        toogleNav.style.width = "0px";
        barOne.classList.remove('change1');
        barTwo.classList.remove('change2');
        barThree.classList.remove('change3');
        x[0].innerHTML = "";
        x[1].innerHTML = "";
        x[2].innerHTML = "";
        x[3].innerHTML = "";
        x[4].innerHTML = "";
    }
}

if (window.innerWidth < 600) {
    function hideMenu() {
        toogleNav.style.width = "0px";
        barOne.classList.remove('change1');
        barTwo.classList.remove('change2');
        barThree.classList.remove('change3');

    }
} else {
    function hideMenu() {

        toogleNav.style.width = "100%";
    }

}


window.onscroll = function () {
    changeMenuSize()
    changeBurgerColor()
};

function changeMenuSize() {
    if (document.body.scrollTop > 473 || document.documentElement.scrollTop > 473) {

        hrefElements[0].style.padding = "6px 12px 6px 12px";
        hrefElements[1].style.padding = "6px 12px 6px 12px";
        hrefElements[2].style.padding = "6px 12px 6px 12px";
        hrefElements[3].style.padding = "6px 12px 6px 12px";
        hrefElements[4].style.padding = "6px 12px 6px 12px";
        menuBar.style.height = "30px";
    } else {
        hrefElements[0].style.padding = "7px 20px 7px 20px";
        hrefElements[1].style.padding = "7px 20px 7px 20px";
        hrefElements[2].style.padding = "7px 20px 7px 20px";
        hrefElements[3].style.padding = "7px 20px 7px 20px";
        hrefElements[4].style.padding = "7px 20px 7px 20px";
        menuBar.style.height = "40px";
    }
}


function changeBurgerColor() {
    if (document.documentElement.scrollTop < 650) {
        console.log(document.documentElement.scrollTop + "  1")
        barOne.style.backgroundColor = "rgb(255, 255, 255)";
        barTwo.style.backgroundColor = "rgb(255, 255 , 255)";
        barThree.style.backgroundColor = "rgb(255, 255, 255)"
    }

    if (document.documentElement.scrollTop > 650 && document.documentElement.scrollTop < 4600 ) {
        console.log(document.documentElement.scrollTop + "  2")
        barOne.style.backgroundColor = "rgb(120, 120, 130)";
        barTwo.style.backgroundColor = "rgb(120, 120, 130)";
        barThree.style.backgroundColor = "rgb(120, 120, 130)";
    }

    if (document.documentElement.scrollTop > 4600 && document.documentElement.scrollTop < 5650) {
        console.log(document.documentElement.scrollTop + "  3")
        barOne.style.backgroundColor = "rgb(255, 255, 255)";
        barTwo.style.backgroundColor = "rgb(255, 255 , 255)";
        barThree.style.backgroundColor = "rgb(255, 255, 255)"
    }

    if (document.documentElement.scrollTop > 5650 ) {
        console.log(document.documentElement.scrollTop + "  2")
        barOne.style.backgroundColor = "rgb(120, 120, 130)";
        barTwo.style.backgroundColor = "rgb(120, 120, 130)";
        barThree.style.backgroundColor = "rgb(120, 120, 130)";
    }









}