const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');


// Route to handle POST request to create a new customer
//här sparar vi customer i DB!!!! denna funk anänder POST MAN !!!!!!!!!!!!!!!!!!!!!!!!!!
router.post('/', (req, res) => {
  try {
  const invoice = new Invoice(req.body);
    const savedInvoice = invoice.save();
    res.json(savedInvoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }








  
// Mock database or data store (replace with actual database integration)
/*
let invoices = [
  { id: 1, customer: 'Customer A', amount: 100 },
  { id: 2, customer: 'Customer B', amount: 150 },
  { id: 3, customer: 'Customer C', amount: 200 }
];


// GET all invoices
router.get('/', (req, res) => {
  res.json(invoices);
});

// POST a new invoice
router.post('/', (req, res) => {
  try{
  const { customer, amount } = req.body;
  const newInvoice = { id: invoices.length + 1, customer, amount };
  const savedInvoice = newInvoice.save();
  res.json(savedInvoice);
  res.status(201).json(newInvoice);
  } catch(error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT (update) an existing invoice by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { customer, amount } = req.body;
  const index = invoices.findIndex(inv => inv.id === parseInt(id));
  if (index !== -1) {
    invoices[index] = { ...invoices[index], customer, amount };
    res.json(invoices[index]);
  } else {
    res.status(404).json({ message: `Invoice with ID ${id} not found` });
  }
});

// DELETE an existing invoice by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = invoices.findIndex(inv => inv.id === parseInt(id));
  if (index !== -1) {
    const deletedInvoice = invoices.splice(index, 1)[0];
    res.json(deletedInvoice);
  } else {
    res.status(404).json({ message: `Invoice with ID ${id} not found` });
  }

  */
});

module.exports = router;
