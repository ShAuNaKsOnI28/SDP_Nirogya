import { Form, Input, Radio, message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
// import "../styles/LoginStyles.css";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDoctor, setIsDoctor] = useState(false);

  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());

      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error(error);
      message.error("Something Went Wrong");
    }
  };

  return (
    <>
      <div className=" relative container h-screen max-w-screen-2xl flex-col flex items-center justify-center overflow-clip bg-gradient-to-r from-blue-900 to-orange-500">
        <div className=" absolute rotate-45 -top-40 left-0 rounded-2xl h-80 w-96 bg-blue-900"></div>
        <div className="absolute rotate-45 -bottom-32 -right-2 rounded-2xl h-96 w-96 bg-orange-600"></div>
        <div className="z-50 flex bg-emerald-300 justify-center items-center rounded-3xl">
          <div className="w-3/5">
            <img src="images/doctor12.png" />
          </div>
          <div className=" transition-transform transform duration-300 scale-100 hover:scale-105">
            <div className="w-2/5 mx-6 mr-12">
              <div className="z-40 h-full bg-emerald-200 rounded-xl shadow-2xl shadow-slate-300 p-4 m-3 pt-5 w-96 ">
                <h1 className="text-center text-emerald-700 text-2xl font-bold uppercase flex justify-center flex-col items-center">
                  Register
                  <hr className="border-emerald-700 border-2 bg-emerald-700 rounded-lg mt-1 w-6" />
                  <br />
                </h1>
                <Form
                  layout="vertical"
                  onFinish={onFinishHandler}
                  className="register-form"
                >
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: "Name is required" }]}
                  >
                    <Input
                      type="text"
                      placeholder="Name"
                      className="w-full rounded-md border border-stroke bg-white px-5 py-3 text-base text-body-color outline-none focus:border-primary  dark:border-dark-3 dark:text-black"
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[{ required: true, message: "Email is required" }]}
                  >
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-md border border-stroke bg-white px-5 py-3 text-base text-body-color outline-none focus:border-primary  dark:border-dark-3 dark:text-black"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      { required: true, message: "Password is required" },
                    ]}
                  >
                    <Input
                      type="password"
                      placeholder="Password"
                      className="w-full rounded-md border border-stroke bg-white px-5 py-3 text-base text-body-color outline-none focus:border-primary  dark:border-dark-3 dark:text-black"
                    />
                  </Form.Item>
                  <Form.Item
                    label="UserType"
                    name="isDoctor"
                    rules={[
                      { required: true, message: "User type is required" },
                    ]}
                  >
                    <Radio.Group onChange={(e) => setIsDoctor(e.target.value)}>
                      <Radio value={true}>Doctor</Radio>
                      <Radio value={false}>Patient</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Link to="/login" className="m-2 text-blue-500">
                    Already a user? Login here
                  </Link>
                  <br />
                  <br />
                  <button
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                    type="submit"
                  >
                    Register
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
