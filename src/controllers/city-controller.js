const { CityService } = require("../services/index");
const { StatusCodes } = require("http-status-codes");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(StatusCodes.CREATED).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      data: {},
      success: false,
      message: error.message,
      err: error.explanation,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(StatusCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      data: {},
      success: false,
      message: error.message,
      err: error.explanation,
    });
  }
};
const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(StatusCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully fetched the city",
      err: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      data: {},
      success: false,
      message: error.message,
      err: error.explanation,
    });
  }
};

const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(StatusCodes.OK).json({
      data: city,
      success: true,
      message: "Successfully updated the city",
      err: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      data: {},
      success: false,
      message: error.message,
      err: error.explanation,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query);
    return res.status(StatusCodes.OK).json({
      data: cities,
      success: true,
      message: "Successfully fetched all the cities",
      err: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      data: {},
      success: false,
      message: error.message,
      err: error.explanation,
    });
  }
};

const createCities = async (req, res) => {
  try {
    const cities = await cityService.createCities(req.body);
    return res.status(StatusCodes.CREATED).json({
      data: cities,
      success: true,
      message: "Successfully created a cities",
      err: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      data: {},
      success: false,
      message: error.message,
      err: error.explanation,
    });
  }
};

const getAirportsOfaCity = async (req, res) => {
  try {
    const airports = await cityService.getAirportsOfaCity(req.params.id);
    return res.status(StatusCodes.OK).json({
      data: airports,
      success: true,
      message: "Successfully fetched all the airports related to the city",
      err: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      data: {},
      success: false,
      message: error.message,
      err: error.explanation,
    });
  }
};

module.exports = { create, destroy, get, update, getAll, createCities, getAirportsOfaCity };
