AOS.init();
VANTA.WAVES({
    el: '#home',
    // #123C69
    // color: "#9e363a",
    // color: '#46344e',
    // color: '#78244c',
    color: "#230338",
    shininess: 110.00,
    waveHeight: 30.00,
    waveSpeed: 1.15,
    zoom: 0.85
});
$(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $id.offset().top;
    $('body, html').animate({scrollTop: pos-70}, 1200);
});
var width = $(window).width();
var nav = false;
$('.hamb').click(function(event){
    if (!nav) {
        $('.right2').addClass('responsive').show(500);nav=true;
        $('.hamb i').removeClass('fa-bars');
        $('.hamb i').addClass('fa-times');
    }
    else{
        $('.right2').removeClass('responsive').hide(500);nav=false;
        $('.hamb i').addClass('fa-bars');
        $('.hamb i').removeClass('fa-times');
    }
});
var navbar = $("nav");
var sticky = navbar.offsetTop;
function stickyFun(){
    if (window.pageYOffset >= sticky) {
        navbar.css({
            "position":"fixed"
        });
  } else {
        navbar.css({
            "position":"sticky"
        });
  }
}
var Nav = $('li a');
Nav.click(function(){
    $('a.active').removeClass("active");
    $(this).addClass("active");
    // $(this).attr('href')='';
});
$(document).scroll(function () {
     var position = $(document).scrollTop();
     var header = $('nav').outerHeight();
     $('section').each(function(i) {
         if($(this).position().top <= (position + header))
          {
               $(".active").removeClass('active').addClass('removed');
               $("li a").eq(i).addClass('active');
          }
      });
   }); 
$("#techeve").owlCarousel({
    items: 4,
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    nav: false,
    dots: true,
    animateOut: "fadeOut",
    responsive : {
      1100 : {
        nav: false,
        items: 3,
        margin: 30
      },
      800:{
        items: 2,
        margin: 10
      },
      0:{
        items: 1,
        margin: 10
      }
    }
});
$("#nontecheve").owlCarousel({
    items: 4,
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    nav: false,
    dots: true,
    animateOut: "fadeOut",
    responsive : {
      1100 : {
        nav: false,
        items: 3,
        margin: 30
      },
      800:{
        items: 2,
        margin: 10
      },
      0:{
        items: 1,
        margin: 10,
      }
    }
});
$('#owlCar1').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    nav: false,
    autoHeight: true,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    autoplayTimeout: 4000
});
$('#owlCar4').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    nav: false,
    dots: false,
    autoHeight: true,
    mouseDrag: false,
    touchDrag: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    autoplayTimeout: 4000
});