import { Form, Input, message } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import "../styles/LoginStyles.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };

  return (
    // <section className="bg-gray-1 py-20 dark:bg-dark bg-red-100 lg:py-[120px]">
    //   <div className="container mx-auto bg-emerald-400">
    //     <div className="-mx-4 flex flex-wrap">
    //       <div className="w-full px-4 ">
    //         <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
    //           <div className="mb-10 text-center md:mb-16">
    //             <div className=" text-blue-500 font-montserrat text-2xl inline-flex">
    //               Welcome to Nirogya
    //             </div>
    //             <a href="/home" className="mx-auto inline-block max-w-[160px]">
    //               {/* <img
    //                 src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
    //                 alt="logo"
    //               /> */}
    //               {/* <div className="text-center">
    //                 <div className=" text-blue-500 text-2xl inline-flex">
    //                   Welcome to Nirogya
    //                   SIGN IN
    //                 </div>
    //               </div> */}
    //             </a>
    //           </div>
    //           <Form
    //             layout="vertical"
    //             onFinish={onfinishHandler}
    //             className="register-form"
    //           >
    //             <Form.Item name="email">
    //               <Input
    //                 type="email"
    //                 placeholder="Email"
    //                 className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
    //                 required
    //               />
    //             </Form.Item>
    //             <Form.Item name="password">
    //               <Input
    //                 type="password"
    //                 placeholder="Password"
    //                 className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
    //                 required
    //               />
    //             </Form.Item>
    //             <div className="mb-10">
    //               <button
    //                 className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
    //                 type="submit"
    //               >
    //                 Login
    //               </button>
    //             </div>
    //           </Form>
    //           <p className="text-base text-body-color dark:text-dark-6">
    //             <span className="pr-0.5">Not Registered yet?</span>
    //             <a href="/register" className="text-primary hover:underline">
    //               Sign Up
    //             </a>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div className=" relative container h-[88.9vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 to-orange-500">
      <div className=" absolute rotate-45 -top-40 right-0 rounded-2xl h-80 w-96 bg-orange-500"></div>
      <div className="absolute rotate-45 -bottom-32 -left-2 rounded-2xl h-96 w-96 bg-blue-900"></div>
      <div className="z-50 flex bg-emerald-300 justify-center items-center rounded-3xl">
        <div className="w-4/6">
          <img src="images/doctor1.png" />
        </div>
        <div className="transition-transform transform duration-800 scale-100 hover:scale-105">
          <div className="w-2/5 mx-6 mr-12">
            <div className="z-40 h-full bg-emerald-200 rounded-xl shadow-2xl shadow-slate-400 p-4 w-96 mx-6">
              <h1 className="text-center text-emerald-700 text-2xl font-bold uppercase flex justify-center flex-col items-center">
                Sign In
                <hr className="border-emerald-500 border-2 bg-emerald-700 rounded-lg mt-1 w-6" />
                <br />
              </h1>

              <Form
                layout="vertical"
                onFinish={onfinishHandler}
                className="register-form"
              >
                <Form.Item name="email">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md border border-stroke bg-white-200 px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                    required
                  />
                </Form.Item>
                <Form.Item name="password">
                  <Input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-md border border-stroke bg-white-200 px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                    required
                  />
                </Form.Item>
                <div className="mb-10">
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
  );
};

export default Login;
