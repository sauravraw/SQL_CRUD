const { Router } = require("express");
const express = require("express");
const router = express.Router();

const dataController = require("../controllers/data.controller");

// create new Database
// router.get("/cdb", dataController.createNewDB);

// get all Data
router.get("/", dataController.getDataList);

// get data by id
router.get("/:id", dataController.getDataByID);

// create new Data
router.post("/", dataController.createNewData);

// update Data
router.put("/:id", dataController.updateData);

// delete Data
router.delete("/:id", dataController.deleteData);

// delete Database
// router.delete("/ddb", dataController.deteletDB);

module.exports = router;
