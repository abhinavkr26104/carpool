const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port=5005;
app.use(express.urlencoded({extended :false}));
mongoose.connect('mongodb://127.0.0.1:27017/databasee2',)
    .then(() => console.log('Connected to Database 2'))
    .catch((err) => console.error('Error connecting to Database 2:', err));
    const schema1 = new mongoose.Schema({
        passengername:{
            type:String,
            required: true,
        },
        MobileNumber:{
            type:Number,
            required: true,
        },
        gender:{
            type:String,
            required: true,
        },
        email:{
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
    
    const Model2 = mongoose.model('Model2', schema1);
    
    // HTTP methods for Database 2
    
    app.get('/database2/data', async (req, res) => {
        try {
          const data = await Model2.find({});
          res.json(data);
        } catch (err) {
          res.status(500).json({ error: 'Failed to fetch data from Database 1' });
        }
      });
      app.post('/database2/data', async (req, res) => {
        const body = req.body;
      
        // Validate required fields
        if (!body||!body.passengername||!body.MobileNumber||!body.gender||!body.email||!body.source||!body.destination) {
          return res.status(400).json({ error: 'Missing required fields' });
        }
        else{
          const newData =await Model2.create({
            passengername: body.passengername,
            MobileNumber: body.MobileNumber,
            gender:body.gender,
            email:body.email,
            source: body.source,
            destination: body.destination,
          });
          res.status(201).json({message:'success'});
        }
      });
    
    
      app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
      });
module.exports={
        Model2,
      };