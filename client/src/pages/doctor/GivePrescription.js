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
      {/* <Form onFinish={handleSubmit}>
        <Form.Item
          name="fname"
          rules={[{ required: true, message: "first name required" }]}
        >
          <Input placeholder="First name" type="text" />
        </Form.Item>
        <Form.Item
          name="lname"
          rules={[{ required: true, message: "last name required" }]}
        >
          <Input placeholder="Last name" type="text" />
        </Form.Item>
        <Form.Item
          name="Mname"
          rules={[{ required: true, message: "Medicine name required" }]}
        >
          <Input placeholder="Medicine name" type="text" />
        </Form.Item>
        <Form.Item
          name="morning"
          label="Morning Prescription"
          // rules={[{ required: true, message: "full name required" }]}
        >
          {/* <Checkbox>Morning Prescription</Checkbox> 
          <Radio.Group>
            <Radio value={true}>yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="afternoon"
          // label="Afternoon Prescription"
          valuePropName="checked"
          // rules={[{ required: true, message: "full name required" }]}
        >
          <Checkbox>Afternoon Prescription</Checkbox>
          {/* <Radio.Group>
            <Radio value={true}>yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group> 
        </Form.Item>
        <Form.Item
          name="evening"
          label="Evening Prescription"
          // rules={[{ required: true, message: "full name required" }]}
        >
          {/* <Checkbox>Evening Prescription</Checkbox> 
          <Radio.Group>
            <Radio value={true}>yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="night"
          label="Night Prescription"
          // rules={[{ required: true, message: "night  required" }]}
        >
          {/* <Checkbox>Night Prescription</Checkbox> 
          <Radio.Group>
            <Radio value={true}>yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <DatePicker
          className="m-2"
          format="DD-MM-YYYY"
          onChange={(value) => {
            setDate(value.format("DD-MM-YYYY"));
          }}
        />
        <Form.Item
          name="quantity"
          rules={[{ required: true, message: "quantity of medicine required" }]}
        >
          <Input placeholder="Quantity of medicine" type="number" />
        </Form.Item>
        <Form.Item
          name="noofdays"
          rules={[{ required: true, message: "number of days required" }]}
        >
          <Input placeholder="Number of Days" type="number" />
        </Form.Item>
        <Form.Item
          name="problem"
          rules={[{ required: true, message: "problem is required" }]}
        >
          <Input placeholder="Problem of patient" type="text" />
        </Form.Item>
        <Form.Item
          name="diagnosis"
          rules={[{ required: true, message: "diagnosis is required" }]}
        >
          <Input placeholder="Diagnosis of patient" type="text" />
        </Form.Item>
        <button type="submit">Send Prescription</button>
      </Form> */}
      <span className=" ml-48 text-3xl font-semibold dark:text-white">
        Prescription Details
      </span>
      <Form
        onFinish={handleSubmit}
        className="max-w-md mx-auto mt-5 mb-3 p-4 bg-white rounded shadow-md"
      >
        <Form.Item
          name="fname"
          rules={[{ required: true, message: "First name required" }]}
          className="mb-4"
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
          className="mb-4"
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
          className="mb-4"
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
          {/* <Checkbox/> */}
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

        <DatePicker
          className="mb-4 p-2 border rounded"
          format="DD-MM-YYYY"
          onChange={(value) => {
            setDate(value.format("DD-MM-YYYY"));
          }}
        />

        <Form.Item
          name="quantity"
          rules={[{ required: true, message: "Quantity of medicine required" }]}
          className="mb-4"
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
          className="mb-4"
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
          className="mb-4"
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
          className="mb-4"
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
