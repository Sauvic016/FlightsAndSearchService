const { AirportRepository } = require("../repository/index");
const CrudService = require("./crud-service");

class AirportService extends CrudService {
  constructor() {
    const airportRepository = new AirportRepository();
    super(airportRepository);
  }
  // async createAirport(data) {
  //   try {
  //     const airport = await this.airportRepository.createAirport(data);
  //     return airport;
  //   } catch (error) {
  //     console.log("Something went wrong in the service layer");
  //     throw { error };
  //   }
  // }
  // async getAirport(airportId) {
  //   try {
  //     const airport = await this.airportRepository.getAirport(airportId);
  //     return airport;
  //   } catch (error) {
  //     console.log("Something went wrong at the service layer");
  //     throw error;
  //   }
  // }

  // async getAllAirports() {
  //   try {
  //     const airports = await this.airportRepository.getAllAirports();
  //     return airports;
  //   } catch (error) {
  //     console.log("Something went wrong in the repository layer");
  //     throw { error };
  //   }
  // }

  // async updateAirport(data, airportId) {
  //   try {
  //     const airport = await this.airportRepository.updateAirport(data, airportId);
  //     return airport;
  //   } catch (error) {
  //     console.log("Something went wrong at the service layer");
  //     throw error;
  //   }
  // }

  // async deleteAirport(airportId) {
  //   try {
  //     const result = await this.airportRepository.deleteAirport(airportId);
  //     return result;
  //   } catch (error) {
  //     console.log("Something went wrong at the service layer");
  //     throw error;
  //   }
  // }
}
module.exports = AirportService;
