// import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
const mongodb = require("mongodb");
import path from 'path';
// import history from 'connect-history-api-fallback';
const url="mongodb://127.0.0.1:27017";
// const client = new mongodb.MongoClient(url);

// server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const Stripe = require('stripe');

const app = express();
app.use(express.json());


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/vue-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

// define the COE schema
const coeSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String
}, { timestamps: true });

// define the COE model
const COE = mongoose.model('COD', coeSchema);

// define the API endpoint to save the order
app.post('/api/orders', async (req, res) => {
  try {
    const order = new COE(req.body);
    console.log(order);
    await order.save();
    res.status(201).send('Order saved successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

// Registration endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // alert('User already exists');
      return res.status(409).json({ error: 'User already exists' });

    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Registration failed' });
  }
});


// Login endpoint
app.post('/api/', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // TODO: Generate and send JWT token for authentication

    return res.status(200).json({ message: 'Login successful thank you ' });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Login failed' });
  }
});





// const app = express();
app.use(bodyParser.json()); //it is a middleware function that is used to parse incoming HTTP request bodies in JSON format.
app.use('/images', express.static(path.join(__dirname, '../assets')));

// app.use(express.static(path.resolve(__dirname, '../dist'), { maxAge: '1y', etag: false }));
// app.use(history());

// get products data from mongodb
app.get('/api/products', async (req, res) => {
  const  client = new mongodb.MongoClient(url);
   await client.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
  const db = client.db('vue-db');
  const products = await db.collection('products').find({}).toArray();
  res.status(200).json(products);
  client.close();
});

//get cart added items endpoint
app.get('/api/users/:userId/cart', async (req, res) => {
  const { userId } = req.params;
  const client = await MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
  const db = client.db('vue-db');  
  const user = await db.collection('users').findOne({ id: userId });
  if (!user) return res.status(404).json('Could not find user!');
  const products = await db.collection('products').find({}).toArray();
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map(id =>
    products.find(product => product.id === id));
  res.status(200).json(cartItems);
  client.close();
});

// product detail endpoint
app.get('/api/products/:productId', async (req, res) => {
    const { productId } = req.params;
    const client = await MongoClient.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
    );
    const db = client.db('vue-db');
    const product = await db.collection('products').findOne({ id: productId });
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json('Could not find the product!');
    }
    client.close();
});

// adding product in cart endpoint
app.post('/api/users/:userId/cart', async (req, res) => {
  const { userId } = req.params;
  const { productId } = req.body;
  const client = await MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
  const db = client.db('vue-db');
  await db.collection('users').updateOne({ id: userId }, {
    $addToSet: { cartItems: productId },
  });
  const user = await db.collection('users').findOne({ id: userId });
  const products = await db.collection('products').find({}).toArray();
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map(id =>
    products.find(product => product.id === id));
  res.status(200).json(cartItems);
  client.close();
});

// removing cart endp
app.delete('/api/users/:userId/cart/:productId', async (req, res) => {
  
  const { userId, productId } = req.params;
  const client = await MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
  const db = client.db('vue-db');

  await db.collection('users').updateOne({ id: userId }, {
    $pull: { cartItems: productId },
  });
  const user = await db.collection('users').findOne({ id: userId });
  const products = await db.collection('products').find({}).toArray();
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map(id =>
    products.find(product => product.id === id));

  res.status(200).json(cartItems);
  client.close();
});





// /////////////////////////////////////////////



// connect to the "vue-db" database
// mongoose.connect('mongodb://localhost/vue-db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });








// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../dist/index.html'));
// });


// payment endpoint


// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/vue-db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB payment');
// });

// // Define the Payment model
// const paymentSchema = new mongoose.Schema({
//   paymentMethodId: String,
//   amount: Number,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });
// const Payment = mongoose.model('payments', paymentSchema);

// // Configure Stripe
// const stripe = Stripe('sk_test_51MyH1dSBu5LnuvxCY1ULe586A67Qt4teteuIwDklrau53SS02ecG9rw7FvW5EaVyRDUMndTGlx1f7aUK1F6nto5M00zyZS5EKA'); // Replace with your Stripe secret key

// // Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Endpoint for processing payment
// app.post('/api/payment/', async (req, res) => {
//   const { paymentMethodId, amount } = req.body;

//   try {
//     // Create a PaymentIntent with the payment method and amount
//     const paymentIntent = await stripe.paymentIntents.create({
//       payment_method: paymentMethodId,
//       amount: amount,
//       currency: 'usd', // Replace with your preferred currency
//       confirm: true,
//     });

