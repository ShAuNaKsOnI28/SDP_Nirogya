import { Table } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/Navbar.css";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const getAppointments = async () => {
    try {
      const res = await axios.get("/api/v1/user/user-appointments", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setAppointments(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const columns = [
    {
      title: "Name",
      render: (text, record) => (
        <span className="flex p-2 bg-black">
          {record.FirstName} {record.LastName}
        </span>
      ),
    },
    {
      title: "Phone",
      render: (text, record) => <span>{record.Phone}</span>,
    },
    {
      title: "Date & Time",
      render: (text, record) => (
        <span>
          {moment(record.date).format("DD-MM-YYYY")} &nbsp;
          {moment(record.time).format("HH:mm")}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  return (
    <Layout>
      <Table
        columns={columns}
        dataSource={appointments}
        bordered
        size="middle"
        style={{ backgroundColor: "red" }}
        className="custom-ant-table"
      />
    </Layout>
  );
};

export default Appointments;
