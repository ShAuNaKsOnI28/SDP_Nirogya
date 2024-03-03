const mongoose = require("mongoose");
const prescriptionSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      //   required: [true, "userId is required"],
    },
    doctorId: {
      type: String,
      //   required: [true, "doctorId is required"],
    },
    userInfo: {
      type: String,
      //   required: [true, "userInfo is required"],
    },
    doctorInfo: {
      type: String,
      //   required: [true, "doctorInfo is required"],
    },
    fname: {
      type: String,
      //   required: [true, "first name is require"],
    },
    lname: {
      type: String,
      //   required: [true, "last name is required"],
    },
    Mname: {
      type: String,
      //   required: [true, "Medicine name is required"],
    },
    morning: {
      type: Boolean,
      //   required: [true, "morning dose is required"],
    },
    afternoon: {
      type: Boolean,
      //   required: [true, "afternoon dose is required"],
    },
    evening: {
      type: Boolean,
      //   required: [true, "evening dose is required"],
    },
    night: {
      type: Boolean,
      //   required: [true, "night dose is required"],
    },
    date: {
      type: String,
      //   required: [true, "date is required"],
    },
    quantity: {
      type: Number,
      //   required: [true, "quantity of medicine is required"],
    },
    noofdays: {
      type: Number,
      //   required: [true, "number of days is required"],
    },
    problem: {
      type: String,
      //   required: [true, "problem is required"],
    },
    diagnosis: {
      type: String,
      //   required: [true, "diagnosis is required"],
    },
    // prescription: {
    //   type: String,
    //   required: [true, "prescription is required"],
    // },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const prescriptionModel = mongoose.model("prescriptions", prescriptionSchema);
module.exports = prescriptionModel;
