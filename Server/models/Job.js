const mongoose = require('mongoose')
const JobSchema = new mongoose.Schema({
    job_title:{
        type:String,
        required:true,
    },
    company_name:{
        type:String,
        required:true
    },
    deadline:{ 
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    team_photo:{
        type:String,
        required:false,
    },
    logo:{ 
        type:String, 
        required:false,
    },
    description:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
        required:true
    },
    experience:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model("Job", JobSchema); 