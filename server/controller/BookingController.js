const BookingModel = require("../model/BookingModel");
const Carts = require("../model/Carts");

exports.getAllBooking = async (req, res, next) => {
  let allBooking;
  try {
    allBooking = await BookingModel.find();
  } catch (error) {
    return next(error);
  }
  if (!allBooking) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ allBooking });
};

exports.addBooking = async (req, res, next) => {
  const { name, cont_no, mail, date, reg_no, v_type, v_model, s_type } =
    req.body;
  let data;
  try {
    data = new Carts({
      name,
      cont_no,
      mail,
      date,
      reg_no,
      v_type,
      v_model,
      s_type,
    });
    data = await data.save();
  } catch (error) {
    return next(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  let data;
  try {
    data = await BookingModel.findById(req.params.id);
    await data.remove();
    res.send({ data: "deleted" });
  } catch (error) {
    return next(error);
  }
};
exports.deleteAll = async (req, res, next) => {
  BookingModel.deleteMany({}, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("All documents removed from the collection");
    }
  });
};
