const express = require("express");
const { updateData, createData, getCount, getData } = require("../Controller/controller");
const router = express.Router();

router.post("/data/create", createData);
router.put("/data/:id", updateData);
router.get("/data", getData);
router.get("/get/count", getCount);

module.exports = router;