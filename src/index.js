import fullpage from 'fullpage.js';

// STyles
import resetStyles from './styles/reset.css';
import styles from './styles/main.css';

console.log("Fullpage.js Initialised:", fullpage);

// Initializing it
var fullPageInstance = new fullpage('#fullpage', {
    navigation: true,
    sectionsColor:['#ffffff', '#d1e3ff', '#ffffff', 'd1e3ff', '#ffffff', 'd1e3ff']
});
