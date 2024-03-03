const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, "first name is require"],
  },
  lname: {
    type: String,
    required: [true, "last name is required"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  salutation: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  bloodgroup: {
    type: String,
    enum: ["A+", "B+", "O+", "A-", "B-", "O-", "AB+", "AB-"],
  },
  problem: {
    type: String,
    required: [true, "Name of illness is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  imageUrl: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isDoctor: {
    type: Boolean,
    default: false,
  },
  notification: {
    type: Array,
    default: [],
  },
  seennotification: {
    type: Array,
    default: [],
  },
  status: {
    type: String,
    default: "unblock",
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
