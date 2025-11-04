import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearState } from "../../../features/auth/auth.slice";
import Mail from "../../../assets/icon.png";
import Password from "../../../assets/password.png";
import styles from "./EditorLogin.module.css";
import illustration from "../../../assets/Frame (2).png";

const EditorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => state.auth
  );
  const togglePassword = () => setShowPassword(!showPassword);
  const handleLoginForm = async () => {
    setErrorMessage("");
    if (!email.trim() || !password.trim()) {
      setErrorMessage("Please enter both email and password");
      return;
    }
    const data = await dispatch(loginUser({ email, password })).unwrap();
    if (data && data?.role) {
      if (data.role === "editor") {
        console.log('111')
        navigate("/editorHome");
      } else if (data.role === "writer") {
        console.log('222')
        navigate("/writerHome");
      } else if (data.role === "reader") {
        console.log('333')
        navigate("/readerHome")
      } else if (data.role === "producer") {
        console.log('444')
        navigate("/producerHome");
      } else {
        console.log('555')
        navigate("/");
      }
    }
  };
  return (
    <div className={styles.mainLandingDiv}>
      <div className={styles.landingSecondDiv}>
        <div className={styles.ladingContentDiv}>
          <div className={styles.landignContent}>
            <div className={styles.contentUpper}>
              <div className={styles.content}>
                <div className={styles.heading}>
                  <p>STORY HOST</p>
                </div>
                <div className={styles.secondHeading}>
                  <p>Lorem ipsum dolor sit amet</p>
                  <div className={styles.dashtLine}></div>
                </div>
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                {/* Email Input */}
                <div className={styles.inputGroup}>
                  <img src={Mail} alt="" />
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                  />
                </div>
                {/* Password Input */}
                <div className={styles.inputGroup}>
                  <img src={Password} alt="" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                  />
                  <button className={styles.eyeIcon} onClick={togglePassword}>
                    <i className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}></i>
                  </button>
                </div>
                <div className={styles.butons}>
                  <div className={styles.btn}>
                    <div className={styles.signup}>
                      <button onClick={handleLoginForm} disabled={isLoading}>
                        {isLoading ? "Signing In..." : "Sign In"}
                      </button>
                    </div>
                    <div className={styles.signin}>
                      <button>Forgot Password?</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.image}>
                <img src={illustration} alt="Illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditorLogin;
