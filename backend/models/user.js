const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : String,
    email : String,
    phone_no : Number,
    father_name : String,
    gender : String,
});

module.exports = mongoose.model('User', userSchema);