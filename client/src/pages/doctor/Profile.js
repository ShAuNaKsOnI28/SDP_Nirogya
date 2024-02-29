import { Col, Form, Input, Row, TimePicker, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { hideLoading, showLoading } from "../../redux/features/alertSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [doctor, setDoctor] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  // update doc ==========
  //handle form
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/doctor/updateProfile",
        {
          ...values,
          userId: user._id,
          timings: [
            values.timings[0].format("HH:mm"),
            values.timings[1].format("HH:mm"),

            // moment(values.timings[0]).format("HH:mm"),
            // moment(values.timings[1]).format("HH:mm"),
          ],
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
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Somthing Went Wrong ");
    }
  };

  const getDoctorInfo = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorInfo",
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setDoctor(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorInfo();
    // eslint-disable-next-line
  }, []);
  return (
    <Layout>
      {doctor && (
        <Form
          layout="vertical"
          onFinish={handleFinish}
          className="mx-3"
          // initialValues={{
          //   ...doctor,
          //   timings: [
          //     moment(doctor.timings[0]).format("HH:mm"),
          //     moment(doctor.timings[1]).format("HH:mm"),
          //   ],
          // }}
        >
          <h4 className=" text-lg pt-3 md:text-black dark:text-white font-semibold mb-4">
            Personal Details :{" "}
          </h4>
          <Row gutter={20}>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label={
                  <span className="md:text-black dark:text-white ">
                    First Name
                  </span>
                }
                name="FirstName"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="text"
                  placeholder="your first name"
                  className="w-full border p-2 rounded "
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label={
                  <span className="md:text-black dark:text-white">
                    Last Name
                  </span>
                }
                name="LastName"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="text"
                  placeholder="your last name"
                  className="w-full border p-2 rounded"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label={
                  <span className="md:text-black dark:text-white">
                    Phone No
                  </span>
                }
                name="Phone"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="text"
                  placeholder="your contact no"
                  className="w-full border p-2 rounded"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label={
                  <span className="md:text-black dark:text-white">Email</span>
                }
                name="Email"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="email"
                  placeholder="your email address"
                  className="w-full border p-2 rounded"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label={
                  <span className="md:text-black dark:text-white">Website</span>
                }
                name="Website"
              >
                <Input
                  type="text"
                  placeholder="your website"
                  className="w-full border p-2 rounded"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label={
                  <span className="md:text-black dark:text-white">Address</span>
                }
                name="Address"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="text"
                  placeholder="your clinic address"
                  className="w-full border p-2 rounded"
                />
              </Form.Item>
            </Col>
          </Row>
          <h4 className=" text-lg font-semibold mb-4 md:text-black dark:text-white">
            Professional Details :
          </h4>
          <Row gutter={20}>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label={
                  <span className="md:text-black dark:text-white">
                    Specialization
                  </span>
                }
                name="Specialization"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="text"
                  placeholder="your specialization"
                  className="w-full border p-2 rounded"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label={
                  <span className="md:text-black dark:text-white">
                    Experince
                  </span>
                }
                name="Experince"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="text"
                  placeholder="your experience"
                  className="w-full border p-2 rounded"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label={
                  <span className="md:text-black dark:text-white">
                    Fees Per Consultation
                  </span>
                }
                name="FeesPerConsultation"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="text"
                  placeholder="your consultation fees"
                  className="w-full border p-2 rounded"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label={
                  <span className="md:text-black dark:text-white">Timings</span>
                }
                name="timings"
                className="mb-0"
                required
              >
                <TimePicker.RangePicker format="HH:mm" className="w-full" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}></Col>
            <Col xs={24} md={24} lg={8}>
              <button
                className="btn btn-primary form-btn py-2 px-4 bg-blue-500 md:text-black dark:text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                type="submit"
              >
                Submit
              </button>
            </Col>
          </Row>
        </Form>
      )}
    </Layout>
  );
};

export default Profile;
