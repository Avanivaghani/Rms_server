const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tenantsSchema = new Schema({
  property_type: { type: String },
  lease_type: { type: String },
  start_date: { type: Date },
  end_date: { type: Date },
  rent_cycle:{ type: String },
  amount: { type: Number },
  account:{ type: String },
  nextDue_date: { type: Date },
  memo:{ type: String },

  //security deposite

  Due_date: { type: Date },
  amount: { type: Number },


 
//   Add tenants

tenant_firstName: { type: String },
tenant_lastName: { type: String },
tenant_unitNumber:{ type: String },
tenant_mobileNumber: { type: Number },
tenant_workNumber: { type: Number },
tenant_homeNumber: { type: Number },
tenant_faxPhoneNumber: { type: Number },
tenant_email: { type: String },
alternate_email: { type: String },
tenant_residentStatus: { type: String },

// personal information
birth_date: { type: Date },
textpayer_id: { type: String },
comments: { type: String },

//Emergency contact

contact_name: { type: String },
relationship_tenants: { type: String },
email: { type: String },
emergency_PhoneNumber: { type: Number },

// add cosigner

cosigner_firstName: { type: String },
cosigner_lastName: { type: String },
cosigner_mobileNumber: { type: Number },
cosigner_workNumber: { type: Number },
cosigner_homeNumber: { type: Number },
cosigner_faxPhoneNumber: { type: Number },
cosigner_email: { type: String },
cosigner_alternateemail: { type: String },
cosigner_streetAdress: { type: String },
cosigner_city: { type: String },
cosigner_state: { type: String },
cosigner_zip: { type: String },
cosigner_country: { type: String },

// add recuring charge

amount: { type: Number },
account:{ type: String },
nextDue_date: { type: Date },
memo:{ type: String },
frequency:{ type: String },

//add one time charge 

amount: { type: Number },
account:{ type: String },
Due_date: { type: Date },
memo:{ type: String },


});

module.exports = mongoose.model("tenant", tenantsSchema);
