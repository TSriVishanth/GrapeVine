$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoPlay: true,
        autoPlay : 1000 ,
        navText: ["<img src='./images/indeximg/next1.png'>","<img src='./images/indeximg/prev1.png'>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 4,
                nav: true,
                loop: true,
            }
        }
    })
  });
