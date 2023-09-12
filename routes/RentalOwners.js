var express = require("express");
var router = express.Router();
var RentalOwners = require("../modals/RentalOwners");


//add rental owner
router.post("/rentalowner", async (req, res) => {
    try {

      var data = await RentalOwners.create(req.body);
      res.json({
        statusCode: 200,
        data: data,
        message: "Add RentalOwners Successfully",
      });
    } catch (error) {
      res.json({
        statusCode: 500,
        message: error.message,
      });
    }
  });

  // get rental owner
   router.get("/rentalowner", async (req, res) => {
  try {
    var data = await RentalOwners.find();
    res.json({
      data: data,
      statusCode: 200,
      message: "Read All RentalOwners",
    });
  } catch (error) {
    res.json({
      statusCode: 500,
      message: error.message,
    });
  }
});

//delete rental owner
router.delete("/delete_rentalowner", async (req, res) => {
    try {
      let result = await RentalOwners.deleteMany({
        _id: { $in: req.body },
      });
      res.json({
        statusCode: 200,
        data: result,
        message: "RentalOwners Deleted Successfully",
      });
    } catch (err) {
      res.json({
        statusCode: 500,
        message: err.message,
      });
    }
  });

 //edit staffmember 
router.put("/rentalowner/:id", async (req, res) => {
    try {
      let result = await RentalOwners.findByIdAndUpdate(req.params.id, req.body);
      res.json({
        statusCode: 200,
        data: result,
        message: "RentalOwners Data Updated Successfully",
      });
    } catch (err) {
      res.json({
        statusCode: 500,
        message: err.message,
      });
    }
  });


module.exports = router;