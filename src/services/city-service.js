const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    // if (!CityService.instance) {
    // CityService.instance = this;
    this.cityRepository = new CityRepository();
    // }
    // return CityService.instance;
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
  async getAllCities(filter) {
    try {
      const cities = await this.cityRepository.getAllCities({ name: filter.name });
      return cities;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
  async createCities(data) {
    try {
      const filteredData = data.map((obj) => {
        return { name: obj.name };
      });
      const cities = await this.cityRepository.createCities(filteredData);
      return cities;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async getAirportsOfaCity(id) {
    try {
      const airports = await this.cityRepository.getAirportsOfaCity(id);
      return airports;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = CityService;
