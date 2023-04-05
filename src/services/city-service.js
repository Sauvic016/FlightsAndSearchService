const { CityRepository } = require("../repository/index");
const { ServerError } = require("../utils/error/");

class CityService {
  constructor() {
    if (!CityService.instance) {
      CityService.instance = this;
      this.cityRepository = new CityRepository();
    }
    return CityService.instance;
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      if (error.name) {
        throw error;
      }
      throw new ServerError();
    }
  }

  async deleteCity(cityId) {
    try {
      const getCity = await this.getCity(cityId);
      const response = await this.cityRepository.deleteCity(getCity.id);
      return response;
    } catch (error) {
      if (error.name) {
        throw error;
      }
      throw new ServerError();
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      if (error.name) {
        throw error;
      }
      throw new ServerError();
    }
  }
  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      if (error.name) {
        throw error;
      }
      throw new ServerError();
    }
  }
  async getAllCities(filter) {
    try {
      const cities = await this.cityRepository.getAllCities({ name: filter.name });
      return cities;
    } catch (error) {
      if (error.name) {
        throw error;
      }
      throw new ServerError();
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
      if (error.name) {
        throw error;
      }
      throw new ServerError();
    }
  }

  async getAirportsOfaCity(id) {
    try {
      const airports = await this.cityRepository.getAirportsOfaCity(id);
      if (!airports.length) {
        throw new ServerError("Not able to fetch any airports", "The city does not have any registered airports");
      }
      return airports;
    } catch (error) {
      if (error.name) {
        throw error;
      }
      throw new ServerError();
    }
  }
}

module.exports = CityService;
