import { Table, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  //getUsers
  const getDoctors = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllDoctors", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAccountStatus = async (record, status) => {
    try {
      const res = await axios.post(
        "/api/v1/admin/changeAccountStatus",
        { doctorId: record._id, userId: record.userId, status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        window.location.reload();
      }
    } catch (error) {
      message.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.FirstName} {record.LastName}
        </span>
      ),
    },
    {
      title: "Specialization",
      dataIndex: "Specialization",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Phone",
      dataIndex: "Phone",
    },
    {
      title: "Consultation Fees",
      dataIndex: "FeesPerConsultation",
    },
    {
      title: "Experince",
      dataIndex: "Experince",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" ? (
            <button
              className="btn btn-success"
              onClick={() => handleAccountStatus(record, "approved")}
            >
              Approve
            </button>
          ) : record.status === "reject" ? (
            <button
              className="btn btn-success"
              onClick={() => handleAccountStatus(record, "approved")}
            >
              Approve
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => handleAccountStatus(record, "reject")}
            >
              Reject
            </button>
          )}
        </div>
      ),
    },
  ];
  for (let i = 0; i < 50; i++) {
    if (doctors.length > 10) {
      doctors.push({});
    }
  }
  return (
    <Layout>
      <body>
        <Table
          columns={columns}
          dataSource={doctors}
          className="pt-2 mx-8 -mb-18"
        />
      </body>
    </Layout>
  );
};

export default Doctors;
