const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
//const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// OLD START///////////////////////
/*
app.use(cors());

const MONGO_URI='mongodb+srv://root:root@books-store-mern.ipulw5t.mongodb.net/steffo?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));
// Define Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/customers', require('./routes/customers'));
app.use('/api/invoices', require('./routes/invoices'));
// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

*/
// OLD END///////////////////////




///NYTT ///////////////////////////////////START 
///NYTT ///////////////////////////////////START 
///NYTT ///////////////////////////////////START 






// Allow requests from specific origin (e.g., GitHub Pages)
const corsOpt = {
  origin: 'http://213.112.62.28:300',
  credential: true
};
app.use(cors(corsOpt));


//app.use(cors());

/*
app.use(cors({
  origin: ['http://localhost:3000', 'https://steffosteffo.github.io', 'http://213.112.61.64:3000'], // Update with your frontend URLs
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // nytt 
}));
*/

const MONGO_URI='mongodb+srv://root:root@books-store-mern.ipulw5t.mongodb.net/steffo?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));
// Your API endpoints
app.get('/x2', (req, res) => {
  // Handle request and respond with data
  res.json({ message: 'Data from MongoDB!!!!!!!!!!!!!!!!!!' });
});



// Define Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/customers', require('./routes/customers'));
app.use('/api/invoices', require('./routes/invoices'));



// Define your route to fetch all customers
app.get('/api/customers', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});



///NYTT ///////////////////////////////////SLUT
///NYTT ///////////////////////////////////SLUT
///NYTT ///////////////////////////////////SLUT
///NYTT ///////////////////////////////////SLUT