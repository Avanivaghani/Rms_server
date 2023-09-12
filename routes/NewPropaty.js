var express = require("express");
var router = express.Router();
var NewProparty = require("../modals/NewProparty");



router.post("/newproparty", async (req, res) => {
    try {
  
      var data = await NewProparty.create(req.body);
      res.json({
        statusCode: 200,
        data: data,
        message: "Add newproparty Successfully",
      });
    } catch (error) {
      res.json({
        statusCode: 500,
        message: error.message,
      });
    }
  });

// // Add proparty
// router.post("/newproparty", async (req, res) => {
//   try {
//     let findproperty_type = await NewProparty.findOne({
//       property_type: req.body.property_type,
      
//     });
//     if (!findproperty_type) {
//       var count = await NewProparty.count();
//       function pad(num) {
//         num = num.toString();
//         while (num.length < 2) num = "0" + num;
//         return num;
//       }
//       req.body["propertyId"] = pad(count + 1);
//       var data = await NewProparty.create(req.body);
//       res.json({
//         statusCode: 200,
//         data: data,
//         message: "Add property Successfull",
//       });
//     } else {
//       res.json({
//         statusCode: 500,
//         // message: `${req.body.property_type} Proparty Allready Added`,
//       });
//     }
//   } catch (error) {
//     res.json({
//       statusCode: false,
//       message: error.message,
//     });
//   }
// });



//find proparty type
router.get("/find_propartytype", async (req, res) => {
  try {
    var data = await NewProparty.find().select("property_type")
    res.json({
      statusCode: 200,
      data: data,
      message: "read all propartytype",
    });
  } catch (error) {
    res.json({
      statusCode: 500,
      message: error.message,
    });
  }
});




  // get proparty
router.get("/newproparty", async (req, res) => {
  try {
    var data = await NewProparty.find({});
    data.reverse();
    res.json({
      statusCode: 200,
      data: data,
      message: "Read All newproparty",
    });
  } catch (error) {
    res.json({
      statusCode: 500,
      message: error.message,
    });
  }
});


// delete proparty type
  router.delete("/newproparty", async (req, res) => {
    try {
      let result = await NewProparty.deleteMany({
        _id: { $in: req.body },
      });
      res.json({
        statusCode: 200,
        data: result,
        message: "proparty Deleted Successfully",
      });
    } catch (err) {
      res.json({
        statusCode: 500,
        message: err.message,
      });
    }
  });

  //edit proparty type Data
router.put("/proparty-type/:id", async (req, res) => {
  try {
    let result = await NewProparty.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      statusCode: 200,
      data: result,
      message: "Proparty_type Data Updated Successfully",
    });
  } catch (err) {
    res.json({
      statusCode: 500,
      message: err.message,
    });
  }
});
  

module.exports = router;