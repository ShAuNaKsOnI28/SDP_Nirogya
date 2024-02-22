// import React from "react";
// import { useNavigate } from "react-router-dom";

// const DoctorList = ({ doctor }) => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div
//         className="card m-2"
//         style={{ cursor: "pointer" }}
//         onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
//       >
//         <div className="card-Header">
//           Dr. {doctor.FirstName}
//           {doctor.LastName}
//         </div>
//         <div className="card-body">
//           <p>
//             <b>Specialization: </b>
//             {doctor.Specialization}
//           </p>
//           <p>
//             <b>Experince: </b>
//             {doctor.Experince}
//           </p>
//           <p>
//             <b>Fees per Consultation: </b>
//             {doctor.FeesPerConsultation}
//           </p>
//           <p>
//             <b>Timings: </b> {doctor.timings[0]} - {doctor.timings[1]}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DoctorList;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DoctorListStyles.css"; // Add your DoctorListStyles.css or adjust styles as needed

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card m-2 doctor-card"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
        <div className="card-header">
          Dr. {doctor.FirstName} {doctor.LastName}
        </div>
        <div className="card-body">
          <p>
            <b>Specialization: </b>
            {doctor.Specialization}
          </p>
          <p>
            <b>Experience: </b>
            {doctor.Experience}
          </p>
          <p>
            <b>Fees per Consultation: </b>
            {doctor.FeesPerConsultation}
          </p>
          <p>
            <b>Timings: </b> {doctor.timings[0]} - {doctor.timings[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
