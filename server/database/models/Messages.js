var mongoose = require("mongoose");

var messageSchema = mongoose.Schema({
  text: String,
  subject: String,
  createdAt: {type: Date, default: Date.now},
  username: String
})


module.exports = mongoose.model("Messages", messageSchema);