const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id : Number,
    name : String,
    email : String,
    phoneNo : Number,
    gender : String,
    appDate : String,
    astroAmount : Number,
    astrologyType: String,
    country : String,
    date  : String,
    nationality : String,
    organization : String,
    place : String,
    poojaAmount: Number,
    poojaType : String,
    reason : String,
    shraddhaType : String,
    time :String,
    vastuAmount: Number,
    vastuCount: Number,
    vastuType : String,
    yogaAmount: Number,
    yogaType : String,

});

module.exports = mongoose.model('User', userSchema);