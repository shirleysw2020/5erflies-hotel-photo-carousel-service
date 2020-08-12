const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/listing', { useNewUrlParser: true, useUnifiedTopology: true });
// conencting mongoose orm to mongo
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("admin: database connected!"));

// schema: 'how your table looks like'
let listingSchema = mongoose.Schema({
  ID: { type: Number },
  listingTitle: { type: String },
  rating: { type: Number },
  numOfReviews: { type: Number },
  superHost: { type: Boolean },
  location: { type: String },
  photos: [{ type: String }]
});

// each doc will be an instance of Listing class/model
let Listing = mongoose.model('Listing', listingSchema);

const findById = (id, callback) => {
  Listing.find({'ID': id}, (err, listings) => {
    if (err) {
      console.error(err, "failed to fetch doc T T");
      callback(err, null);
    } else {
      callback(null, listings);
    }
  });
}


module.exports.Listing = Listing;
module.exports.findById = findById;
