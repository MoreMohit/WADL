const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/crud', { useNewUrlParser: true, useUnifiedTopology: true });

// Create (POST)
app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// Read (GET)
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Update (PUT)
app.put('/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
});

// Delete (DELETE)
app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send('User deleted');
});

// Start Server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));

// http://localhost:3000/users
// POST /users – Create user

// GET /users – Read all users

// PUT /users/:id – Update user

// DELETE /users/:id – Delete user