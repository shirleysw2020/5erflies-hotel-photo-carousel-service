// this file is for generating fakers and inserting into database
const mongoose = require('mongoose');
const faker = require('faker');
const ListingModel = require('./database/listing-model.js');  // import Listing model
const s3Photos = require('./database/s3Photos.js');

// listings stores documents of airbnb listings
const listings = [];

const seedListing = () => {
  const listPhotos = [s3Photos.boccaccio, s3Photos.calanteLuna, s3Photos.trinita];
  const titles = ['Boccaccio 22', 'CalanteLuna Relais - M\'Illumino d\'Immenso', 'Trinita dei Monti superior suite Spanish steps'];  //personal perference for listing titles
  // loop 100 times
  for (let r = 0; r < 100; r++) {
    const dataInfo = {
      ID: r + 1,
      listingTitle: titles[Math.floor(Math.random() * titles.length)],
      rating: faker.finance.amount(4,5,2),
      numOfReviews: faker.random.number({ 'min': 350,'max': 600 }),
      superHost: faker.random.boolean(),
      location: faker.address.city() + ' ' + faker.address.county() + ' Italy',
      photos: listPhotos[r%3]
    }
    listings.push(dataInfo);
  }
}

seedListing();

ListingModel.Listing.create(listings, (err, result) => {
  // console.log("whats Listing fn?", seedListing);
    if (err) {
      throw error
    } else {
      console.log('success saving listing to db!')
    }
});

