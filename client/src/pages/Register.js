import { Form, Input, Radio, message } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
// import "../styles/LoginStyles.css";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [isDoctor, setIsDoctor] = useState(false);

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
        <div className="z-50 flex bg-emerald-300 mx-36 justify-center items-center rounded-3xl">
          <div className=" w-3/5 ">
            <img src="images/doctor1.png" />
          </div>
          {/* <div className=" overflow transition-transform transform duration-300 scale-100 hover:scale-105"> */}
          {/* <div className="w-2/5 mx-7 mr-12 items-cen"> */}
          <div className="z-50 bg-emerald-200 rounded-xl shadow-2xl shadow-slate-300 px-5 m-2 -my-10 w-96 ">
            <h1 className="text-center text-emerald-700 text-2xl font-bold uppercase flex justify-center flex-col items-center">
              Register
              <hr className="border-emerald-700 border-2 bg-emerald-700 rounded-lg mt-1 w-6" />
              <br />
            </h1>
            {/* <div className=""> */}
            <Form onFinish={onFinishHandler}>
              <Form.Item
                name="salutation"
                rules={[{ required: true, message: "Salutation is required" }]}
              >
                <Input
                  type="text"
                  placeholder="Mr./Mrs./Ms."
                  className="w-full rounded-md border border-stroke bg-white px-5 py-2 -my-2 text-base text-body-color outline-none focus:border-primary  dark:border-dark-3 dark:text-black"
                />
              </Form.Item>
              <div className="flex justify-between">
                <Form.Item
                  name="fname"
                  rules={[{ required: true, message: "Name is required" }]}
                >
                  <Input
                    type="text"
                    placeholder="Enter your First Name"
                    className="rounded-md border border-stroke bg-white px-5 py-2 -my-2 text-base text-body-color outline-none focus:border-primary  dark:border-dark-3 dark:text-black"
                  />
                </Form.Item>
                <Form.Item
                  name="lname"
                  rules={[{ required: true, message: "Name is required" }]}
                >
                  <Input
                    type="text"
                    placeholder="Enter your last Name"
                    className="rounded-md border border-stroke bg-white px-5 py-2 -my-2 text-base text-body-color outline-none focus:border-primary  dark:border-dark-3 dark:text-black"
                  />
                </Form.Item>
              </div>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input
                  type="email"
                  placeholder="Enter you Full Email"
                  className="w-full rounded-md border border-stroke bg-white px-5 py-2 -my-2 text-base text-body-color outline-none focus:border-primary  dark:border-dark-3 dark:text-black"
                />
              </Form.Item>
              <Form.Item
                name="gender"
                rules={[{ required: true, message: "gender is required" }]}
                className=" -mt-2 -mb-1 pb-3"
              >
                <Radio.Group>
                  <Radio value="male">Male</Radio>
                  <Radio value="female">female</Radio>
                  <Radio value="other">other</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                name="bloodgroup"
                rules={[{ required: true, message: "Blood Group is required" }]}
              >
                <Input
                  type="text"
                  placeholder="Enter you Blood Group"
                  className="w-full rounded-md border border-stroke bg-white px-5 py-2 -my-2 text-base text-body-color outline-none focus:border-primary  dark:border-dark-3 dark:text-black"
                />
              </Form.Item>
              <Form.Item
                name="problem"
                rules={[
                  {
                    required: true,
                    message: "Name of illness is required",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder="Name of Illness"
                  className="w-full rounded-md border border-stroke bg-white px-5 py-2 -my-2 text-base text-body-color outline-none focus:border-primary  dark:border-dark-3 dark:text-black"
                />
              </Form.Item>
              <Form.Item
                name="address"
                rules={[{ required: true, message: "address is required" }]}
              >
                <Input
                  type="text"
                  placeholder="Your address"
                  className="w-full rounded-md border border-stroke bg-white px-5 py-2 -my-2 text-base text-body-color outline-none focus:border-primary  dark:border-dark-3 dark:text-black"
                />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[{ required: true, message: "phone is required" }]}
              >
                <Input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full rounded-md border border-stroke bg-white px-5 py-2 -my-2 text-base text-body-color outline-none focus:border-primary  dark:border-dark-3 dark:text-black"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Password is required" }]}
              >
                <Input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-md border border-stroke bg-white px-5 py-2 -my-2 text-base text-body-color outline-none focus:border-primary  dark:border-dark-3 dark:text-black"
                />
              </Form.Item>

              {/* <Form.Item
                    name="isDoctor"
                    rules={[
                      { required: true, message: "User type is required" },
                    ]}
                  >
                    <Radio.Group onChange={(e) => setIsDoctor(e.target.value)}>
                      <Radio value={true}>Doctor</Radio>
                      <Radio value={false}>Patient</Radio>
                    </Radio.Group>
                  </Form.Item> */}
              <Link to="/login" className="text-sm text-blue-500 mt-5">
                Already a user? Login here
              </Link>
              <button
                className=" ml-48 cursor-pointer rounded-full border border-primary bg-primary px-3 py-0 -mt-3 mb-2 py-1 text-base font-medium text-white transition hover:bg-opacity-90"
                type="submit"
              >
                Register
              </button>
            </Form>
            {/* </div> */}
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Register;
