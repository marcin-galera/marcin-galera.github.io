

var links = document.querySelectorAll(".padding")
  function scrollFunction() {
    for( var i = 0; i < links.length; i++ ) {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ) {
        links[i].style.padding = "0px"
      } else {
        links[i].style.padding = "15px"
      }
      }
    }

    window.onscroll = function() {scrollFunction()};

  

  //   window.addEventListener("scroll", function (event) {
  //     var scroll = this.scrollY;
  //     console.log(scroll)
  // });