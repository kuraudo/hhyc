import $ from 'jquery'
import 'slick-carousel'
    
window.jQuery = window.$ = $; 

$(".carousel").slick({
 
 
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    responsive: [{
 
      breakpoint: 1024,
      settings: {
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        autoplay: true,
        autoplaySpeed: 1000,
      }
 
    }, {
 
      breakpoint: 600,
      settings: {
        dots: true
      }
 
    }, {
 
      breakpoint: 300,
      settings: "unslick" // destroys slick
 
    }]
});
