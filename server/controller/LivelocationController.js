const Livelocation = require("../model/Livelocation");
exports.getLiveLocation = async (req, res, next) => {
  let location;
  let updated_location;
  try {
    location = await Livelocation.find();
    updated_location = location[location.length - 1];
  } catch (error) {
    return next(error);
  }
  if (!location) {
    return res.status(500).json({ message: "no_data" });
  }
  return res.status(200).json({ updated_location });
};
exports.addLiveLocation = async (req, res, next) => {
  const { usr, lat, lng } = req.body;
  console.log(usr, lat, lng);
  if (lat === null || lng === null) {
    return res.status(200).json({
      success: false,
      message: "Cannot save location, either lat or lng is null",
    });
  }

  try {
    const location = new Livelocation({ usr, lat, lng });
    await location.save();
    return res.json({
      success: true,
      message: "Location saved successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};
exports.deleteAll = async (req, res, next) => {
  Livelocation.deleteMany({}, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("All documents removed from the collection");
    }
  });
};
