const mongoose = require("mongoose");

//format of database
//user timestamps for create time in database
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    age: { type: Number },
  },
  { timestamps: true }
);

//interaction schema to db

const User = mongoose.model("User", userSchema);

module.exports = User;
