const mongoose = require('mongoose');
const NewsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:false,
        
    },
    categories:{
        type:Array,
        required:false,
    }
},{timestamps:true});

module.exports = mongoose.model("News", NewsSchema); 