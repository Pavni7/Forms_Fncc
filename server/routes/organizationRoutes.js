const express = require('express');
const router = express.Router();
const Organization = require('../models/Organization');

// Create a new organization entry
router.post('/submit', async (req, res) => {
  try {
    const {
      organizationName,
      userMail,
      paymentDate,
      moneyPaid,
      status,
      amountAtOrganization,
      amountGivenMonthly,
      remainingBalance,
      interest,
    } = req.body;

    const organization = new Organization({
      organizationName,
      userMail,
      paymentDate,
      moneyPaid,
      status,
      amountAtOrganization,
      amountGivenMonthly,
      remainingBalance,
      interest,
    });

    await organization.save();
    res.status(201).json({ message: 'Form data submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch all organization entries
router.get('/', async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
