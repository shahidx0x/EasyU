const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  quan: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Carts", CartsSchema);
