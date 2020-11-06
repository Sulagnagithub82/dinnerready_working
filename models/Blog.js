const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const BlogSchema = new Schema({
  // _id: {
  //   type: 
  // },
  title: {
    type: String,
  },
  message: {
    type: String,
  },
},);
module.exports = Blog = mongoose.model("blog", BlogSchema);
// const Blog = mongoose.model('Blog',{
//   title: {type:String},
//   message : {type:String},
// })
// module.exports =  Blog 
