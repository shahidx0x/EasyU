const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductCartSchema = new Schema({
  cus_mail: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  prod_name: {
    type: String,
    required: true,
  },
  prod_type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("ProductCart", ProductCartSchema);
