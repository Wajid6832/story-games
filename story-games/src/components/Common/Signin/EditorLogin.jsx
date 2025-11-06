import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../features/auth/auth.slice";
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
  const { isLoading } = useSelector((state) => state.auth);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLoginForm = async () => {
    setErrorMessage("");

    if (!email.trim() || !password.trim()) {
      setErrorMessage("Please enter both email and password");
      return;
    }

    try {
      const data = await dispatch(loginUser({ email, password })).unwrap();

      if (data && data.role) {
        const role = data.role.toLowerCase();

        switch (role) {
          case "writer":
            navigate("/writerHome");
            break;
          case "editor":
            navigate("/editorHome");
            break;
          case "reader":
            navigate("/readerHome");
            break;
          case "producer":
            navigate("/producerHome");
            break;
          default:
            navigate("/");
        }
      }
    } catch (err) {
      setErrorMessage(err?.error || "Invalid credentials!");
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
                  <p>Welcome Back</p>
                  <div className={styles.dashtLine}></div>
                </div>

                {errorMessage && (
                  <p style={{ color: "red", fontSize: "0.9rem" }}>{errorMessage}</p>
                )}

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
                    <i
                      className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}
                    ></i>
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
                      <button onClick={() => navigate("/signup")}>
                        Sign Up
                      </button>
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
