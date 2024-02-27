import { Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import UserList from "../components/UserList";

const HomePageUser = () => {
  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    try {
      const res = await axios.get("/api/v1/user/getAllUsers", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
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
    getUserData();
  }, []);
  return (
    <Layout>
      <div className="homepage-container">
        <Row className="doctor-list-container">
          {users &&
            users.map((user) => <UserList key={user._id} user={user} />)}
        </Row>
      </div>
    </Layout>
  );
};

export default HomePageUser;
