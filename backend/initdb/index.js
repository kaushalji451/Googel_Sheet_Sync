const mongoose = require('mongoose');
const user = require('../models/user');
const dummydata = require('./database');
mongoose.connect('mongodb://localhost:27017/googlesync', {
});

const savedata  = async()=>{
        const data = await user.insertMany(dummydata);
      console.log("this is result ", data);

}

savedata();