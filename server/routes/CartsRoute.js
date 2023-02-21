const express = require("express");
const {
  getAllCarts,
  addCarts,
  deleteOne,
  deleteAll,
} = require("../controller/CartsController");
const carts_router = express.Router();

carts_router.get("/all/carts", getAllCarts);
// cusinfo_router.get("/cusinfo/:id", findOneCus);
carts_router.post("/add/carts", addCarts);
// cusinfo_router.patch("/cusinfo/update/:id", updateOne);
carts_router.delete("/carts/remove/:id", deleteOne);
carts_router.delete("/carts/remove", deleteAll);

module.exports = carts_router;
