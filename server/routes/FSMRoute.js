const express = require("express");
const {
  addFSMarking,
  deleteAll,
  getFSMarking,
} = require("../controller/FSMController");

const fsm_router = express.Router();
fsm_router.post("/add/fsm", addFSMarking);
fsm_router.delete("/delete/all/fsm", deleteAll);
fsm_router.get("/get/fsm", getFSMarking);
module.exports = fsm_router;
