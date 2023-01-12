const express = require("express");
const CityController = require("../../controllers/city-controller");

const router = express.Router();

router.post("/city", CityController.create);
router.post("/cities", CityController.createCities);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.get("/airports/city/:id", CityController.getAirportsOfaCity);
router.patch("/city/:id", CityController.update);

module.exports = router;
