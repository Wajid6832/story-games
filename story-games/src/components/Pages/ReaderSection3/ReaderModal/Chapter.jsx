import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const RejectedNovelCard = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa", 
      }}
    >
      <div
        className="d-flex flex-column flex-md-row border rounded shadow-sm overflow-hidden"
        style={{
          width: "815px",
          minHeight: "445px",
          borderRadius: "10px",
          backgroundColor: "#fff",
      
        }}
      >
        {/* Left Image Section */}
        <div
          className="d-flex align-items-center justify-content-center bg-light"
          style={{
            width: "35%",
            minHeight: "400px",
          }}
        >
          <i className="bi bi-image fs-1 text-secondary"></i>
        </div>

        {/* Right Content Section */}
        <div className="p-4" style={{ width: "65%", position: "relative" }}>
          {/* Close Button */}
          <button
            type="button"
            className="btn-close position-absolute"
            style={{ top: "15px", right: "15px" }}
          ></button>

          {/* Genre */}
          <p
            className="mb-1 text-muted"
            style={{ fontSize: "0.9rem", marginBottom: "0" }}
          >
            Book Name
          </p>

          {/* Novel Name */}
          <h5 className="fw-bold mb-2" style={{ fontSize: "1.25rem" }}>
            Chapter 1 Name
          </h5>

          {/* Author + Writer */}
          <div className="mb-3">
            <span
              className="text-primary me-3"
              style={{ fontSize: "0.95rem", cursor: "pointer" }}
            >
              Author Name
            </span>
            <span
              className="text-primary"
              style={{ fontSize: "0.95rem", cursor: "pointer" }}
            >
              Written by Jon Doe
            </span>
          </div>

          {/* Description */}
          <p
            className="text-muted"
            style={{
              fontSize: "0.9rem",
              lineHeight: "1.5",
              marginBottom: "1.5rem",
            }}
          >
         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis mod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          </p>

          {/* Rejected Button */}
          <div className="mt-auto">
            <button
              className="btn text-white px-4"
              style={{
                backgroundColor: "#6f8bda",
                borderRadius: "25px",
                fontWeight: "500",
                width: "100%",
                height: "50px",
                
              }}
            >
              Read Chapter 1 
              <i className="bi bi-chevron-right fs-6 ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectedNovelCard;
