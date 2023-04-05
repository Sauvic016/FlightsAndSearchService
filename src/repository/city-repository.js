const { Op } = require("sequelize");
const { StatusCodes } = require("http-status-codes");
const { ClientError } = require("../utils/error/");

const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      if (error.name == "SequelizeUniqueConstraintError") {
        throw new ClientError(
          "UniqueConstraintError",
          "City name already exists",
          "City name should be unique",
          StatusCodes.CONFLICT
        );
      }
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      throw error;
    }
  }

  async updateCity(cityId, data) {
    try {
      // The below approach also works but will not return updated object
      // if we are using PgSQL then returning :true can be used , else not
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });
      //For getting updated data in mysql we use the below approach
      const city = await City.findByPk(cityId);
      if (!city) {
        throw new ClientError("CityNotFound", "Not able to update the city", "Invalid City id Provided");
      }
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      if (!city) {
        throw new ClientError("CityNotFound", "Not able to get the city", "Invalid City id Provided");
      }
      return city;
    } catch (error) {
      throw error;
    }
  }

  async getAllCities(filter) {
    //filter can be empty also
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });

        if (!cities.length) {
          throw new ClientError(
            "CitiesNotFound",
            "Not able to get any city with this name",
            "City with starting with this name does not exist"
          );
        }
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      throw error;
    }
  }
  async createCities(data) {
    try {
      const cities = await City.bulkCreate(data);
      return cities;
    } catch (error) {
      if (error.name == "SequelizeUniqueConstraintError") {
        throw new ClientError(
          "UniqueConstraintError",
          "These values already exists ",
          "Cities name should be unique",
          StatusCodes.CONFLICT
        );
      }
      throw error;
    }
  }

  async getAirportsOfaCity(id) {
    try {
      const city = await this.getCity(id);
      const airports = await city.getAirports();
      return airports;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CityRepository;
