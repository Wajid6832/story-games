import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiMailSend, BiLockAlt, BiShow, BiHide } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./EditorLogin.module.css";
import illustration from "../../../assets/Frame (2).png";
const EditorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLoginForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!emailRegex.test(email) || !passwordRegex.test(password)) {
      alert("Please enter valid data");
      return;
    }
    const loginData = { email, password };
    console.log("Login Data:", loginData);
    setEmail("");
    setPassword("");
    navigate("/editorhome");
  };
  return (
    <div
      className={`${styles.mainLandingDiv} d-flex justify-content-center align-items-center`}
    >
      <div className={`${styles.landingSecondDiv} w-100`}>
        <div className={`${styles.ladingContentDiv} container py-5`}>
          <div className="row align-items-center">
            {/* Left Section */}
            <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
              <h2 className="fw-bold">STORY HOST</h2>
              <div className="d-flex align-items-center justify-content-md-start justify-content-center gap-3 my-3">
                <p className="mb-0 fs-5">Lorem ipsum dolor sit amet</p>
                <div className={styles.dashtLine}></div>
              </div>
              <div className="mb-3 position-relative">
                <BiMailSend className={`${styles.icon}`} />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="form-control ps-5"
                />
              </div>
              <div className="mb-3 position-relative">
                <BiLockAlt className={`${styles.icon}`} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="form-control ps-5 pe-5"
                />
                <button
                  type="button"
                  className={`${styles.eyeIcon}`}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <BiShow /> : <BiHide />}
                </button>
              </div>
              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mt-4">
                <button
                  onClick={handleLoginForm}
                  className="btn btn-primary px-4"
                >
                  Sign In
                </button>
                <button className="btn btn-outline-primary px-4">
                  Forgot Password?
                </button>
              </div>
            </div>
            {/* Right Section Image */}
            <div className="col-md-6 text-center">
              <img
                src={illustration}
                alt="Illustration"
                className="img-fluid"
                style={{ maxWidth: "260px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditorLogin;