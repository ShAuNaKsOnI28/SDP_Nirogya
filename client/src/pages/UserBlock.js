import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const UserBlock = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
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

    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);

    blockUser();
  }, []);
  console.log(user);
  return (
    <div className="text-2xl text-center font-bold pt-5">
      User Blocked
      {isVisible && (
        <div className="text-lg font-medium p-2">
          Name = {user.salutation + " " + user.fname + " " + user.lname} <br />
          Email ={user.email}
        </div>
      )}
      <div onClick={handleLogout}>
        <Link to="/login">go back to login</Link>
      </div>
    </div>
  );
};

export default UserBlock;
