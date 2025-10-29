import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaUser,
  FaUpload,
  FaLock,
  FaPen,
} from "react-icons/fa";
import styles from "./Profile.module.css";

export default function ProfilePage() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "mail@email.com",
    username: "user_name01",
    aboutMe: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.header}>My Profile</h1>

        {/* Gifts Section */}
        <div className={styles.giftsSection}>
          <div className={styles.giftCard}>
            <div className={styles.giftLabel}>Available Gift</div>
            <div className={styles.giftAmount}>100</div>
          </div>
          <div className={styles.giftCard}>
            <div className={styles.giftLabel}>Given Out Gift</div>
            <div className={styles.giftAmount}>100</div>
          </div>
        </div>

        {/* Basic Information */}
        <h2 className={styles.sectionTitle}>Basic Information</h2>
        <div className={styles.inputRow}>
          <div className={styles.inputGroup}>
            <FaEnvelope size={18} className={styles.inputIcon} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <FaUser size={18} className={styles.inputIcon} />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.textareaGroup}>
            <FaPen size={18} className={styles.inputIcon} />
            <textarea
              name="aboutMe"
              placeholder="About Me"
              value={formData.aboutMe}
              onChange={handleInputChange}
              className={styles.textarea}
            />
          </div>

          <div
            className={styles.uploadBox}
            onClick={() => alert("Upload functionality would go here")}
          >
            <FaUpload size={24} className={styles.uploadIcon} />
            <div className={styles.uploadText}>Upload Profile Picture</div>
          </div>
        </div>

        {/* Password Section */}
        <div className={styles.passwordSection}>
          <h2 className={styles.sectionTitle}>Password</h2>

          {/* Old Password */}
          <div className={styles.inputGroup}>
            <FaLock size={18} className={styles.inputIcon} />
            <input
              type={showOldPassword ? "text" : "password"}
              name="oldPassword"
              placeholder="Enter Old Password"
              value={formData.oldPassword}
              onChange={handleInputChange}
              className={styles.input}
            />
            <div
              className={styles.eyeIcon}
              onClick={() => setShowOldPassword(!showOldPassword)}
            >
              {showOldPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </div>
          </div>

          {/* New & Confirm Password */}
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <FaLock size={18} className={styles.inputIcon} />
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                placeholder="Create New Password"
                value={formData.newPassword}
                onChange={handleInputChange}
                className={styles.input}
              />
              <div
                className={styles.eyeIcon}
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </div>
            </div>

            <div className={styles.inputGroup}>
              <FaLock size={18} className={styles.inputIcon} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm New Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={styles.input}
              />
              <div
                className={styles.eyeIcon}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </div>
            </div>
          </div>

          <button
            className={`${styles.button} ${styles.primaryButton}`}
            onClick={() => alert("Password updated!")}
          >
            Update Password
          </button>
        </div>

        {/* Bank Account Section */}
        <div className={styles.bankSection}>
          <h2 className={styles.sectionTitle}>Bank Account</h2>
          <button
            className={`${styles.button} ${styles.secondaryButton}`}
            onClick={() => alert("Link bank account")}
          >
            Link Bank Account
          </button>
        </div>

        {/* Update Profile Button */}
        <button
          className={`${styles.button} ${styles.updateButton}`}
          onClick={() => alert("Profile updated!")}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}
