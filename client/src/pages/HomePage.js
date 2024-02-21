import { Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DoctorList from "../components/DoctorList";
import Layout from "./../components/Layout";

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);

  const getUserData = async () => {
    try {
      const res = await axios.get("/api/v1/user/getAllDoctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
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
        <h1 className="homepage-title">Welcome to Nirogya</h1>
        <hr />
        <Row className="doctor-list-container">
          {doctors &&
            doctors.map((doctor) => (
              <DoctorList key={doctor._id} doctor={doctor} />
            ))}
        </Row>
      </div>
    </Layout>
  );
};

export default HomePage;
