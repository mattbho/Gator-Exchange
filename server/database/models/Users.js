// User Schema
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
  username:{ type: String, unique: true, required: true},
  password: { type: String, unique: false, require: true}
});

UserSchema.methods = {
  checkPassword: inputPassword =>{
    return bcrypt.compareSync(inputPassword,this.local.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
}
//Calls this function before a new user is saved into the database. It checks
// for empty password field, and it also hashes the password.
UserSchema.pre('save', next => {
  if(!this.password) {
    console.log("No Password Provided.")
    next();
  } else {
    this.password = this.hashPassword(this.password);
  }
})


module.exports = mongoose.model("Users", UserSchema);