const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  spassword: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const User= mongoose.model("User", userSchema);

module.exports = User;