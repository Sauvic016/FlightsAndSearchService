const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");
const CityService = require("./city-service");

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

  async getAllFlightData(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async getAllFlights(data) {
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
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
  async getFlight(flightId) {
    try {
      const flight = await this.flightRepository.getFlight(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
  async updateFlight(flightId, data) {
    try {
      const response = await this.flightRepository.updateFlight(flightId, data);
      return response;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = FlightService;
