import { Form, Input, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

const GivePrescription = () => {
  const params = useParams();
  const [user, setUser] = useState([]);

  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserById",
        {
          _id: params.userId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setUser(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (values) => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/give-prescription",
        {
          userId: params.userId,
          userInfo: user,
          fname: values.fname,
          //   doctorId: res.userId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout>
      <Form onFinish={handleSubmit}>
        <Form.Item
          name="fname"
          rules={[{ required: true, message: "full name required" }]}
        >
          <Input placeholder="First name" type="text" />
        </Form.Item>
        <button type="submit">Send Prescription</button>
      </Form>
    </Layout>
  );
};

export default GivePrescription;
