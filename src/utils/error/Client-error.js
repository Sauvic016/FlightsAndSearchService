const { StatusCodes } = require("http-status-codes");

class ClientError extends Error {
  constructor(
    name = "ClientError",
    message = "Sorry, the requested resource could not be found. Please check the URL and try again.",
    explanation = "Resource does not exist for this request",
    statusCode = StatusCodes.BAD_REQUEST
  ) {
    super();
    this.message = message;
    this.explanation = explanation;
    this.name = name;
    this.statusCode = statusCode;
  }
}

module.exports = ClientError;
