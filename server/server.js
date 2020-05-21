const express = require('express');
const path = require('path');
const port = process.env.PORT || 4567;
const app = express();



try {
  // the __dirname is the current directory from where the script is running
  app.use(express.static(__dirname));
  console.log('Serving from ', __dirname);

  // send the user to index html page inspite of the url
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
  });

  app.use('/assets', express.static(path.resolve(__dirname, '../dist/assets')));


  app.get('/main.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/main.js'));
  });
   
  app.listen(port);

  console.log("Server running on port:", port);

} catch (e) {
  console.log("ERROR:", e);
}
