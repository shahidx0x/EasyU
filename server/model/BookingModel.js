const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingModelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cont_no: {
    type: Number,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  reg_no: {
    type: Number,
    required: true,
  },
  v_type: {
    type: String,
    required: true,
  },
  v_model: {
    type: String,
    required: true,
  },
  s_type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("BookingModel", BookingModelSchema);
