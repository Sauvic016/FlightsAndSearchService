const express = require("express");

const { FlightMiddlewares } = require("../../middlewares/index");

const { CityController, AirportController, FlightController } = require("../../controllers/index");

const router = express.Router();

router.post("/city", CityController.create);
router.post("/cities", CityController.createCities);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.get("/city/:id/airports", CityController.getAirportsOfaCity);
router.patch("/city/:id", CityController.update);

router.post("/airports", AirportController.create);
router.get("/airports/:id", AirportController.get);
router.patch("/airports/:id", AirportController.update);
router.delete("/airports/:id", AirportController.destroy);
router.get("/airports", AirportController.getAll);

router.post("/flights", FlightMiddlewares.validateCreateFlight, FlightController.create);
router.get("/flights", FlightController.getAll);

module.exports = router;
