const express = require("express");

const { CityMiddlewares, FlightMiddlewares } = require("../../middlewares/index");

const { CityController, AirportController, FlightController } = require("../../controllers/index");

const router = express.Router();

router.post("/city", CityMiddlewares.validateCreateCity, CityController.create);
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
router.get("/allflights", FlightController.getAll);
router.get("/flights/:id", FlightController.get);
router.get("/flights", FlightMiddlewares.validateGetFlight, FlightController.getFlights);
router.patch("/flights/:id", FlightController.update);

module.exports = router;
