const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

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
app.use(cors({
  origin: 'https://steffosteffo.github.io',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


const MONGO_URI='mongodb+srv://root:root@books-store-mern.ipulw5t.mongodb.net/steffo?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));
// Your API endpoints
app.get('/x2', (req, res) => {
  // Handle request and respond with data
  res.json({ message: 'Data from MongoDB' });
});

// Define Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/customers', require('./routes/customers'));
app.use('/api/invoices', require('./routes/invoices'));



// Start the server
app.listen(5000, () => {
  console.log('Server running on port 3000');
});
///NYTT ///////////////////////////////////SLUT
///NYTT ///////////////////////////////////SLUT
///NYTT ///////////////////////////////////SLUT
///NYTT ///////////////////////////////////SLUT