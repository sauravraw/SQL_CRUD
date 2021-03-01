const DummyData = require("../models/data.model");
const DataModel = require("../models/data.model");

// creating Database
// exports.createNewDB = (req, res) => {
//   console.log("Database Console");
//   DataModel.createDB((err, data) => {
//     if (err) {
//       res.send(err);
//       res.json({
//         status: true,
//         message: "DataBase created successfully",
//         data: data,
//       });
//     }
//   });
// };

// get all Data List
exports.getDataList = (req, res) => {
  // console.log("here all data list");
  DataModel.getAllData((err, data) => {
    // console.log("We are here");
    if (err) res.send(err);
    // console.log("Dummy Data", data);
    res.send(data);
  });
};

// get data by id
exports.getDataByID = (req, res) => {
  // console.log("get data by id");
  DataModel.getDataByID(req.params.id, (err, data) => {
    if (err) res.send(err);
    // console.log("Dummy Data By id", data);
    res.send(data);
  });
};

// create new data to the table
exports.createNewData = (req, res) => {
  const dummyReqData = new DummyData(req.body);
  // check null
  if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    console.log("Validate Data", req.body);
    DataModel.createData(dummyReqData, (err, data) => {
      if (err) {
        res.send(err);
        res.json({
          status: true,
          message: "Data added successfully",
          data: data,
        });
      }
    });
  }
};

// update data
exports.updateData = (req, res) => {
  const dummyReqData = new DummyData(req.body);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    // console.log("Validate Data");
    DataModel.updateData(req.params.id, dummyReqData, (err, data) => {
      if (err) {
        res.send(err);
        res.json({
          status: true,
          message: "Data updated successfully",
        });
      }
    });
  }
};

// delete data
exports.deleteData = (req, res) => {
  DummyData.deleteData(req.params.id, (err, data) => {
    if (err) {
      res.send(err);
      res.json({
        status: true,
        message: "Data Deleted Successfully",
      });
    }
  });
};

// delete DataBase
// exports.deteletDB = (req, res) => {
//   DummyData.deleteDataBase((err) => {
//     if (err) {
//       res.send(err);
//       res.json({
//         status: true,
//         message: "Database deleted Successfully",
//       });
//     }
//   });
// };
