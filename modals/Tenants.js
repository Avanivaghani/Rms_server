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

 
//   Add tenants

tenant_firstName: { type: String },
tenant_lastName: { type: String },
tenant_unitNumber:{ type: String },
tenant_phoneNumber: { type: Number },
tenant_email: { type: String },
tenant_residentStatus: { type: String },
});

module.exports = mongoose.model("tenant", tenantsSchema);
