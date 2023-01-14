const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    if (!FlightService.instance) {
      FlightService.instance = this;
      this.airplaneRepository = new AirplaneRepository();
      this.flightRepository = new FlightRepository();
    }
    return FlightService.instance;
  }
  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw {
          error: "Arrival time cannot be less than departure time",
        };
      }
      const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
      const flight = await this.flightRepository.createFlight({ ...data, totalSeats: airplane.capacity });
      return flight;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async getFlightData() {
    //todo
  }
}

module.exports = FlightService;

/**
 * flightNumber,
 * airplaneId,
 * departureAirportId,
 *  arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price,
 * totalSeats -> airplane
 */
