const FSMarking = require("../model/FSMarking");

exports.getFSMarking = async (req, res, next) => {
  let data;
  try {
    data = await FSMarking.find();
  } catch (error) {
    return next(error);
  }
  if (!data) {
    return res.status(500).json({ message: "no_data" });
  }
  return res.status(200).json({ data });
};
exports.addFSMarking = async (req, res, next) => {
  const { img, usr, lat, lng, exp, num } = req.body;
  if (lat === null || lng === null) {
    return res.status(200).json({
      success: false,
      message: "Cannot save location, either lat or lng is null",
    });
  }
  try {
    const data = new FSMarking({ img, usr, exp, num, lat, lng });
    await data.save();
    return res.json({
      success: true,
      message: "Marking saved successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};
exports.deleteAll = async (req, res, next) => {
  FSMarking.deleteMany({}, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("All documents removed from the collection");
    }
  });
};
