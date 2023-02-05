const { StatusCodes } = require("http-status-codes");

const validateCreateCity = (req, res, next) => {
  if (!req.body.name) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      data: {},
      message: "Please fill all the necessary details",
      err: "City name is missing in the request",
    });
  }
  next();
};
module.exports = { validateCreateCity };
