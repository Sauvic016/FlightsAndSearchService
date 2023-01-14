const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airport = await airportService.create(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully created an airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create an airport",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const airport = await airportService.get(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully fetched an airport",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to fetch an airport",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await airportService.getAll();
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched the airports",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to fetch the airports",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const airport = await airportService.update(req.params.id, req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully updated the airport",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to update the airport",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const result = await airportService.destroy(req.params.id);
    return res.status(200).json({
      data: result,
      success: true,
      message: "Successfully deleted the airport",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to delete the airport",
      err: error,
    });
  }
};

module.exports = {
  create,
  get,
  getAll,
  update,
  destroy,
};
