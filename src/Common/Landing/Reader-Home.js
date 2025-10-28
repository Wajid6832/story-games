import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ebookImg from "../../assets/Frame1.png";
const ReaderHome = () => {
  const navigate = useNavigate();
  const cards = Array(6).fill(null);
  const handleNavigation = (path) => navigate(path);
  const handleAuth = (action) => console.log(`${action} clicked`);
  return (
    <section className="py-5 text-dark" style={{ background: "#F8F9FA" }}>
      <div className="container px-4 px-md-5 bg-white rounded-5 shadow-sm py-5">
        <div className="row align-items-center g-4 mb-5">
          <div className="col-lg-6">
            <h1 className="fw-bold mb-2">Story Host</h1>
            <p className="text-secondary mb-2">Lorem ipsum dolor sit amet</p>
            <div
              className="mb-3"
              style={{ width: 80, height: 3, backgroundColor: "#FFC107" }}
            ></div>
            <p className="small text-secondary mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <div className="d-flex gap-2 flex-wrap mb-3">
              <button
                className="btn btn-secondary fw-normal px-4 py-2"
                onClick={() => handleAuth("Sign Up")}
              >
                Sign Up
              </button>
              <button
                className="btn btn-outline-secondary fw-normal px-4 py-2"
                onClick={() => handleAuth("Sign In")}
              >
                Sign In
              </button>
            </div>
            <button
              className="btn btn-link p-0 text-primary fw-normal text-decoration-none"
              onClick={() => handleNavigation("/home")}
            >
              Browse as Guest
            </button>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={ebookImg}
              alt="Reader illustration"
              className="img-fluid"
              style={{ maxHeight: "320px" }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center flex-wrap">
          <div className="d-flex flex-grow-1 gap-3 overflow-hidden">
            {cards.map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 d-flex justify-content-center align-items-center rounded-3 shadow-sm"
                style={{
                  width: "120px",
                  minHeight: "150px",
                  backgroundColor:
                    index === 0 ? "rgba(233,236,239,0.5)" : "#ADB5BD",
                  border: index === 0 ? "1px solid #DEE2E6" : "none",
                }}
              >
                <i
                  className="bi bi-image fs-4"
                  style={{ color: index === 0 ? "#CED4DA" : "#495057" }}
                ></i>
              </div>
            ))}
          </div>
          <div className="ms-auto ps-3">
            <button
              className="btn btn-link fw-bold text-dark text-decoration-none position-relative fs-5"
              onClick={() => handleNavigation("/readinghome")}
            >
              Top Lists
              <span
                className="position-absolute start-0 bottom-0"
                style={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "#FFC107",
                  borderRadius: "2px",
                  opacity: 0.8,
                }}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ReaderHome;