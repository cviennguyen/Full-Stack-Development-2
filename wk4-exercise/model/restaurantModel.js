//create restaurant model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  address: {
    building: String,
    street: String,
    zipcode: String,
  },
  city: String,
  cuisine: String,
  name: String,
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
