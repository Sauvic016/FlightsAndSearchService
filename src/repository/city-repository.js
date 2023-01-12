const { Op } = require("sequelize");

const { City, Airport } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
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
      console.log("Something went wrong in the repository layer");
      throw { error };
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
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
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
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
  async createCities(data) {
    try {
      const cities = await City.bulkCreate(data);
      return cities;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAirportsOfaCity(id) {
    try {
      const city = await this.getCity(id);
      const airports = await city.getAirports();
      return airports;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