//     // Create a new payment in the database
//     const payment = new Payment({
//       paymentMethodId: paymentMethodId,
//       amount: amount,
//     });
//     await payment.save();

//     // Return success response
//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error processing payment:', error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// Import required packages




//paypal''''''''''''''''''''''''''

// const paypal = require('paypal-rest-sdk');

// // Connect to MongoDB

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // Define Payment schema
// const PaymentSchema = new mongoose.Schema({
//   amount: Number,
//   currency: String,
//   description: String,
//   status: String,
//   created_at: { type: Date, default: Date.now }
// });
// const Payment = mongoose.model('Payment', PaymentSchema);

// // Set up body-parser middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Configure PayPal SDK with API credentials
// paypal.configure({
//   mode: 'sandbox',
//   client_id: 'ARK5rB5NdWCDEap1TLSPo7iYUgI1ppV7JWqqj7Cs26dVkGNYbqLDSeJcTtAHleIvmNf_TKEGr1bega0s',
//   client_secret: 'EOfWzAcC0RwRhc8HxEY4UzLipLL--qAyC8spbJoJK8kZ1xWEVPlPT_mtrSK5pr_inNk8p8jkIMO3pYjC'
// });

// // Create PayPal payment
// app.post('/api/payment/create', (req, res) => {
//   const { amount, currency, description } = req.body;

//   const create_payment_json = {
//     intent: 'sale',
//     payer: {
//       payment_method: 'paypal'
//     },
//     redirect_urls: {
//       return_url: 'http://localhost:8000payment/success',
//       cancel_url: 'http://localhost:8000/payment/cancel'
//     },
//     transactions: [{
//       item_list: {
//         items: [{
//           name: description,
//           sku: '001',
//           price: amount,
//           currency,
//           quantity: 1
//         }]
//       },
//       amount: {
//         currency,
//         total: amount
//       },
//       description
//     }]
//   };

//   paypal.payment.create(create_payment_json, (error, payment) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send({ error: 'Could not create PayPal payment.' });
//     } else {
//       const newPayment = new Payment({
//         amount,
//         currency,
//         description,
//         status: 'created'
//       });

//       newPayment.save((err, paymentDoc) => {
//         if (err) {
//           console.error(err);
//           res.status(500).send({ error: 'Could not save payment to database.' });
//         } else {
//           for (let i = 0; i < payment.links.length; i++) {
//             if (payment.links[i].rel === 'approval_url') {
//               res.json({ approvalUrl: payment.links[i].href });
//             }
//           }
//         }
//       });
//     }
//   });
// });

// // Execute PayPal payment
// app.get('/api/payment/execute', (req, res) => {
//   const { paymentId, payerId } = req.query;

//   Payment.findOneAndUpdate(
//     { 'id': paymentId },
//     { 'status': 'completed' },
//     { projection: { 'id': 1 } }, 
//     (err,payment) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send({ error: 'Could not update payment status in database.' });
//       } else {
//         const execute_payment_json = {
//           payer_id: payerId,
//           transactions: [{
//             amount: {
//               currency: 'USD',
//               total: '25.00'
//             }
//           }]
//         };

//         paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
//           if (error) {
//             console.error(error);
//             res.status(500).send({ error: 'Could not execute PayPal payment.' });
//           } else {
//             res.redirect('http://localhost:8080/payment/success');
//           }
//         });
//       }
//     }
//   );
// });


// shre 'stripe'''''''''''''''''''''''''''''''''''''''''


const stripe = require('stripe')('sk_test_51MyH1dSBu5LnuvxCY1ULe586A67Qt4teteuIwDklrau53SS02ecG9rw7FvW5EaVyRDUMndTGlx1f7aUK1F6nto5M00zyZS5EKA')

app.use(bodyParser.json())

app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    })

    res.send({
      client_secret: paymentIntent.client_secret
    })
  } catch (error) {
    console.error(error.message)
    res.status(500).send({
      error: {
        message: 'An error occurred while creating the PaymentIntent.'
      }
    })
  }
})

app.post('/store-transaction', (req, res) => {
  // Store the transaction in your MongoDB database
  const { paymentIntentId, amount, currency, customerEmail } = req.body
  console.log(`Storing transaction with paymentIntentId: ${paymentIntentId}, amount: ${amount}, currency: ${currency}, customerEmail: ${customerEmail}`)
  res.sendStatus(200)
})



app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});

