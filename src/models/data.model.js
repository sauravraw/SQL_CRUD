var dbCon = require("../../config/db.config");

var DummyData = function (data) {
  this.first_name = data.first_name;
  this.last_name = data.last_name;
};

// create Database
// DummyData.createDB = (result) => {
//   dbCon.query("CREATE DATABASE IF NOT EXISTS testDatabase", (err, res) => {
//     if (err) {
//       console.log("Database can't be created");
//       result(null, err);
//       console.log(err);
//     } else {
//       console.log("Database Created Successfully...");
//       result(null, res);
//       console.log(res);
//     }
//   });
// };

// get all DummyData
DummyData.getAllData = (result) => {
  dbCon.query("SELECT * FROM dummytable", (err, res) => {
    if (err) {
      console.log("Error while Fetching Data Successfully", err);
      result(null, err);
    } else {
      console.log("Data Fetched Succesffully");
      result(null, res);
    }
  });
};

// get data by id from DB
DummyData.getDataByID = (id, result) => {
  dbCon.query(`Select * from dummytable where id=?`, id, (err, res) => {
    if (err) {
      console.log("Error while fetching Data by Id", err);
      result(null, err);
    } else {
      console.log("Data fetched Successfully");
      result(null, res);
    }
  });
};

// create new Data
DummyData.createData = (reqData, result) => {
  dbCon.query("INSERT INTO dummytable SET ?", reqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      result(null, err);
    } else {
      console.log("Data created Successfully");
      result(null, res);
    }
  });
};

// update data
DummyData.updateData = (id, reqData, result) => {
  dbCon.query(
    `UPDATE dummytable SET first_name=?, last_name=? where id =?`,
    [reqData.first_name, reqData.last_name, id],
    (err, res) => {
      if (err) {
        console.log("Error While updating the data");
        result(null, err);
      } else {
        console.log("Data Updated Successfully");
        result(null, res);
      }
    }
  );
};

// Delete data
DummyData.deleteData = (id, result) => {
  dbCon.query("DELETE FROM dummytable WHERE id=?", [id], (err, res) => {
    if (err) {
      console.log("Error while deleting the data");
      result(null, err);
    } else {
      console.log("Data deleted Successfully");
      result(null, res);
    }
  });
};

// Delete Database
// DummyData.deleteDB = (result) => {
//   dbCon.query("DROP DATABASE dummyDatabase", (err, res) => {
//     if (err) {
//       console.log("DataBase can't be deleted");
//       result(null, err);
//     } else {
//       console.log("Database deleted Successfully");
//       result(null, res);
//     }
//   });
// };

module.exports = DummyData;
