import React from "react";

const UserList = ({ user }) => {
  // const navigate = useNavigate();
  return (
    <>
      <div
        className="card m-2 user-card"
        // style={{ cursor: "pointer" }}
        // onClick={() => navigate(`/doctor/abook-appointment/${user._id}`)}
      >
        <div className="card-header">
          {user.salutation} {user.name}
        </div>
        <div className="card-body">
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
