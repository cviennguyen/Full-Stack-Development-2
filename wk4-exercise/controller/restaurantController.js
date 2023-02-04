const Restaurant = require("../model/restaurantModel");

exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().sort({ _id: req.query.sortBy });
    res.status(200).json({
      status: "success",
      results: restaurants.length,
      data: {
        restaurants,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getRestaurantByCuisine = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ cuisine: req.params.cuisine });
    res.status(200).json({
      status: "success",
      results: restaurants.length,
      data: {
        restaurants,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getRestaurantByDelicatessen = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisine: "Delicatessen",
      city: { $ne: "Brooklyn" },
    }).sort({ name: 1 });
    res.status(200).json({
      status: "success",
      results: restaurants.length,
      data: {
        restaurants,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
