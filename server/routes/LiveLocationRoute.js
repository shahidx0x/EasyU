const express = require("express");
const {
  getLiveLocation,
  addLiveLocation,
  deleteAll,
} = require("../controller/LivelocationController");
const location_router = express.Router();
location_router.get("/get/location", getLiveLocation);
location_router.post("/add/location", addLiveLocation);
location_router.delete("/delete/all/location", deleteAll);
module.exports = location_router;
