import React, { useState } from "react";
import styles from "./ReadersInfo.module.css";
import illustration from "../../assets/Readers-Assets/images/Group.png";
import eyeOpen from "../../assets/Readers-Assets/icons/eye.png";
import eyeClose from "../../assets/Readers-Assets/icons/eye slashed.png";
import emailIcon from "../../assets/Readers-Assets/icons/mail.png";
import userIcon from "../../assets/Readers-Assets/icons/profile.png";
import lockIcon from "../../assets/Readers-Assets/icons/password.png";
import closeIcon from "../../assets/Readers-Assets/icons/close.png";

const ReadersInfo = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    referringId: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isOpen, setIsOpen] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.formCard}>
        <button className={styles.closeButton} onClick={handleClose} aria-label="Close">
          <img src={closeIcon} alt="close" />
        </button>
        <div className={styles.illustrationContainer}>
          <img src={illustration} alt="Illustration" className={styles.formIllustration} />
        </div>
        <h2 className={styles.formTitle}>Add Your Information</h2>
        <form className={styles.infoForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <span className={styles.inputIcon}>
              <img src={emailIcon} alt="email icon" />
            </span>
            <input
              type="email"
              placeholder="Enter Email Address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <span className={styles.inputIcon}>
              <img src={userIcon} alt="user icon" />
            </span>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <span className={styles.inputIcon}>
              <img src={userIcon} alt="referring icon" />
            </span>
            <input
              type="text"
              placeholder="Referring Member ID"
              name="referringId"
              value={formData.referringId}
              onChange={handleInputChange}
            />
          </div>
          <div className={`${styles.inputGroup} ${styles.passwordGroup}`}>
            <span className={styles.inputIcon}>
              <img src={lockIcon} alt="lock icon" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <img
              src={showPassword ? eyeOpen : eyeClose}
              alt="Toggle password"
              onClick={() => setShowPassword((s) => !s)}
              className={styles.togglePasswordImg}
              role="button"
            />
          </div>
          <div className={`${styles.inputGroup} ${styles.passwordGroup}`}>
            <span className={styles.inputIcon}>
              <img src={lockIcon} alt="lock icon" />
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <img
              src={showConfirmPassword ? eyeOpen : eyeClose}
              alt="Toggle confirm password"
              onClick={() => setShowConfirmPassword((s) => !s)}
              className={styles.togglePasswordImg}
              role="button"
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Proceed To Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReadersInfo;
