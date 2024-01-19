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

    // return _db;
  } catch (error) {
    _db = null;
    client.close();
    console.log("Error connecting db --> ", error);
    throw error;
  }
};

const getDBInstance = () => {
  if (!_db) {
    // console.log(_db);
    throw new Error("DB is not connected yet......");
  }

  return _db;
};

module.exports = {
  connectDB,
  getDBInstance
};

// DUMP

// MongoClient.connect(mongo_uri, (err, client) => {
//   if (err) {
//     console.log(err);
//     // throw err;
//   }
//   db = client.db(dbName);
//   console.log(
//     "connected to db --> ",
//     "mongodb://" +
//       client.options.hosts[0].toString() +
//       "/" +
//       client.options.dbName
//   );
//   return cb(err);
// });

// connectDBserver: (cb) => {
//   console.log("here up");
//   MongoClient.connect(mongo_uri, (err, client) => {
//     // if (err) {
//     //   console.log(err);
//     //   // throw err;
//     // }
//     console.log("here");
//     db = client.db(dbName);
//     console.log(
//       "connected to db --> ",
//       "mongodb://" +
//         client.options.hosts[0].toString() +
//         "/" +
//         client.options.dbName
//     );
//     // return cb(err);
//     cb(err)
//   });
// },

// connectToServer: function( callback ) {
//   MongoClient.connect( mongo_uri, function( err, client ) {
//     _db  = client.db(dbName);
//     console.log("here",client);
//     return callback( err );
//   } );
// },

// db.js

// class Database {
//   #client;
//   _db;

//   constructor() {
//     this.#client = new MongoClient(mongo_uri);
//     this._db = null;
//   }

//   async connect() {
//     try {
//       if (!this._db) {
//         await this.#client.connect();
//         this._db = this.#client.db(dbName);
//         console.log("Connected to the database");
//       }
//       return this._db;
//     } catch (error) {
//       this._db = null;
//       this.#client.close();
//       console.log("Error connecting to the database", error);
//       throw error;
//     }
//   }

//   static getDBInstance() {
//     if (!Database._db) {
//       throw new Error("DB is not connected yet......");
//       // this.connect()
//     }
//     return Database._db;
//   }
// }

// module.exports = { Database, db: new Database() };
