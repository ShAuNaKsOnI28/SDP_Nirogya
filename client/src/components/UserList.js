import React from "react";
import { useNavigate } from "react-router-dom";

const UserList = ({ user }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card m-2 user-card rounded-none flex-1"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/user/give-prescription/${user._id}`)}
      >
        <div className="card-header md:bg-gray-100 dark:bg-gray-800 md:text-black dark:text-white">
          {user.salutation} {user.name}
        </div>
        <div className="card-body md:bg-white dark:bg-black md:text-black dark:text-white">
          <p>
            <b>Email: </b>
            {user.email}
          </p>
          <p>
            <b>Gender: </b>
            {user.gender}
          </p>
          <p>
            <b>Blood Group: </b>
            {user.bloodgroup}
          </p>
          {/*<p>
            <b>Timings: </b> {user.timings[0]} - {user.timings[1]}
          </p> */}
        </div>
      </div>
    </>
  );
};

export default UserList;
