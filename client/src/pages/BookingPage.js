import { DatePicker, message, TimePicker } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { hideLoading, showLoading } from "../redux/features/alertSlice";

const BookingPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
  const [isAvailable, setIsAvailable] = useState(false);
  const dispatch = useDispatch();
  // login user data
  const getDoctorData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorById",
        { doctorId: params.doctorId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // =============== booking func
  const handleBooking = async () => {
    try {
      setIsAvailable(true);
      if (!date && !time) {
        return alert("Date and Time Required");
      }
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/book-appointment",
        {
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctors,
          userInfo: user,
          date: date,
          time: time,
          FirstName: doctors.FirstName,
          LastName: doctors.LastName,
          Email: doctors.Email,
          Phone: doctors.Phone,
          name: user.name,
          salutation: user.salutation,
          gender: user.gender,
          email: user.email,
          bloodgroup: user.bloodgroup,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  // const handleAvailability = async () => {
  //   try {
  //     dispatch(showLoading());
  //     const res = axios.post(
  //       "/api/v1/user/booking-availability",
  //       { doctorId: params.doctorId, date, time },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  //     dispatch(hideLoading());
  //     if (res.data.success) {
  //       setIsAvailable(true);
  //       message.success(res.data.message);
  //     } else {
  //       message.error(res.data.message);
  //     }
  //   } catch (error) {
  //     dispatch(hideLoading());
  //     console.log(error);
  //   }
  // };

  const handleAvailability = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/booking-availability",
        { doctorId: params.doctorId, date, time },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());

      if (res.data.success) {
        const startTime = doctors.timings[0];
        const endTime = doctors.timings[1];
        const selectedTime = moment(time, "HH:mm");
        const doctorStartTime = moment(startTime, "HH:mm");
        const doctorEndTime = moment(endTime, "HH:mm");
        const isWithinRange =
          selectedTime.isSameOrAfter(doctorStartTime) &&
          selectedTime.isSameOrBefore(doctorEndTime);
        setIsAvailable(isWithinRange);
        if (isWithinRange) {
          message.success(res.data.message);
        } else {
          message.error("Selected time is outside doctor's working hours.");
        }
      } else {
        setIsAvailable(false);
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorData();
    //eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <div className="text-center text-4xl m-2 font-semibold">
        <h1>Booking Page</h1>
      </div>
      <hr />
      <div className="container m-2">
        {doctors && (
          <div>
            <div className="text-lg ml-3 my-2 pt-2 font-medium md:text-black dark:text-white">
              <h4>
                Dr. {doctors.FirstName} {doctors.LastName}
              </h4>
              <h4>Fees : {doctors.FeesPerConsultation}</h4>
              <h4>Specialization : {doctors.Specialization}</h4>
              <h4>Experience : {doctors.Experince}</h4>              
              <h4>Doctor Contact : {doctors.Phone}</h4>              
              <h4>
                Timings :{doctors.timings && doctors.timings[0]}-{" "}
                {doctors.timings && doctors.timings[1]}{" "}
              </h4>
            </div>
            <div className="d-flex flex-column w-50">
              <DatePicker
                className="m-2"
                format="DD-MM-YYYY"
                onChange={(value) => {
                  setDate(value.format("DD-MM-YYYY"));
                }}
              />
              <TimePicker
                format="HH:mm"
                className="m-2"
                onChange={(value) => {
                  setTime(value.format("HH:mm"));
                }}
              />
              <div className="flex">
                <button
                  className="btn btn-primary mt-2 p-2 mx-2 w-full"
                  onClick={handleAvailability}
                >
                  Check Availability
                </button>
                <button
                  className="btn mt-2 p-2 mx-2 w-full md:bg-black dark:bg-white md:text-white dark:text-black"
                  onClick={handleBooking}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookingPage;
