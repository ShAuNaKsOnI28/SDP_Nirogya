import { Button } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Layout from "../components/Layout";

const UserBlock = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  //   const res = axios.post(
  //     "/api/v1/user/blockUser",
  //     { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  //   );
  useEffect(() => {
    const blockUser = async () => {
      try {
        const response = await axios.post("/api/v1/user/blockUser", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error blocking user:", error);
      }
    };

    blockUser();
  }, []);
  //   console.log(user.name);
  return (
    <div className="text-2xl text-center font-bold pt-5">
      User Blocked
      {/* <div className="text-lg font-medium p-2">
        {/* Name = {user.name} Email = {user.email} 
      </div>
      {/* <Button
        // to="http://localhost:3000/login"
        className="text-sm m-2 bg-blue-500 rounded-md p-2"
        onClick={() => navigate("/login")}
      >
        Go To Home
      </Button> */}
    </div>
  );
};

export default UserBlock;
