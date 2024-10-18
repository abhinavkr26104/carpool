const mongoose = require('mongoose');
const express = require("express");

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/databas1')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const passengerSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  gender: String
});

const Passenger = mongoose.model('Passenger', passengerSchema);


app.get('/api/passengers', async (req, res) => {
  try {
    const passengers = await Passenger.find({});
    res.json(passengers);
  } catch (err) {
    console.error('Error fetching passengers:', err);
    res.status(500).json({ error: 'Failed to fetch passengers' });
  }
});


app.post('/api/passengers', async (req, res) => {
    const body=req.body;
    if (!body.name || !body.mobile || !body.email || !body.gender) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const passenger = await new Passenger.create({
        name:body.name,
        mobile:body.mobile,
        email:body.email,
        gender:body.gender
    });
    console.log(passenger);
    res.status(201).json({ message: 'Passenger registered successfully' });
});


app.listen(3001, () => {
  console.log('Server listening on port 3000');
});