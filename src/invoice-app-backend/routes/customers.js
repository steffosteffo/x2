// routes/customers.js
const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');



router.post('/', (req, res) => {
  try {
    const customer = new Customer(req.body);
    const savedCustomer = customer.save();
    res.json(savedCustomer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to handle Fetch (hämta) all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to handle updating an existing customer
router.put('/:id', async (req, res) => {
  const customerId = req.params.id;
  const { name, email, phone, hemligt } = req.body;

  try {
    // Find the customer by ID
    const customer = await Customer.findById(customerId);

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Update customer properties
    customer.name = name;
    customer.email = email;
    customer.phone = phone;
    customer.hemligt = hemligt;

    // Save the updated customer
    const updatedCustomer = await customer.save();
    res.json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
