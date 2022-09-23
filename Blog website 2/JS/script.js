const responsive ={
0:{
    items:1
},

    320:{
        items:1},

        560:{
            items:2
        },


        960:{
            items:3
        },

        1200:{
            items:4
        },


        
    
}

$(document).ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  // The Click event detector

  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });

  // Owl Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$(".owl-nav .owl-nav-pre"), $(".owl-nav .owl-nav-next")],
    responsive:responsive,
  });

  // Owl Carousel

  // scrollup

  $(".move-up span").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
