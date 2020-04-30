import fullpage from 'fullpage.js';
import $ from 'jquery';

// Styles
import resetStyles from './styles/reset.css';
import styles from './styles/main.css';

import MyImage from './assets/slideshow/1.jpg';
import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel'

console.log("11", MyImage);

console.log("Fullpage.js Initialised:", fullpage);

// Initializing it
var fullPageInstance = new fullpage('#fullpage', {
    navigation: true,
    sectionsColor:['#b76e79', '#d1e3ff', '#b76e79', 'd1e3ff', '#b76e79', 'd1e3ff']
});


// RSVP FORM SCRIPT
var $form = $('form#weddingRsvpForm'),
    url = 'https://script.google.com/macros/s/AKfycbzKBO9PBckRlXfRPiruLpq2yOj6MwwlSUcDOHGlkoNfMtWntrqJ/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
    success: function() {
        alert("form sent")
    }
  });

})

$('#carouselPhotos').slick();
