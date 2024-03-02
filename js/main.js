// header
 let nav = document.querySelector(".navbar");
 window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
 }


//  owl carousel
$(document).ready(function() {
    $(".client-slider-section").owlCarousel ({
        item: 3,
        loop: true,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveclass:true,
        responsive:{
            0:{
                item:2
            },
            600:{
                item:3
            },
            1000:{
                item:6
            }
        }
    });
});

