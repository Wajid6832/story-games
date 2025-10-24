import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Mail, Eye, EyeOff, Lock } from "lucide-react";
import styles from "./Login.module.css";
import illustration from "../assets/illustration.png";

function EditorLanding() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

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

                {/* Email Input */}
                <div className={styles.inputGroup}>
                  <Mail className={styles.icon} size={20} />
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className={styles.input}
                  />
                </div>

                {/* Password Input */}
                <div className={styles.inputGroup}>
                  <Lock className={styles.icon} size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className={styles.input}
                  />
                  {showPassword ? (
                    <EyeOff
                      className={styles.eyeIcon}
                      size={20}
                      onClick={togglePassword}
                    />
                  ) : (
                    <Eye
                      className={styles.eyeIcon}
                      size={20}
                      onClick={togglePassword}
                    />
                  )}
                </div>

                {/* Buttons */}
                <div className={styles.butons}>
                  <div className={styles.btn}>
                    <div className={styles.signup}>
                      <button>Sign In</button>
                    </div>
                    <div className={styles.signin}>
                      <button>Forgot Password?</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image Section */}
              <div className={styles.image}>
                <img src={illustration} alt="Illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorLanding;
