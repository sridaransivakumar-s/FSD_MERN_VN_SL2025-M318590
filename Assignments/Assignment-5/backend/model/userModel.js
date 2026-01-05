const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    city:String
})
module.exports=mongoose.model("users",userSchema,"Users");
