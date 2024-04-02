const mongoose = require("mongoose");
const prescriptionSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    doctorId: {
      type: String,
    },
    userInfo: {
      type: String,
    },
    doctorInfo: {
      type: String,
    },
    fname: {
      type: String,
    },
    lname: {
      type: String,
    },
    Mname: {
      type: String,
    },
    morning: {
      type: Boolean,
    },
    afternoon: {
      type: Boolean,
    },
    evening: {
      type: Boolean,
    },
    night: {
      type: Boolean,
    },
    date: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    noofdays: {
      type: Number,
    },
    problem: {
      type: String,
    },
    diagnosis: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const prescriptionModel = mongoose.model("prescriptions", prescriptionSchema);
module.exports = prescriptionModel;
