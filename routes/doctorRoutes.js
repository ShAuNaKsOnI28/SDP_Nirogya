const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentController,
  updateStatusController,
  doctorPrescriptionController,
  updateDoctorPrescriptionController,
} = require("../controllers/doctorCtrl");
const router = express.Router();

router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);
router.post("/updateProfile", authMiddleware, updateProfileController);
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);
router.get("/doctor-appointment",authMiddleware,doctorAppointmentController);
router.post("/update-status",authMiddleware,updateStatusController);
router.get("/doctor-prescription",authMiddleware,doctorPrescriptionController);
router.post("/update-prescription",authMiddleware,updateDoctorPrescriptionController);

module.exports = router;
