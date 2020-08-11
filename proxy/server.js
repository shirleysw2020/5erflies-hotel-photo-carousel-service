const express = require('express');
const app = express();
const db = require('../database/listing-model');
const port = 3000

app.use(express.static(__dirname + '/public'));
// '/user?ID=12345'
// api will be '/listing' --> database
app.get('/listing', (req, res) => {
  var id = req.query.id;
  db.findById(id, (err, listing) => {
    if (err) {
      console.log('server: failed to fetch from db');
      callback(err, null);
    } else {
      res.status(200).send(listing);
      console.log('server: success fetchign from db');
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
