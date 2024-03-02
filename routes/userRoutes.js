const express = require("express");
const {
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
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/getUserData", authMiddleware, authController);
router.post("/apply-doctor", authMiddleware, applyDoctorController);
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);
router.get("/getAllUsers", authMiddleware, getAllUsersController);
router.post("/book-appointment", authMiddleware, bookAppointmentController);
router.post(
  "/booking-availability",
  authMiddleware,
  bookingAvailabilityController
);
router.get("/user-appointments", authMiddleware, userAppointmentsController);
router.get("/getUsersData", authMiddleware, getUsersDataController);
router.post("/userBlock", authMiddleware, userBlockController);

module.exports = router;
