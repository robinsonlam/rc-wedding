// Styles
import styles from './styles/main.scss';

import $ from 'jquery';
window.$ = window.jQuery = $;

import 'slick-carousel';

import 'bootstrap';

// Import so that it puts images into assets folder
import './assets/landing.jpg';
import './assets/depena-reserve.jpg';
import './assets/sailing-club.jpg';
import './assets/17.jpg';
import './assets/15.jpg';
import './assets/16.jpg';

import './assets/rob-1.jpg';
import './assets/christy-1.jpg';

$(document).ready(() => {
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