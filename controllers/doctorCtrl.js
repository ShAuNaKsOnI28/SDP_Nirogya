const doctorModel = require("../models/doctorModels");
const appointmentModel = require("../models/appointmentModels");
const userModel = require("../models/userModels");
const prescriptionModel = require("../models/prescriptionModel");
const getDoctorInfoController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "Doctor fetch success",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting doctor",
      error,
    });
  }
};
const updateProfileController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(201).send({
      success: true,
      message: "Doctor Profile Updated",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Doctor Profile Update issue",
      error,
    });
  }
};

const getDoctorByIdController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ _id: req.body.doctorId });
    res.status(201).send({
      success: true,
      message: "Doctor found by id",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Couldnt find the doctor by id",
      error,
    });
  }
};

const doctorAppointmentController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ userId: req.body.userId });
    const appointment = await appointmentModel.find({ doctorId: doctor._id });
    res.status(200).send({
      success: true,
      message: "Doctor appointment fetch success",
      data: appointment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting doctor appointment",
      error,
    });
  }
};

const doctorPrescriptionController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ userId: req.body.userId });
    const prescription = await prescriptionModel.find({ doctorId: doctor._id });
    res.status(200).send({
      success: true,
      message: "Fetching prescription from doctor side success",
      data: prescription,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting prescription from doctor side",
      error,
    });
  }
};

const givePrescriptionController = async (req, res) => {
  try {
    req.body.status = "given";
    const prescription = new prescriptionModel(req.body);
    // console.log(prescription);
    await prescription.save();
    const user = await userModel.findOne({ _id: req.body.userId });
    // console.log(user);
    user.notification.push({
      type: "prescription-given",
      message: `You have been prescribed by the doctor ${req.body.fname} ${req.body.lname}`,
      onClickPath: "/user/prescription",
    });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Prescription given",
      data: prescription,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while giving prescription",
      error,
    });
  }
};

const updateStatusController = async (req, res) => {
  try {
    const { appointmentsId, status } = req.body;
    const appointment = await appointmentModel.findByIdAndUpdate(
      appointmentsId,
      { status }
    );
    const user = await userModel.findOne({
      _id: appointment.userId,
    });
    const notification = user.notification;
    notification.push({
      type: "status-updated",
      message: `your appointment has been ${status}`,
      onClickPath: "/doctor-appointment",
    });
    await user.save();
    res.status(200).send({
      message: "Appointment updated",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while updating appointment",
      error,
    });
  }
};

const updateDoctorPrescriptionController = async (req, res) => {
  try {
    console.log(req.body);
    console.log(res.body);
    const prescription = await prescriptionModel.findByIdAndUpdate(req.body);
    res.status(200).send({
      success: true,
      message: "Prescription given",
      data: prescription,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while giving prescription",
      error,
    });
  }
};

module.exports = {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentController,
  updateStatusController,
  doctorPrescriptionController,
  updateDoctorPrescriptionController,
  givePrescriptionController,
};
