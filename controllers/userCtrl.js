const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const doctorModel = require("../models/doctorModels");
const appointmentModel = require("../models/appointmentModels");
const prescriptionModel = require("../models/prescriptionModel");
const moment = require("moment");

//register callback
const registerController = async (req, res) => {
  try {
    const exisitingUser = await userModel.findOne({ email: req.body.email });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Register Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};

// login callback
const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res
        .status(500)
        .send({ message: "user not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(500)
        .send({ message: "Invlid Email or Password", success: false });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res
      .status(200)
      .send({ message: "Login Success", success: true, token, user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
  }
};

const authController = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.body.userId });
    user.password = undefined;
    if (!user) {
      return res.status(200).send({
        message: "user not found",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "auth error",
      success: false,
      error,
    });
  }
};

//applydoctor ctrl
const applyDoctorController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    const newDoctor = await doctorModel({ ...req.body, status: "pending" });
    newDoctor.FirstName = user.fname;
    newDoctor.LastName = user.lname;
    newDoctor.Phone = user.phone;
    newDoctor.Email = user.email;
    newDoctor.Address = user.address;
    newDoctor.problem = "None";
    console.log("NewDoctor: ", newDoctor);
    await newDoctor.save();
    // console.log(user);
    user.isDoctor = true;
    // console.log(user);
    await user.save();
    const adminUser = await userModel.findOne({ isAdmin: true });
    const notification = adminUser.notification;
    notification.push({
      type: "apply-doctor-request",
      message: `${newDoctor.FirstName} ${newDoctor.LastName} Has applied for doctor account`,
      data: {
        doctorId: newDoctor._id,
        name: newDoctor.FirstName + " " + newDoctor.LastName,

        onclickPath: "/admin/doctor",
      },
    });
    await userModel.findByIdAndUpdate(adminUser._id, { notification });
    res.status(201).send({
      success: true,
      message: "Doctor Applied Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while applying for doctor",
    });
  }
};

//notification ctrl
const getAllNotificationController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    const seennotification = user.seennotification;
    const notification = user.notification;
    seennotification.push(...notification);
    user.notification = [];
    user.seennotification = notification;
    const updatedUser = await user.save();
    res.status(200).send({
      success: true,
      message: "all notification marked as read",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in notification",
      success: false,
      error,
    });
  }
};

// delete notifications
const deleteAllNotificationController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    user.notification = [];
    user.seennotification = [];
    const updatedUser = await user.save();
    updatedUser.password = undefined;
    res.status(200).send({
      success: true,
      message: "Notifications Deleted successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "unable to delete all notifications",
      error,
    });
  }
};
//get all doctor
const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await doctorModel.find({ status: "approved" });
    res.status(200).send({
      success: true,
      message: "Doctor List fetch Successfully",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while fetching doctor",
      error,
    });
  }
};

const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find({ isAdmin: false, isDoctor: false });
    res.status(200).send({
      success: true,
      message: "User List fetch Successfully",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while fetching users",
      error,
    });
  }
};

const bookAppointmentController = async (req, res) => {
  try {
    req.body.date = moment(req.body.date, "DD-MM-YYYY").toISOString();
    req.body.time = moment(req.body.time, "HH:mm").toISOString();
    req.body.status = "pending";
    const newAppointment = new appointmentModel(req.body);
    await newAppointment.save();
    console.log(req.body);
    const user = await userModel.findOne({ _id: req.body.userId });
    user.notification.push({
      type: "new-appointment-request",
      message: `A new appointment request from ${req.body.userInfo.name}`,
      onclickPath: "/user/appointmetns",
    });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Appointment Booked Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "appointment not booked",
      error,
    });
  }
};

const getUserByIdController = async (req, res) => {
  try {
    // console.log(req.body);
    const user = await userModel.findOne({ _id: req.body._id });
    res.status(200).send({
      success: true,
      message: "User found by id",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in fetching user by id",
      error,
    });
  }
};

const bookingAvailabilityController = async (req, res) => {
  try {
    const date = moment(req.body.date, "DD-MM-YYY").toISOString();
    const fromtime = moment(req.bodytime, "HH-mm")
      .subtract(1, "hours")
      .toISOString();
    const totime = moment(req.bodytime, "HH-mm").add(1, "hours").toISOString();
    const doctorId = req.body.doctorId;
    const appointments = await appointmentModel.find({
      doctorId,
      date,
      time: {
        $gte: fromtime,
        $lte: totime,
      },
    });
    if (appointments.length > 0) {
      return res.status(200).send({
        success: true,
        message: "appointment not available",
      });
    } else {
      return res.status(200).send({
        success: true,
        message: "Appointment available",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "doctor not available",
      error,
    });
  }
};

const userAppointmentsController = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({
      userId: req.body.userId,
    });

    if (appointments.length === 0) {
      res.status(200).send({
        success: true,
        message: "No appointments found",
        data: appointments,
      });
    } else {
      res.status(200).send({
        success: true,
        message: " appointments found",
        data: appointments,
      });
    }
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).send({
      success: false,
      message: "Error fetching appointments",
      error,
    });
  }
};

const userPrescriptionController = async (req, res) => {
  try {
    req.body.status = "pending";
    const prescriptions = await prescriptionModel.find({});
    const user = await userModel.findOne({ _id: req.body.userId });
    user.notification.push({
      type: "new-prescription",
      message: `A new prescription from`,
      onclickPath: "/user/prescription",
    });
    await user.save();
    // res.status(200).send({
    //   success: true,
    //   message: "Prescription added successfully",
    //   data: prescriptions,
    // });
    if (prescriptions.length === 0) {
      res.status(200).send({
        success: true,
        message: "No prescription found",
        data: prescriptions,
      });
    } else {
      res.status(200).send({
        success: true,
        message: "Prescription found",
        data: prescriptions,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in fetching user prescription data",
      error,
    });
  }
};

const getUsersDataController = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.body.userId });
    user.password = undefined;
    if (!user) {
      return res.status(200).send({
        message: "User not found",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in fetching user data",
      success: false,
      error,
    });
  }
};

const userBlockController = async (req, res) => {
  try {
    const user = await userModel.find({ status: "block" });
    res.status(200).send({
      success: true,
      message: "User Blocked Successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in blocking user",
      error,
    });
  }
};

module.exports = {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
  getUsersDataController,
  getAllUsersController,
  userBlockController,
  userPrescriptionController,
  getUserByIdController,
};
