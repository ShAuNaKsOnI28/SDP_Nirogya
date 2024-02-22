// import { Form, Input, Radio, message } from "antd";
// import axios from "axios";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { hideLoading, showLoading } from "../redux/features/alertSlice";
// import "../styles/LoginStyles.css";

// const Register = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [issDoctor, setIssDoctor] = useState(false);

//   const onFinishHandler = async (values) => {
//     try {
//       dispatch(showLoading());
//       const res = await axios.post("/api/v1/user/register", values);
//       dispatch(hideLoading());

//       if (res.data.success) {
//         message.success("Register Successfully!");
//         navigate("/login");
//       } else {
//         message.error(res.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       console.error(error);
//       message.error("Something Went Wrong");
//     }
//   };

//   return (
//     <>
//       <div className="form-container">
//         <h2 className="dynamic-heading">Welcome to Nirogya</h2>
//         <Form
//           layout="vertical"
//           onFinish={onFinishHandler}
//           className="register-form"
//         >
//           <h3 className="text-center">Register Form</h3>
//           <Form.Item
//             label="Name"
//             name="name"
//             rules={[{ required: true, message: "Name is required" }]}
//           >
//             <Input type="text" />
//           </Form.Item>
//           <Form.Item
//             label="Email"
//             name="email"
//             rules={[{ required: true, message: "Email is required" }]}
//           >
//             <Input type="email" />
//           </Form.Item>
//           <Form.Item
//             label="Password"
//             name="password"
//             rules={[{ required: true, message: "Password is required" }]}
//           >
//             <Input type="password" />
//           </Form.Item>
//           <Form.Item
//             label="UserType"
//             name="isDoctor"
//             rules={[{ required: true, message: "User type is required" }]}
//           >
//             <Radio.Group onChange={(e) => setIssDoctor(e.target.value)}>
//               <Radio value={true}>Doctor</Radio>
//               <Radio value={false}>Patient</Radio>
//             </Radio.Group>
//           </Form.Item>
//           <Link to="/login" className="m-2">
//             Already user login here
//           </Link>
//           <button className="btn btn-primary" type="submit">
//             Register
//           </button>
//         </Form>
//       </div>
//     </>
//   );
// };

// export default Register;

import { Form, Input, Radio, message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import "../styles/LoginStyles.css";

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
    <div className="form-container p-4 h-screen bg-gray-100">
      <h2 className="dynamic-heading">Welcome to Nirogya</h2>
      <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
        <h3 className="text-center">Register Form</h3>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: "Name is required" }]}>
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: "Email is required" }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: "Password is required" }]}>
          <Input type="password" />
        </Form.Item>
        <Form.Item label="UserType" name="isDoctor" rules={[{ required: true, message: "User type is required" }]}>
          <Radio.Group onChange={(e) => setIsDoctor(e.target.value)}>
            <Radio value={true}>Doctor</Radio>
            <Radio value={false}>Patient</Radio>
          </Radio.Group>
        </Form.Item>
        <Link to="/login" className="m-2 text-blue-500">
          Already a user? Login here
        </Link>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </Form>
    </div>
  );
};

export default Register;
