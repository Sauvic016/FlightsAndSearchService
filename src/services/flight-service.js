const { FlightRepository, AirplaneRepository } = require("../repository/index");
const CityService = require("./city-service");
const { compareTime } = require("../utils/helper");
const { ServerError, ClientError } = require("../utils/error");

class FlightService {
  constructor() {
    if (!FlightService.instance) {
      FlightService.instance = this;
      this.airplaneRepository = new AirplaneRepository();
      this.flightRepository = new FlightRepository();
      this.cityService = new CityService();
    }
    return FlightService.instance;
  }
  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw new ClientError(
          "TravelTimeError",
          "Arrival time cannot be less than departure time",
          "Departure time should always be less than Arrival time"
        );
      }
      const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
      const flight = await this.flightRepository.createFlight({ ...data, totalSeats: airplane.capacity });
      return flight;
    } catch (error) {
      if (error.name) {
        throw error;
      }
      throw new ServerError();
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await this.flightRepository.getFlight(flightId);
      if (!flight) {
        throw new ClientError("FlightNotFound", "Invalid Flight Id", "Flight does not exist for this id");
      }
      return flight;
    } catch (error) {
      if (error.name) {
        throw error;
      }
      throw new ServerError();
    }
  }

  async getAllFlightData(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw new ServerError();
    }
  }

  async getFlights(data) {
    try {
      const departAirports = await this.cityService.getAirportsOfaCity(data.departureCityId);
      const arrivalAirports = await this.cityService.getAirportsOfaCity(data.arrivalCityId);

      const departureAirportId = departAirports.map((item) => {
        return item.id;
      });
      const arrivalAirportId = arrivalAirports.map((item) => {
        return item.id;
      });
      const updatedData = { arrivalAirportId, departureAirportId, ...data };
      const flights = await this.getAllFlightData(updatedData);
      return flights;
    } catch (error) {
      if (error.name) {
        throw error;
      }
      throw new ServerError();
    }
  }

  async updateFlight(flightId, data) {
    try {
      const validFlight = await this.getFlight(flightId);
      const response = await this.flightRepository.updateFlight(validFlight.id, data);
      return response;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      if (error.name) {
        throw error;
      }
      throw new ServerError();
    }
  }
}

module.exports = FlightService;
