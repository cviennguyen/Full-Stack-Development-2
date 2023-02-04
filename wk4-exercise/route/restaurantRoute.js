const express = require("express");
const router = express.Router();

const restaurantController = require("../controller/restaurantController");

router.route("/").get(restaurantController.getAllRestaurants);
router
  .route("/cuisine/:cuisine")
  .get(restaurantController.getRestaurantByCuisine);

router
  .route("/Delicatessen")
  .get(restaurantController.getRestaurantByDelicatessen);
module.exports = router;
