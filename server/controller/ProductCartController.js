const ProductCart = require("../model/ProductCart");
const ObjectId = require("mongodb").ObjectId;
exports.addCart = async (req, res, next) => {
  const { cus_mail, prod_name, prod_type, price, image } = req.body;
  let data;
  try {
    data = new ProductCart({
      cus_mail,
      image,
      prod_name,
      prod_type,
      price,
    });
    data = await data.save();
  } catch (error) {
    return next(error);
  }
};
exports.viewCart = async (req, res, next) => {
  let data;
  try {
    data = await ProductCart.find();
  } catch (error) {
    return next(error);
  }
  if (!data) {
    return res.status(500).json({ message: "Cart is Empty !" });
  }
  return res.status(200).json({ data });
};
exports.deleteOne = async (req, res, next) => {
  let data;
  try {
    data = await ProductCart.findById(req.params.id);
    await data.remove();
    res.send({ data: "deleted" });
  } catch (error) {
    return next(error);
  }
};
