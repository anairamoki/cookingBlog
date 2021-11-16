const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CookingBlogSchema = new Schema({
  name:{
    type: String,
    required: 'This is required.'
  },
  image:{
    type: String,
    required: 'This is required.'
  },
})

module.exports = mongoose.model('CookingBlog', CookingBlogSchema);