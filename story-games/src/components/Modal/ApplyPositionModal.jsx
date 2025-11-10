import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ApplyPopup = () => {
  return (
    <div
      className="position-fixed top-50 start-50 translate-middle bg-white rounded shadow"
      style={{
        width: "400px",
        borderRadius: "10px",
        padding: "30px 35px",
        zIndex: "1050",
      }}
    >
      {/* Close Button */}
      <button
        type="button"
        className="btn-close position-absolute"
        style={{ top: "15px", right: "15px" }}
      ></button>

      {/* Paper Plane Icon */}
      <div className="text-center mb-3">
        <i
          className="bi bi-send"
          style={{
            fontSize: "2.5rem",
            color: "#4c6ef5",
            transform: "rotate(-20deg)",
          }}
        ></i>
      </div>

      {/* Heading */}
      <h5 className="text-center fw-bold mb-4">Apply for Position</h5>

      {/* Full Name Input */}
      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-text bg-white border-end-0">
            <i className="bi bi-person text-secondary"></i>
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Enter Full Name"
            style={{ backgroundColor: "#f8f9fa" }}
          />
        </div>
      </div>

      {/* Email Input */}
      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-text bg-white border-end-0">
            <i className="bi bi-envelope text-secondary"></i>
          </span>
          <input
            type="email"
            className="form-control border-start-0"
            placeholder="Enter Email Address"
            style={{ backgroundColor: "#f8f9fa" }}
          />
        </div>
      </div>

      {/* Upload Section */}
      <div
        className="border rounded text-center py-3 mb-4"
        style={{
          backgroundColor: "#f8f9fa",
          cursor: "pointer",
        }}
      >
        <i className="bi bi-cloud-upload text-secondary"></i>
        <span className="ms-2 text-secondary">Upload Sample Work</span>
      </div>

      {/* Apply Button */}
      <button
        className="btn w-100 text-white"
        style={{
          background: "linear-gradient(90deg, #5a67d8, #4c51bf)",
          border: "none",
        }}
      >
        Apply
      </button>
    </div>
  );
};

export default ApplyPopup;
