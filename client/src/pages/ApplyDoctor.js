import { Col, Form, Input, Row, TimePicker, message } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import Layout from "./../components/Layout";

const ApplyDoctor = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [isDoctor, setIsDoctor] = useState(false);
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/apply-doctor",
        {
          ...values,
          userId: user._id,
          // name: `${values.FirstName} ${values.LastName}`,
          // phone: values.Phone,

          timings: [
            values.timings[0].format("HH:mm"),
            values.timings[1].format("HH:mm"),
            // "10:00","12:00"
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // console.log(values);
      // console.log(values.timings[0]);
      // console.log(values.timings[1]);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/");
        // window.location.reload();
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
      {/* <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <h4 className="">Personal Details : </h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="First Name"
              name="FirstName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your first name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Last Name"
              name="LastName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your last name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Phone No"
              name="Phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your contact no" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Email"
              name="Email"
              required
              rules={[{ required: true }]}
            >
              <Input type="email" placeholder="your email address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Website" name="Website">
              <Input type="text" placeholder="your website" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Address"
              name="Address"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your clinic address" />
            </Form.Item>
          </Col>
        </Row>
        <h4>Professional Details :</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Specialization"
              name="Specialization"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your specialization" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Experience"
              name="Experince"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your experience" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Fees Per Cunsaltation"
              name="FeesPerConsultation"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your consultation fees" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Timings" name="timings" required>
              <TimePicker.RangePicker format="HH:mm" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Are you sure to submit the details"
              // name="isDoctor"
              rules={[
                { required: true, message: "please select the required" },
              ]}
            >
              {/* <Radio.Group onChange={(e) => setIsDoctor(e.target.value)}>
                <Radio value={true}>yes</Radio>
                <Radio value={false}>no</Radio> 
              <Radio.Group>
                <Radio>yes</Radio>
                <Radio>no</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
            <button className="btn btn-primary bg-blue-500" type="submit">
              Submit
            </button>
          </Col>
        </Row>
      </Form> */}
      <Form layout="vertical" onFinish={handleFinish} className="mx-4">
        {/* <h4 className=" text-2xl pt-3 md:text-black dark:text-white font-semibold mb-4">
          Personal Details :{" "}
        </h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label={
                <span className="text-lg font-serif md:text-black dark:text-white ">
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
                <span className="text-lg font-serif md:text-black dark:text-white">
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
                <span className="text-lg font-serif md:text-black dark:text-white">
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
                <span className="text-lg font-serif md:text-black dark:text-white">
                  Email
                </span>
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
                <span className="text-lg font-serif md:text-black dark:text-white">
                  Address
                </span>
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
        </Row> */}
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
