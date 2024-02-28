const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    doctorId: {
      type: String,
      required: true,
    },
    userInfo: {
      type: String,
      required: true,
    },
    doctorInfo: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    FirstName: {
      type: String,
    },
    LastName: {
      type: String,
    },
    Phone: {
      type: String,
    },
    Email: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    salutation: { type: String },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    bloodgroup: {
      type: String,
      enum: ["A+", "B+", "O+", "A-", "B-", "O-", "AB+", "AB-"],
    },
  },
  { timestamps: true }
);

const appointmentModel = mongoose.model("appointments", appointmentSchema);

module.exports = appointmentModel;
