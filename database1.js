const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port=5000;
app.use(express.urlencoded({extended :false}));
mongoose.connect('mongodb://127.0.0.1:27017/databasee1',)
    .then(() => console.log('Connected to Database 1'))
    .catch((err) => console.error('Error connecting to Database 1:', err));
const schema1 = new mongoose.Schema({
    hostname:{
        type:String,
        required: true,
    },
    mobileNo:{
        type:String,
        required: true,
    },
    hostAddress:{
        type:String,
        required: true,
    },
    vehicleType:{
        type:String,
        required: true,
    },
    vehicleNo:{
        type:String,
        required: true,
    },
    seatsAvailable:{
        type:String,
        required: true,
    },
    source:{
        type:String,
        required: true,
    },
    destination:{
        type:String,
        required: true,
    },
});
const Model1 = mongoose.model('Model1', schema1);

// HTTP methods for Database 1

app.get('/database1/data', async (req, res) => {
    try {
      const data = await Model1.find({});
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch data from Database 1' });
    }
  });
  app.post('/database1/data', async (req, res) => {
    const body = req.body;
  
    // Validate required fields
    if (!body||!body.hostname||!body.MobileNumber||!body.address||!body.vehicleCompany||!body.Vehiclenumber||!body.TotalNumberofSeats||!body.source||!body.destination){
      return res.status(400).json({ error: 'Missing required fields' });
    }
    else{
      const newData = await Model1.create({
        hostname: body.hostname,
        MobileNumber: body.MobileNumber,
        address: body.address,
        vehicleCompany: body.vehicleCompany,
        Vehiclenumber: body.Vehiclenumber,
        TotalNumberofSeats: body.TotalNumberofSeats,
        source: body.source,
        destination: body.destination,
      });
      res.status(201).json(newData); 
    }
  });


  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

module.exports={
    Model1,
  };