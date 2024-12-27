const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  organizationName: { type: String, required: true },
  userMail: { type: String, required: true },
  paymentDate: { type: Date, required: true },
  moneyPaid: { type: String, required: true },
  status: { type: String, required: true },
  amountAtOrganization: { type: Number, required: true },
  amountGivenMonthly: { type: Number, required: true },
  remainingBalance: { type: Number, required: true },
  interest: { type: Number, required: true },
});

const Organization = mongoose.model('Organization', organizationSchema);
module.exports = Organization;
