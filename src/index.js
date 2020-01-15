import fullpage from 'fullpage.js';

console.log("Fullpage.js Initialised:", fullpage);

// Initializing it
var fullPageInstance = new fullpage('#myFullpage', {
    navigation: true,
    sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
});
