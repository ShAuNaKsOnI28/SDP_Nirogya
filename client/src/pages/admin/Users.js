import { Table, message } from "antd";
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
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "unblock" ? (
            <button
              className="btn btn-danger"
              onClick={() => handleAccountStatus(record, "block")}
            >
              Block
            </button>
          ) : (
            <button
              className="btn btn-success"
              // onClick={()=>handleAccountStatus(record, "block")}
            >
              Unblock
            </button>
          )}
        </div>
      ),
      // render: (text, record) => (
      // <div className="d-flex">
      //   {record.status === "pending" ? (
      //     <button
      //       className="btn btn-success"
      //       onClick={() => handleAccountStatus(record, "approved")}
      //     >
      //       Approve
      //     </button>
      //   ) : (
      //     <button
      //       className="btn btn-danger"
      //       // onClick={() => handleAccountStatus(record, "reject")}
      //     >
      //       Reject
      //     </button>
      //   )}
      // </div>
      // ),
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
