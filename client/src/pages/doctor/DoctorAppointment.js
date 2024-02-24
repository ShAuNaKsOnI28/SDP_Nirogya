import { Table, message } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout";

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
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.doctorInfo.FirstName} {record.doctorInfo.LastName}
        </span>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (text, record) => <span>{record.doctorInfo.Phone}</span>,
    },
    {
      title: "Date & Time",
      dataIndex: "date",
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
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className=" flex">
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
      <div className="text-center">
        <h1>Appoinmtnets Lists</h1>
      </div>
      <hr />
      <Table columns={columns} dataSource={appointments} />
    </Layout>
  );
};

export default DoctorAppointment;
