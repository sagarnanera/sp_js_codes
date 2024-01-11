const app = require("./src/app");
const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {
  if (err) {
    return console.log({ msg: "Error starting server", err });
  }
  console.log(`Server is up and running on : http://localhost:${PORT}/`);
});
