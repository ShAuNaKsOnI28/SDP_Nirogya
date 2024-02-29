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
        className="card m-2 doctor-car rounded-none flex-1"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
        <div className="card-header  md:bg-gray-100 dark:bg-gray-800 md:text-black dark:text-white">
          Dr. {doctor.FirstName} {doctor.LastName}
        </div>
        <div className="card-body  md:bg-white dark:bg-black md:text-black dark:text-white">
          <p>
            <b>Specialization: </b>
            {doctor.Specialization}
          </p>
          <p>
            <b>Experience: </b>
            {doctor.Experince}
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
