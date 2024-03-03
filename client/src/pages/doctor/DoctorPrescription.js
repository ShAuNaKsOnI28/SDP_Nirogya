import { Button, Form, Input, message } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

const DoctorPrescription = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const { user } = useSelector((state) => state.user);
  const [prescriptions, setPrescriptions] = useState([]);

  const getPrescriptions = async () => {
    try {
      const res = await axios.get("/api/v1/doctor/doctor-prescription", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setPrescriptions(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onFinish = async (values) => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/update-prescription",
        {
          ...values,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data.success) {
        message.success(res.data.message);
        getPrescriptions();
        form.resetFields();
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };

  useEffect(() => {
    getPrescriptions();
  }, []);

  return (
    <Layout>
      {/* <div>
        <Form form={form} onFinish={onFinish} layout="vertical">
          {/* Add necessary form fields 
          <Form.Item
            name="fname"
            label="First Name"
            rules={[{ required: true, message: "Please enter first name" }]}
          >
            <Input />
          </Form.Item>
          {/* Add more form items based on prescription model fields 
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Give Prescription
            </Button>
          </Form.Item>
        </Form>
      </div>

      {/* Display existing prescriptions 
      {prescriptions.map((prescription) => (
        <div key={prescription._id}>
          {/* Display prescription details 
          <p>{`Medicine: ${prescription.Mname}, Date: ${moment(
            prescription.date
          ).format("DD/MM/YYYY")}`}</p>
        </div>
      ))} */}
      Prescripiton given by doctor
    </Layout>
  );
};

export default DoctorPrescription;
