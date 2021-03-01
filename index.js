const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Configure dotenv
dotenv.config({
  path: "./config.env",
});

//  Create express app
const app = express();

// Setup the server port
const port = process.env.PORT || 5000;

// parse request data content
app.use(bodyParser.urlencoded({ extended: false }));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
// app.get("/", (req, res) => {
//   res.send("Testing Routes");
// });

// import data routes
const dataRoutes = require("./src/routes/data.route");

// create employee route
app.use("/", dataRoutes);

//  listen to the port
app.listen(port, () => {
  console.log(`Server running on: ${port}`);
});
