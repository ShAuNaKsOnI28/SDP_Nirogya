import { Table, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout";
import "./../../styles/LayoutStyles.css";
const Users = () => {
  const [users, setUsers] = useState([]);

  //getUsers
  const getUsers = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllUsers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setUsers(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAccountStatus = async (record, status) => {
    try {
      const res = await axios.post(
        "/api/v1/admin/changeAccountStatusUser",
        { _id: record._id, status: status },
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
    getUsers();
  }, []);

  const columns = [
    {
      title: <span className=" text-center px-3 text-lg">Name</span>,
      dataIndex: "fname",
      render: (text,record) => (record.salutation+" "+record.fname+" "+record.lname),
    },
    {
      title: <span className=" text-center px-3 text-lg">Email</span>,
      dataIndex: "email",
      render: (text) => <span className="px-3">{text}</span>,
    },
    {
      title: <span className=" text-center px-3 text-lg">Doctor</span>,
      dataIndex: "isDoctor",
      render: (text, record) => (
        <span className="px-3">{record.isDoctor ? "Yes" : "No"}</span>
      ),
    },
    {
      title: <span className=" text-center px-3 text-lg">Status</span>,
      dataIndex: "status",
      render: (text) => <span className="px-3">{text}</span>,
    },
    {
      title: <span className=" text-center px-3 text-lg">Action</span>,
      dataIndex: "actions",
      render: (text, record) => (
        <div className="px-3">
          {record.status === "pending" ? (
            <button
              className="btn btn-success text-lg"
              onClick={() => handleAccountStatus(record, "unblock")}
            >
              Unblock
            </button>
          ) : record.status === "block" ? (
            <button
              className="btn btn-success text-lg"
              onClick={() => handleAccountStatus(record, "unblock")}
            >
              Unblock
            </button>
          ) : (
            <button
              className="btn btn-danger text-lg"
              onClick={() => handleAccountStatus(record, "block")}
            >
              Block
            </button>
          )}
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <body className=" md:bg-white dark:bg-black">
        <Table
          columns={columns}
          dataSource={users}
          className="pt-2 mx-8 -mb-18 bg-white"
          pagination={{ pageSize: 5 }}
        />
      </body>
    </Layout>
  );
};

export default Users;
