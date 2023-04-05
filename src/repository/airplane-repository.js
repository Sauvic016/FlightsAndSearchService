const { Airplane } = require("../models/index");
const { ClientError, ServerError } = require("../utils/error");

class AirplaneRepository {
  async getAirplane(id) {
    try {
      const airport = await Airplane.findByPk(id);
      if (!airport) {
        throw new ClientError("AirplaneNotFoundError", "Invalid Airplane Id", "Requested Airplane does not exist");
      }
      return airport;
    } catch (error) {
      if (error.name) {
        throw error;
      }
      throw new ServerError();
    }
  }
}

module.exports = AirplaneRepository;
