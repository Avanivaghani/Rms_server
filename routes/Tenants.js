var express = require("express");
var router = express.Router();
var Tenants = require("../modals/Tenants");


router.post("/tenant", async (req, res) => {
    try {

      var data = await Tenants.create(req.body);
      res.json({
        statusCode: 200,
        data: data,
        message: "Add Tenants Successfully",
      });
    } catch (error) {
      res.json({
        statusCode: 500,
        message: error.message,
      });
    }
  });

  router.get("/tenant", async (req, res) => {
  try {
    var data = await Tenants.find();
    res.json({
      data: data,
      statusCode: 200,
      message: "Read All Tenants",
    });
  } catch (error) {
    res.json({
      statusCode: 500,
      message: error.message,
    });
  }
});

router.delete("/tenant", async (req, res) => {
    try {
      let result = await Tenants.deleteMany({
        _id: { $in: req.body },
      });
      res.json({
        statusCode: 200,
        data: result,
        message: "Tenants Deleted Successfully",
      });
    } catch (err) {
      res.json({
        statusCode: 500,
        message: err.message,
      });
    }
  });

  
 //edit rentals 
 router.put("/tenant/:id", async (req, res) => {
  try {
    let result = await Tenants.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      statusCode: 200,
      data: result,
      message: "tenant Data Updated Successfully",
    });
  } catch (err) {
    res.json({
      statusCode: 500,
      message: err.message,
    });
  }
});

module.exports = router;