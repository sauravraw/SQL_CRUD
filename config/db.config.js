const mysql = require("mysql");
const dotenv = require("dotenv");

// env declareation

dotenv.config({
  path: "./config.env",
});

// mysql connection

// const dbCon = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "raw123",
//   database: "dummyDatabase",
// });

// const dbCon = require("dbCon");

const dbCon = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATA,
});

// console.log(dbCon);

dbCon.connect((err) => {
  if (!err) {
    console.log("Connected Successfully");
  } else {
    console.error("Connection Failed");
  }
});

module.exports = dbCon;
