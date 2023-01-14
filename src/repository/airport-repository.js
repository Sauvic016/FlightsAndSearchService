const { Airport, City } = require("../models/index");
const CrudRepository = require("./crud-repository");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
  // async createAirport({ name, address, cityId }) {
  //   try {
  //     const city = await City.findOne({ where: { id: cityId } });
  //     const airport = await city.createAirport({
  //       name,
  //       address,
  //     });
  //     return airport;
  //   } catch (error) {
  //     console.log("Something went wrong in the repository layer");
  //     throw { error };
  //   }
  // }

  // async getAirport(airportId) {
  //   try {
  //     const airport = await Airport.findByPk(airportId);
  //     return airport;
  //   } catch (error) {
  //     console.log("Something went wrong in the repository layer");
  //     throw { error };
  //   }
  // }
  // async getAllAirports() {
  //   try {
  //     const airports = await Airport.findAll();
  //     return airports;
  //   } catch (error) {
  //     console.log("Something went wrong in the repository layer");
  //     throw { error };
  //   }
  // }

  // async updateAirport(data, airportId) {
  //   try {
  //     const airport = await Airport.findOne({ where: { id: airportId } });
  //     if (data.name) airport.name = data.name;
  //     if (data.address) airport.address = data.address;
  //     if (data.city_id) airport.city_id = data.city_id;
  //     await airport.save();
  //     return airport;
  //   } catch (error) {
  //     console.log("Something went wrong in the repository layer");
  //     throw { error };
  //   }
  // }

  // async deleteAirport(airportId) {
  //   try {
  //     const result = await Airport.destroy({
  //       where: {
  //         id: airportId,
  //       },
  //     });
  //     return result;
  //   } catch (error) {
  //     console.log("Something went wrong in the repository layer");
  //     throw { error };
  //   }
  // }
}

module.exports = AirportRepository;
