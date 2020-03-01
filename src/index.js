import fullpage from 'fullpage.js';
import { $ } from 'jquery';

// Styles
import resetStyles from './styles/reset.css';
import styles from './styles/main.css';

console.log("Fullpage.js Initialised:", fullpage);

// Initializing it
var fullPageInstance = new fullpage('#fullpage', {
    navigation: true,
    sectionsColor:['#ffffff', '#d1e3ff', '#ffffff', 'd1e3ff', '#ffffff', 'd1e3ff']
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
    data: $form.serializeObject()
  }).success(
    // do something
  );

})