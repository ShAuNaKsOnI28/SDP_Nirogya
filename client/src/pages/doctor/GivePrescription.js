import { DatePicker, Form, Input, Radio, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

const GivePrescription = () => {
  const params = useParams();
  const [user, setUser] = useState([]);
  const [date, setDate] = useState("");

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
          lanme: values.lname,
          Mname: values.Mname,
          morning: values.morning,
          afternoon: values.afternoon,
          evening: values.evening,
          night: values.night,
          date: date,
          quantity: values.quantity,
          noofdays: values.noofdays,
          problem: values.problem,
          diagnosis: values.diagnosis,
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
      <span className=" ml-48 text-3xl font-semibold md:text-black dark:text-white">
        Prescription Details
      </span>
      <Form
        onFinish={handleSubmit}
        className="max-w-md mx-auto mt-5 mb-3 p-4 bg-white rounded shadow-md"
      >
        <Form.Item
          name="fname"
          rules={[{ required: true, message: "First name required" }]}
          className="mb-4 md:text-black md:bg-white dark:text-white dark:bg-black"
          label="Doctor First Name"
        >
          <Input
            placeholder="First name"
            type="text"
            className="w-full p-2 border rounded"
          />
        </Form.Item>

        <Form.Item
          name="lname"
          rules={[{ required: true, message: "Last name required" }]}
          className="mb-4 md:text-black md:bg-white dark:text-white dark:bg-black"
          label="Doctor Last Name"
        >
          <Input
            placeholder="Last name"
            type="text"
            className="w-full p-2 border rounded"
          />
        </Form.Item>

        <Form.Item
          name="Mname"
          rules={[{ required: true, message: "Medicine name required" }]}
          className="mb-4 md:text-black md:bg-white dark:text-white dark:bg-black"
          label="Medicine Name"
        >
          <Input
            placeholder="Medicine name"
            type="text"
            className="w-full p-2 border rounded"
          />
        </Form.Item>

        <Form.Item name="morning" label="Morning Prescription" className="mb-4">
          <Radio.Group className="flex">
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="afternoon"
          label="Afternoon Prescription"
          className="mb-4"
          valuePropName="checked"
        >
          <Radio.Group className="flex">
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="evening" label="Evening Prescription" className="mb-4">
          <Radio.Group className="flex">
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="night" label="Night Prescription" className="mb-4">
          <Radio.Group className="flex">
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>

        <span className="mb-4 md:text-black md:bg-white dark:text-white dark:bg-black">
          Select Date :{" "}
          <DatePicker
            className="mb-4 p-2 border rounded"
            format="DD-MM-YYYY"
            onChange={(value) => {
              setDate(value.format("DD-MM-YYYY"));
            }}
          />
        </span>

        <Form.Item
          name="quantity"
          rules={[{ required: true, message: "Quantity of medicine required" }]}
          className="mb-4 md:text-black md:bg-white dark:text-white dark:bg-black"
          label="Quantity of Medicine"
        >
          <Input
            placeholder="Quantity of medicine"
            type="number"
            className="w-full p-2 border rounded"
          />
        </Form.Item>

        <Form.Item
          name="noofdays"
          rules={[{ required: true, message: "Number of days required" }]}
          className="mb-4 md:text-black md:bg-white dark:text-white dark:bg-black"
          label="Number of Days"
        >
          <Input
            placeholder="Number of Days"
            type="number"
            className="w-full p-2 border rounded"
          />
        </Form.Item>

        <Form.Item
          name="problem"
          rules={[{ required: true, message: "Problem is required" }]}
          className="mb-4 md:text-black md:bg-white dark:text-white dark:bg-black"
          label="Problem of patient"
        >
          <Input
            placeholder="Problem of patient"
            type="text"
            className="w-full p-2 border rounded"
          />
        </Form.Item>

        <Form.Item
          name="diagnosis"
          rules={[{ required: true, message: "Diagnosis is required" }]}
          className="mb-4 md:text-black md:bg-white dark:text-white dark:bg-black"
          label="Diagnosis of patient"
        >
          <Input
            placeholder="Diagnosis of patient"
            type="text"
            className="w-full p-2 border rounded"
          />
        </Form.Item>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Send Prescription
        </button>
      </Form>
    </Layout>
  );
};

export default GivePrescription;
