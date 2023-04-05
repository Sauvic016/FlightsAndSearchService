const { Airport, City } = require("../models/index");
const CrudRepository = require("./crud-repository");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRepository;
