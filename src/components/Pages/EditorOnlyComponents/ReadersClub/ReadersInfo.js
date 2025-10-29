import React, { useState } from "react";
import styles from "./ReadersInfo.module.css";
import illustration from "../../../../assets/Readers-Assets/images/Group.png";

// ✅ React Icons
import { MdEmail } from "react-icons/md";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

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
        {/* Close Button */}
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close"
        >
          <IoMdClose size={22} />
        </button>

        {/* Illustration */}
        <div className={styles.illustrationContainer}>
          <img
            src={illustration}
            alt="Illustration"
            className={styles.formIllustration}
          />
        </div>

        {/* Title */}
        <h2 className={styles.formTitle}>Add Your Information</h2>

        {/* Form */}
        <form className={styles.infoForm} onSubmit={handleSubmit}>
          {/* Email */}
          <div className={styles.inputGroup}>
            <span className={styles.inputIcon}>
              <MdEmail />
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

          {/* Username */}
          <div className={styles.inputGroup}>
            <span className={styles.inputIcon}>
              <FaUser />
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

          {/* Referring Member ID */}
          <div className={styles.inputGroup}>
            <span className={styles.inputIcon}>
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="Referring Member ID"
              name="referringId"
              value={formData.referringId}
              onChange={handleInputChange}
            />
          </div>

          {/* Password */}
          <div className={`${styles.inputGroup} ${styles.passwordGroup}`}>
            <span className={styles.inputIcon}>
              <FaLock />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <span
              className={styles.togglePasswordImg}
              onClick={() => setShowPassword((s) => !s)}
              role="button"
            >
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className={`${styles.inputGroup} ${styles.passwordGroup}`}>
            <span className={styles.inputIcon}>
              <FaLock />
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <span
              className={styles.togglePasswordImg}
              onClick={() => setShowConfirmPassword((s) => !s)}
              role="button"
            >
              {showConfirmPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
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
