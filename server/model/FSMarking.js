const { default: mongoose } = require("mongoose");

const FSMSchema = new mongoose.Schema({
  img: String,
  usr: String,
  exp: String,
  num: Number,
  lat: Number,
  lng: Number,
});
module.exports = mongoose.model("FSMarking", FSMSchema);
