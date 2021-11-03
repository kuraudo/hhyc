import $ from 'jquery'
import 'slick-carousel'
    
window.jQuery = window.$ = $; 

$(".carousel").slick({
 
  // normal options...
  infinite: false,
 
  // the magic
  responsive: [{
 
      breakpoint: 1024,
      settings: {
        infinite: true,
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
