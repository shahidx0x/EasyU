const Carts = require("../model/Carts");

exports.getAllCarts = async (req, res, next) => {
  let allCarts;
  try {
    allCarts = await Carts.find();
  } catch (error) {
    return next(error);
  }
  if (!allCarts) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ allCarts });
};

exports.addCarts = async (req, res, next) => {
  const { name, price, mail, image, des, quan } = req.body;
  let data;
  try {
    data = new Carts({
      name,
      price,
      mail,
      image,
      des,
      quan,
    });
    data = await data.save();
  } catch (error) {
    return next(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  let data;
  try {
    data = await Carts.findById(req.params.id);
    await data.remove();
    res.send({ data: "deleted" });
  } catch (error) {
    return next(error);
  }
};
exports.deleteAll = async (req, res, next) => {
  Carts.deleteMany({}, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("All documents removed from the collection");
    }
  });
};
