// Styles
import styles from './styles/main.scss';

import $ from 'jquery';
window.$ = window.jQuery = $;

import 'slick-carousel';

import 'bootstrap';

// Import so that it puts images into assets folder
import './assets/luka-cropped.jpg';
import './assets/temple-cropped-colored.jpg';
import './assets/depena-reserve-cropped.jpg';
import './assets/sailing-club.jpg';
import './assets/heart-divider-brown.png';
import './assets/taj-cropped.jpg';
import './assets/river-cropped.jpg';
import './assets/window-cropped.jpg';
import './assets/shadow-cropped.jpg';

import './assets/rob-1.jpg';
import './assets/christy-1.jpg';

let numberOfGuests = 0;

$(document).ready(() => {
    $('#number_attending').value = numberOfGuests;

    // RSVP FORM SCRIPT
    var $form = $('form#weddingRsvpForm'),
        url = 'https://script.google.com/macros/s/AKfycbzKBO9PBckRlXfRPiruLpq2yOj6MwwlSUcDOHGlkoNfMtWntrqJ/exec'

    $('#submit-form').on('click', function(e) {
      e.preventDefault();

        for (let x = 0; x < $('.guest').length; x++) {
          let guestName = $(`#guest-${x}-name`).val();
          let guestDietRequirements = $(`#guest-${x}-diet-requirements`).val();
          let guestSongSuggestion = $(`#guest-${x}-song-suggestions`).val();

          let formString = `number_attending=${numberOfGuests || ''}&guest_name=${guestName || ''}&diet_requirements=${guestDietRequirements || ''}&song_suggestions=${guestSongSuggestion}`;
          
          var jqxhr = $.ajax({
              url: url,
              method: "GET",
              dataType: "json",
              data: formString,
              success: function() {
                  alert("form sent")
              }
          });
        }
    });

    $('#number_attending').change((e) => {
        numberOfGuests = parseInt(e.target.value);
        $('#guests-container').empty();
        for (let x = 0; x < numberOfGuests; x++) {
          var formHtml = $(`
          <div class='guest'>
            <div>
              <label>Guest Name</label>
              <input type='text' id='guest-${x}-name' name='guest_name' placeholder='Guest Name' />
            </div>
  
            <div>
              <label>Dietary Requirements</label>
              <input type='text' id='guest-${x}-diet-requirements' name='diet_requirements' placeholder='Vegetarian, Allergies etc...' />
            </div>
  
            <div>
              <label>Song Suggestions</label>
              <input type='text' id='guest-${x}-song-suggestions' name='song_suggestions' placeholder='Song Suggestions' />
            </div>
          `);

          $('#guests-container').append(formHtml);
        }
    });
});



// data-parallax="scroll" data-image-src="../assets/slideshow/1.jpg"
// $('#photoCarouselContainer').slick({
//     adaptiveHeight: true
// });



/* <div class="section">
<div class="container" data-anchor="about-us">
  <h2 class="sectionTitle">About Us</h2>

  <div class="row">
    <div class="col-xs-6">
      <div class="profilePhotoContainer">
        <img class="profilePhoto" src="http://www.fillmurray.com/1280/720" />
      </div>

      <div class="profilePhotoContainer">
        <img class="profilePhoto" src="http://www.fillmurray.com/1280/720" />
      </div>
    </div>
    <div class="col-xs-6">
      

    </div>
  </div>
</div>
</div> */