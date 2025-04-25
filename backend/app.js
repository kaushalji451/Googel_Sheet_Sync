const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port =  8080;
const User = require('./models/user')
const appendData = require('./function/GoogleSync');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

 //get all users and append data to them
app.get("/",async (req, res) => {

  const data = await User.find({});  
  
  let result  = await appendData(data); 
  
  let sheetUrl = `https://docs.google.com/spreadsheets/d/${process.env.SPREADSHEET_ID}/edit#gid=0`;

  if (result === true) {
    res.status(200).json({ message: "Data appended successfully!" ,data :sheetUrl});
  } else {
    res.status(500).json({ message: "Failed to append data." });
  }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});