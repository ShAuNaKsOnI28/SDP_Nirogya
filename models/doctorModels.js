const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    FirstName: {
      type: String,
      required: [true, "First Name is required"],
    },
    LastName: {
      type: String,
      required: [true, "Last Name is required"],
    },
    Phone: {
      type: String,
      required: [true, "Phone is required"],
    },
    Email: {
      type: String,
      required: [true, "Email is required"],
    },
    website: {
      type: String,
    },
    Address: {
      type: String,
      required: [true, "Address is required"],
    },
    Specialization: {
      type: String,
      required: [true, "Specialization is required"],
    },
    Experince: {
      type: String,
      required: [true, "Experince is required"],
    },
    FeesPerConsultation: {
      type: Number,
      required: [true, "Fee is required"],
    },
    status: {
      type: String,
      default: "pending",
    },
    timings: {
      type: Object,
      required: [true, "Work timing is required"],
    },
  },
  { timestamps: true }
);

const doctorModel = mongoose.model("doctors", doctorSchema);
module.exports = doctorModel;
