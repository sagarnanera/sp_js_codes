const { ObjectId } = require("mongodb");
const { customError } = require("../handlers/error.handler");

const convertToObjectId = (_id) => {
  if (!ObjectId.isValid(_id)) {
    throw new customError("Invalid object id...", 400);
  }

  return new ObjectId(_id);
};

module.exports = convertToObjectId;
