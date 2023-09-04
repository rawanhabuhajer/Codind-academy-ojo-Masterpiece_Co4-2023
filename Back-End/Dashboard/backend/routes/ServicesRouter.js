const express = require("express");
const ServicesController = require("../controllers/ServicesController");
const router = express.Router();

router
  .route("/")
  .get(ServicesController.getAllServices)
  //  .get(AuthController.protect, UsersController.getAllUsers)
  .post(ServicesController.createService);

router
  .route("/:id")
  .get(ServicesController.getService)
  .patch(ServicesController.updateService)
  .delete(
    // AuthController.protect,
    ServicesController.deleteService
  );

module.exports = router;