const express = require("express");
const {
  getAllBooking,
  addBooking,
  deleteAll,
  deleteOne,
} = require("../controller/BookingController");
const booking_router = express.Router();

booking_router.get("/all/booking", getAllBooking);
booking_router.post("/add/booking", addBooking);
booking_router.delete("/booking/remove/:id", deleteOne);
booking_router.delete("/booking/remove", deleteAll);

module.exports = booking_router;
