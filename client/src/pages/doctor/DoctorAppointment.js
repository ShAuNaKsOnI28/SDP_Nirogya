import { Table, message } from "antd";
// import "antd/dist/antd.css";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout";
import "./../../styles/LayoutStyles.css";

const DoctorAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const getAppointments = async () => {
    try {
      const res = await axios.get("/api/v1/doctor/doctor-appointment", {
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

  const handleStatus = async (record, status) => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/update-status",
        {
          appointmentsId: record._id,
          status,
          // doctorInfo: record.doctorInfo,
          // userInfo: record.userInfo,
          // userId: record.userId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        getAppointments();
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };

  const columns = [
    {
      title: <span className="">Name</span>,
      render: (text, record) => (
        <span className="">
          {record.salutation}
          {record.name}
        </span>
      ),
    },
    {
      title: <span className="">Gender</span>,
      render: (text, record) => <span className="">{record.gender}</span>,
    },
    {
      title: <span className="">Blood Group</span>,
      render: (text, record) => <span className="">{record.bloodgroup}</span>,
    },
    {
      title: <span className="">Date & Time</span>,
      render: (text, record) => (
        <span className="">
          {moment(record.date).format("DD-MM-YYYY")}
          {moment(record.time).format("HH:mm")}
        </span>
      ),
    },
    {
      title: <span className="">Status</span>,
      dataIndex: "status",
    },
    {
      title: <span className="">Actions</span>,
      dataIndex: "actions",
      render: (text, record) => (
        <div className="flex">
          {record.status === "pending" && (
            <div className="flex">
              <button
                className="btn p-2 m-2 btn-success "
                onClick={() => {
                  handleStatus(record, "approved");
                }}
              >
                Approve
              </button>
              <button
                className="btn p-2 m-2 btn-danger"
                onClick={() => {
                  handleStatus(record, "reject");
                }}
              >
                Reject
              </button>
            </div>
          )}
        </div>
      ),
    },
  ];
  return (
    <Layout>
      <Table
        columns={columns}
        dataSource={appointments}
        className="md:bg-white dark:bg-black m-2"
      />
    </Layout>
  );
};

export default DoctorAppointment;
