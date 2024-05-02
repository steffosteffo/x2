// routes/products.js
const express = require('express');
const router = express.Router();
const  Product = require('../models/Product');


/* ORG
router.post('/', (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = product.save(); 
    res.json(savedProduct); 
    console.log('>>>>>>>>>>>>>>>>>>>>>savedProduct = ' + savedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
*/

// NEW
router.post('/', async (req, res) => { // Use async to allow await
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save(); // Wait for the save operation to complete
    console.log('Product saved:', savedProduct);

    // Send back the saved product with its _id
    res.json({ _id: savedProduct._id, ...savedProduct._doc }); // Include _id in the response
    console.log('----------savedProduct._id= ' + savedProduct._id)
    console.log('----------savedProduct= ' + savedProduct)
    // console.log('----------savedProduct._id=  ' + savedProduct._id)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


/*

// Route to handle POST request to create a new product
// Här sparar vi product i DB!!!! denna funk anänder POST MAN !!!!!!!!!!!!!!!!!!!!!!!!!!
router.post('/', (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = product.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
*/




////
// DESSA  NEDAN ANVÄNDS INTE I GUI -endast imp. här för att kunna användas senare :-) 
///

/*

// Route to handle Fetch (hämta) all products
router.get('/', async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to handle updating an existing product
router.put('/:id', async (req, res) => {
  const productsId = req.params.id;
  const { productname, antal, pris, summa, moms, tot } = req.body;

  try {
    // Find the product by ID
    const products = await Products.findById(productsId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    // Update Product properties
    product.name = productname;
    product.antal = antal;
    product.pris = pris;
    product.summa = summa;
    product.moms = moms;
    product.tot = tot;

    // Save the updated product
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


*/
module.exports = router;
