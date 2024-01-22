const { MongoClient } = require("mongodb");

const mongo_uri = process.env.MONGO_URI;
const dbName = "todo_app_db";

const client = new MongoClient(mongo_uri);
let _db = null;

const connectDB = async () => {
  try {
    if (_db) {
      return;
    }

    await client.connect();
    _db = client.db(dbName);
    console.log(
      "connected to db --> ",
      "mongodb://" +
        client.options.hosts[0].toString() +
        "/" +
        client.options.dbName
    );
  } catch (error) {
    _db = null;
    client.close();
    console.log("Error connecting db --> ", error);
    throw error;
  }
};

const getDBInstance = () => {
  if (!_db) {
    throw new Error("DB is not connected yet......");
  }

  return _db;
};

module.exports = {
  connectDB,
  getDBInstance
};
