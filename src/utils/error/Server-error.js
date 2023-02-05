const { StatusCodes } = require("http-status-codes");

class ServerError extends Error {
  constructor(message = "Something went wrong in the Server", explanation = "Logical Issue Found") {
    super();
    this.message = message;
    this.explanation = explanation;
    this.name = "ServerError";
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  }
}
module.exports = ServerError;
