const mongoose=require("mongoose");
const express=require("express");
const Move1=require("../database1/database1");
const Move2=require("../database2/database2");
const app=express();
mongoose.connect('mongodb://127.0.0.1:27017/commondb')
    .then(() => console.log('Connected to Common Data Database'))
    .catch((err) => console.error('Error connecting to Common Data Database:', err));
  
  // Define the schema for common data
  const commonSchema = new mongoose.Schema({
    startLocation: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
  });
  
  const CommonData = mongoose.model('CommonData', commonSchema);
  
  
  // Find common data and store it in the third database
  app.get('/common-data', async (req, res) => {
    try {
      const data1 = await Move1.find({});
      const data2 = await Move2.find({});
  
      const commonData = data1.filter((item1) => {
        return data2.some((item2) => item1.startLocation === item2.startLocation && item1.destination === item2.destination); // Find common data based on startLocation and destination
      });
  
      // Store common data in the third database
      await CommonData.insertMany(commonData);
  
      res.json({ message: 'Common data stored successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to find or store common data' });
    }
  });
  
  // Start the server
  app.listen(8000, () => {
    console.log(`Server listening on port 8000`);
  });

