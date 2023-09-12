var express = require("express");
var router = express.Router();
var Rentals = require("../modals/Rentals");

router.post("/rentals", async (req, res) => {
  try {
    // var count = await Rentals.count();
    // function pad(num) {
    //   num = num.toString();
    //   while (num.length < 2) num = "0" + num;
    //   return num;
    // }
    var data = await Rentals.create(req.body);
    res.json({
      statusCode: 200,
      data: data,
      message: "Add Rentals Successfully",
    });
  } catch (error) {
    res.json({
      statusCode: 500,
      message: error.message,
    });
  }
});

router.get("/rentals", async (req, res) => {
  try {
    var data = await Rentals.find();
    res.json({
      data: data,
      statusCode: 200,
      message: "Read All Rentals",
    });
  } catch (error) {
    res.json({
      statusCode: 500,
      message: error.message,
    });
  }
});

router.delete("/rentals", async (req, res) => {
  try {
    let result = await Rentals.deleteMany({
      _id: { $in: req.body },
    });
    res.json({
      statusCode: 200,
      data: result,
      message: "Rentals Deleted Successfully",
    });
  } catch (err) {
    res.json({
      statusCode: 500,
      message: err.message,
    });
  }
});

module.exports = router;
