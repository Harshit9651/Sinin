const mongoose = require("mongoose");
const validator = require("validator");
const people_schema = new mongoose.Schema({
first_name:{
type:String,
required:true,
lowercase:true,

},

Last_name:{
    type:String,
    required:true,
    lowercase:true,  
},
phone_no:{
    type:Number,
   minlength:10,
   maxlength:12,
   required:true,
},
Email:{
    type:String,
    unique:true, required:true,

},
Address:{
    type:String,
    required:true,
}





})
const List = new mongoose.model("List",people_schema);
module.exports = List;

