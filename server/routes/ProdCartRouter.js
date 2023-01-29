const express = require("express");
const {
  addCart,
  viewCart,
  deleteOne,
} = require("../controller/ProductCartController");
const prodcart = express.Router();
prodcart_router.get("/usercarts", viewCart);
prodcart_router.post("/addusercarts", addCart);
prodcart_router.delete("/usercarts/remove/:id", deleteOne);

module.exports = cusinfo_router;
