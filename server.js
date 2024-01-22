require("dotenv").config();
const { connectDB } = require("./src/DB/db");
const app = require("./src/app");
const PORT = process.env.PORT || 8080;

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
