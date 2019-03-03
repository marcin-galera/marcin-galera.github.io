window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementsByClassName("padding").removeClass = "20px";
  } else {
    document.getElementsByClassName("DeletePadding").style.padding = "0px";
  }
}


$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#nav').addClass('padding');
    } else {
       $('#dynamic').removeClass('newClass');
    }
});