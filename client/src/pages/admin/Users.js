import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout";
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

  useEffect(() => {
    getUsers();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Doctors",
      dataIndex: "isDoctor",
      render: (text, record) => <span>{record.isDoctor ? "Yes" : "No"}</span>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (ext, record) => (
        <div className="d-flex">
          <button className="btn btn-danger">Block </button>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <h1 className="text-center m-2">User Lists</h1>
      <hr />
      <Table columns={columns} dataSource={users} />
    </Layout>
  );
};

export default Users;