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
        slidesToShow: 4,
        infinite: true,
        autoplay: true
      }
 
    }, {
 
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        dots: true
      }
 
    }, {
 
      breakpoint: 300,
      settings: "unslick" // destroys slick
 
    }]
});
