const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: String,
  description: String,
  price: Number,
  sellerId: Number,


})

let Post = mongoose.model('Post', postSchema);

module.exports = Post;

