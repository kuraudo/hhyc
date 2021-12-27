import $ from 'jquery'
import 'jquery'
import 'slick-carousel'
import '@fortawesome/fontawesome-free/css/all.css'
import 'jquery-lazy'

window.jQuery = window.$ = $; 

$(".carousel").slick({
 
 
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
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
$(function() {
        $('.lazy').lazy();
});
