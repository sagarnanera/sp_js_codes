require("dotenv").config();
// const {db}  = require("./src/DB/db");
const { connectDB } = require("./src/DB/db");
// connectDB();
const app = require("./src/app");
const PORT = process.env.PORT || 8080;

// db.connect().then((val) => {
//   console.log("server", val);
//   app.listen(PORT, (err) => {
//     if (err) {
//       return console.log({ msg: "Error starting server", err });
//     }
//     console.log(`Server is up and running on : http://localhost:${PORT}/`);
//   });
// });

connectDB()
  .then(() =>
    app.listen(PORT, (err) => {
      // TODO : json schema validation for collections

      if (err) {
        return console.log({ msg: "Error starting server", err });
      }
      console.log(`Server is up and running on : http://localhost:${PORT}/`);
    })
  )
  .catch((err) =>
    console.log("Error connecting db.... Restart the server.....\n", err)
  );
