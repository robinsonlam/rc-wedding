// Styles
import styles from './styles/main.scss';

import $ from 'jquery';
window.$ = window.jQuery = $;

import 'jquery-validation';

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
import './assets/shadow-cropped-1.jpg';

import './assets/rob-1.jpg';
import './assets/christy-1.jpg';

let numberOfGuests = 1;

$(document).ready(() => {
    $('#number_attending').value = numberOfGuests;

    // RSVP FORM SCRIPT
    var $form = $('form#weddingRsvpForm'),
        url = 'https://script.google.com/macros/s/AKfycbzKBO9PBckRlXfRPiruLpq2yOj6MwwlSUcDOHGlkoNfMtWntrqJ/exec'

    // $("#submit-form-button").prop('disabled', true);
    // $("#submit-form-button").text('Please fill in the required details above');

    $('#weddingRsvpForm').validate({
      rules: {
        guest_name: "required",
        status: "required",
        number_attending: "required"
      },
      errorClass: 'invalid',
      invalidHandler: function(ev, validator) {
        console.log("invalid ev:", ev)
        console.log("invalid validator:", validator)
      },
      submitHandler: function(form) {
          console.log("Submit button form:", form);
          $('#submit-form-button').prop('disabled', true);
          $('#submit-form-button').text('Sending RSVP...');


          let hostName =  $(`#guest-0-name`).val();
          let hostStatus = $(`#attending-select`).val();
          let email = $(`#email`).val();
          let phone = $(`#phone`).val();

          let promises = [];
  
          for (let x = 0; x < numberOfGuests; x++) {
            let guestName = $(`#guest-${x}-name`).val();
            let guestDietRequirements = $(`#guest-${x}-diet-requirements`).val();
            let guestSongSuggestion = $(`#guest-${x}-song-suggestions`).val();
            let formString = `your_name=${hostName}&status=${hostStatus}&email=${email}&phone=${phone}&number_attending=${numberOfGuests || ''}&guest_name=${guestName || ''}&diet_requirements=${guestDietRequirements || ''}&song_suggestions=${guestSongSuggestion}`;
          console.log(formString);
            
            promises.push($.ajax({
                url: url,
                method: "GET",
                dataType: "json",
                data: formString
            }));
          }

          console.log(promises);

          $.when.apply($, promises).done(( [responses] ) => {
            console.log("responses: ",responses);
            $('#submit-form-button').prop('disabled', false);
            $('#submit-form-button').text('Submit Guests!');

            alert("Thank you for submitting your RSVP!")
          });
        }
    })

    createGuestFormItems(numberOfGuests);

    $('#number_attending').change((e) => {
        numberOfGuests = parseInt(e.target.value);
        createGuestFormItems(numberOfGuests);
    });
});

function createGuestFormItems(guestAmount) {
  $('#guests-container').empty();

  for (let x = 0; x < guestAmount; x++) {
    var formHtml = $(`
    <div class='guest'>
      <h3 class="guestNumber">Guest #${x+1}:</h3>
      <div class="inputContainer half">
        <label class="inputLabel">Guest Name<span style="font-size: 18px; margin: 0; color: red;">*</span></label>
        <input required type='text' class="textInput" id='guest-${x}-name' name='guest_name' placeholder='Guest Name' />
      </div>

      <div class="inputContainer half">
        <label class="inputLabel">Dietary Requirements</label>
        <input type='text' class="textInput" id='guest-${x}-diet-requirements' name='diet_requirements' placeholder='Vegetarian, Allergies etc...' />
      </div>

      <div class="inputContainer full">
        <label class="inputLabel">Song Suggestions</label>
        <input type='text' class="textInput" id='guest-${x}-song-suggestions' name='song_suggestions' placeholder='Song Suggestions' />
      </div>
    `);

    $('#guests-container').append(formHtml);
  }
}
 


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