const { Op } = require("sequelize");
const { Flight } = require("../models/index");
const { getPagingData } = require("../utils/helper");

class FlightRepository {
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    // if (data.minPrice && data.maxPrice) {
    //   Object.assign(filter, {
    //     [Op.and]: [{ price: { [Op.gte]: data.minPrice } }, { price: { [Op.lte]: data.maxPrice } }],
    //   });
    // }

    let priceFilter = [];

    if (data.minPrice) {
      // Object.assign(filter, { price: { [Op.gte]: data.minPrice } });

      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      // Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });

      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }
    Object.assign(filter, { [Op.and]: priceFilter });

    if (data.date) {
      filter.departureTime = {
        [Op.substring]: data.date,
      };
    }

    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flight.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      console.log(filter);
      console.log(filterObject);
      let limit = 6;
      let page = filter?.page ? (filter.page > 0 ? filter.page : 1) : 1;
      let offset = (page - 1) * limit;
      let flight = await Flight.findAndCountAll({
        where: filterObject,
        limit,
        offset,
      });
      flight = getPagingData(flight, page, limit);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateFlight(flightId, data) {
    try {
      await Flight.update(data, {
        where: {
          id: flightId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
