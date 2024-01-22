const { JsonWebTokenError, TokenExpiredError } = require("jsonwebtoken");

// custom error
class customError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || 500;
  }
}

//  ErrorHandlers
const notFoundHandler = (req, res, next) => {
  return res
    .status(404)
    .json({ success: false, message: "Not found, Check the URL properly !!!" });
};

const invalidJsonHandler = (err, req, res, next) => {
  // console.log("here in json payload error :", err);

  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid JSON payload" });
  }

  next(err);
};

// global error handler
const ErrorHandler = (err, req, res, next) => {
  console.log("here in global error :", err);

  if (err instanceof customError) {
    return res
      .status(err.statusCode)
      .json({ success: false, message: err.message });
  }

  if (err instanceof JsonWebTokenError || err instanceof TokenExpiredError) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired token..." });
  }

  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  return res.status(errStatus).json({
    success: false,
    message: errMsg
  });
};

module.exports = {
  customError,
  notFoundHandler,
  ErrorHandler,
  invalidJsonHandler
};
