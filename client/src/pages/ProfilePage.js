// ProfilePage.js
import { Card, Col, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/ProfileStyles.css";

const ProfilePage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/v1/user/getUsersData", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        if (response.data.success) {
          setUser(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Layout>
      <div className="profile-container">
        <h1 className="profile-title">User Profile</h1>
        <hr />
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <Card title="User Details" style={{ width: "100%" }}>
              <p>
                <b>Name: </b> {user.name}
              </p>
              <p>
                <b>Email: </b> {user.email}
              </p>
              <p>
                <b>User Type: </b> {user.isAdmin ? "Admin" : user.isDoctor ? "Doctor" : "Patient"}
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default ProfilePage;
