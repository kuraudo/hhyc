import $ from 'jquery'
import 'slick-carousel'
    
window.jQuery = window.$ = $; 

$(".carousel").slick({
 
 
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 500,
    cssEase: 'linear',
    infinite: true,
    responsive: [{
 
      breakpoint: 1024,
      settings: {
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
      }
 
    }, {
 
      breakpoint: 600,
      settings: {
        dots: true,
        autoplay: false,
      }
 
    }, {
 
      breakpoint: 300,
      settings: "unslick" // destroys slick
 
    }]
});
