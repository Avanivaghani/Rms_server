var express = require("express");
var router = express.Router();
var AddStaffMember = require("../modals/AddStaffMember");


// Add staffmember
router.post("/addstaffmember", async (req, res) => {
    try {
  
      var data = await AddStaffMember.create(req.body);
      res.json({
        statusCode: 200,
        data: data,
        message: "Add staffmember Successfully",
      });
    } catch (error) {
      res.json({
        statusCode: 500,
        message: error.message,
      });
    }
  });


  // get staffmember

  router.get("/addstaffmember", async (req, res) => {
    try {
      var data = await AddStaffMember.find({});
      data.reverse();
      res.json({
        statusCode: 200,
        data: data,
        message: "Read All staffmember",
      });
    } catch (error) {
      res.json({
        statusCode: 500,
        message: error.message,
      });
    }
  });


// delete staffmember 
router.delete("/delete_staffmember", async (req, res) => {
    try {
      let result = await AddStaffMember.deleteMany({
        _id: { $in: req.body },
      });
      res.json({
        statusCode: 200,
        data: result,
        message: "staffmember Deleted Successfully",
      });
    } catch (err) {
      res.json({
        statusCode: 500,
        message: err.message,
      });
    }
  });

    //edit staffmember 
router.put("/staffmember/:id", async (req, res) => {
    try {
      let result = await AddStaffMember.findByIdAndUpdate(req.params.id, req.body);
      res.json({
        statusCode: 200,
        data: result,
        message: "staffmember Data Updated Successfully",
      });
    } catch (err) {
      res.json({
        statusCode: 500,
        message: err.message,
      });
    }
  });

module.exports = router;