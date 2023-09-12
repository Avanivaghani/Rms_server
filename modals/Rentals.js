const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
  property_type: { type: String },
  rental_adress: { type: String },
  rental_city: { type: String },
  rental_country: { type: String },
  rental_postcode: { type: Number },


  //   Add Rental owner
  rentalOwner_firstName: { type: String },
  rentalOwner_lastName: { type: String },
  rentalOwner_companyName: { type: String },
  rentalOwner_primaryEmail: { type: String },
  rentalOwner_phoneNumber: { type: Number },
  rentalOwner_homeNumber: { type: Number },
  rentalOwner_businessNumber: { type: Number },

  rentalOwner_operatingAccount: { type: String },
  rentalOwner_propertyReserve: { type: Number },

  rental_units: { type: String },
  rental_unitsAdress: { type: String },
  rental_soft: { type: String },
});

module.exports = mongoose.model("rentals", registerSchema);
