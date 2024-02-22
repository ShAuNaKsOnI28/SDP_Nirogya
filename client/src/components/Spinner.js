import React from "react";
// import "../styles/Spinner.css";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center spinner-container">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
