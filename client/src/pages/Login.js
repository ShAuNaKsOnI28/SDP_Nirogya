import { Form, Input, message } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
// import "../styles/LoginStyles.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);

      dispatch(hideLoading());

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        console.log(res.data.token);
        navigate("/");
        message.success("Login Successfully");
      } else {
        message.error(res.data.message);
      }
      window.location.reload();
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };
  return (
    <>
      <div className=" relative container h-screen max-w-screen-2xl flex-col flex items-center justify-center overflow-clip bg-gradient-to-r from-blue-900 to-orange-500">
        <div className=" absolute rotate-45 -top-40 left-0 rounded-2xl h-80 w-96 bg-blue-900"></div>
        <div className="absolute rotate-45 -bottom-32 -right-2 rounded-2xl h-96 w-96 bg-orange-500"></div>
        <div className="z-50 flex bg-emerald-300 justify-center items-center rounded-3xl">
          <div className="w-3/5">
            <img src="images/doctor12.png" />
          </div>
          <div className=" transition-transform transform duration-800 scale-100 hover:scale-105">
            <div className="w-2/5 mx-6 mr-12">
              <div className="z-40 h-full bg-emerald-200 rounded-xl shadow-2xl shadow-slate-300 p-4 w-96 mx-6">
                <h1 className="text-center text-emerald-700 text-2xl font-bold uppercase flex justify-center flex-col items-center">
                  Sign In
                  <hr className="border-emerald-700 border-2 bg-emerald-700 rounded-lg mt-1 w-6" />
                  <br />
                </h1>

                <Form layout="vertical" onFinish={onfinishHandler} className="">
                  <Form.Item name="email">
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-md border border-stroke bg-white px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-black"
                      required
                    />
                  </Form.Item>
                  <Form.Item name="password">
                    <Input
                      type="password"
                      placeholder="Password"
                      className="w-full rounded-md border border-stroke bg-white px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-black"
                      required
                    />
                  </Form.Item>
                  <div className="mb-4">
                    <button
                      className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </Form>
                <p className="text-base text-body-color dark:text-dark-6">
                  <span className="pr-0.5">Not Registered yet?</span>
                  <a href="/register" className="text-primary hover:underline">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
