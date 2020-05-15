import html from './pages/index.html';

import fullpage from 'fullpage.js';

// Styles
import styles from './styles/main.scss';

import $ from 'jquery';
window.$ = window.jQuery = $;

import 'slick-carousel';

import 'bootstrap';

import Rellax from 'rellax';

import img12 from './assets/slideshow/12.jpg';
import img17 from './assets/slideshow/17.jpg';
import img15 from './assets/slideshow/15.jpg';
import img16 from './assets/slideshow/16.jpg';
import imgRob from './assets/slideshow/rob.JPG';
import imgChristy from './assets/slideshow/christy.JPG';

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

    var rellax = new Rellax('.rellax', {
        speed: 0,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
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