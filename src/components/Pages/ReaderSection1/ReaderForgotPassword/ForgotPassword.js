import React from "react";
// import { useNavigate } from "react-router";
// import { Mail } from "lucide-react";
import styles from "./ForgotPassword.module.css";
import FORGOT from "../../../../assets/Readers-Assets/icons/FORGOT.png";
function ForgotPassword() {
  //   const navigate = useNavigate();
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
                  <p>Forgot your Password? Add your email below.</p>
                  <div className={styles.dashtLine}></div>
                </div>
                {/* Email Input */}
                <div className={styles.inputGroup}>
                  <email className={styles.icon} size={20} />
                  <input
                    type="email"
                    placeholder="Enter Registered Email Address"
                    className={styles.input}
                  />
                </div>
                {/* Buttons */}
                <div className={styles.butons}>
                  <div className={styles.btn}>
                    <div className={styles.signup}>
                      <button>Reset Password</button>
                    </div>
                    <div className={styles.signin}>
                      <button>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Image Section */}
              <div className={styles.image}>
                <img src={FORGOT} alt="Illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;