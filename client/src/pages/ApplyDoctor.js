import { Button, Col, Form, Input, Row, TimePicker, Upload, message } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import Layout from "./../components/Layout";
import { UploadOutlined } from '@ant-design/icons';

const ApplyDoctor = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/apply-doctor",
        {
          ...values,
          userId: user._id,
          timings: [
            values.timings[0].format("HH:mm"),
            values.timings[1].format("HH:mm"),
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
      message.error("something went wrong");
    }
  };

  return (
    <Layout>
      <Form layout="vertical" onFinish={handleFinish} className="mx-4">
        <h4 className=" text-2xl font-semibold mb-4 md:text-black dark:text-white">
          Professional Details :
        </h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label={
                <span className="text-lg font-serif md:text-black dark:text-white">
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
                <span className="text-lg font-serif md:text-black dark:text-white">
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
                <span className="text-lg font-serif md:text-black dark:text-white">
                  Website
                </span>
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
                <span className="text-lg font-serif md:text-black dark:text-white">
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
                <span className="text-lg font-serif md:text-black dark:text-white">
                  Timings
                </span>
              }
              name="timings"
              className="mb-0"
              required
            >
              <TimePicker.RangePicker format="HH:mm" className="w-full" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
          {/* Image Upload Field */}
          <Form.Item
            label={<span className="text-lg font-serif md:text-black dark:text-white">Image</span>}
            name="Image"
            required
            rules={[{ required: true, message: 'Please upload your image!' }]}
          >
            <Upload
              accept="image/*"
              maxCount={1}
              beforeUpload={() => false} // Prevent default upload behavior
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>
        </Col>
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
            <button
              className="btn btn-primary form-btn py-2 my-2 px-4 bg-blue-500 md:text-black dark:text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              type="submit"
            >
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default ApplyDoctor;
