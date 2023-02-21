const { default: mongoose } = require("mongoose");

const locationSchema = new mongoose.Schema({
  usr: String,
  lat: Number,
  lng: Number,
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Livelocation", locationSchema);
