const express = require("express");
const { CityController, AirportController, FlightController } = require("../../controllers/index");

const router = express.Router();

router.post("/city", CityController.create);
router.post("/cities", CityController.createCities);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.get("/airports/city/:id", CityController.getAirportsOfaCity);
router.patch("/city/:id", CityController.update);

router.post("/airport", AirportController.create);
router.get("/airport/:id", AirportController.get);
router.patch("/airport/:id", AirportController.update);
router.delete("/airport/:id", AirportController.destroy);
router.get("/airports", AirportController.getAll);

router.post("/flights", FlightController.create);
router.get("/flights", FlightController.getAll);

module.exports = router;
