const { ClientErrors } = require("../utils/error-codes");
const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    // if any of the body params is missing we come inside the if
    return res.status(ClientErrors.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "Invalid request body for create flight",
      err: "Missing mandatory properties to create a flight",
    });
  }
  next();
};

const validateGetFlight = (req, res, next) => {
  if (!req.query.arrivalCityId || !req.query.departureCityId || !req.query.date) {
    return res.status(ClientErrors.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "Invalid request body for get flights",
      err: "Missing mandatory properties to get a flight",
    });
  }
  next();
};

module.exports = {
  validateCreateFlight,
  validateGetFlight,
};
