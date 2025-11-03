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
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Profile.module.css"; // still used for colors/theme

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
    <div className={`container-fluid ${styles.pageWrapper}`}>
      <div className={`card shadow p-4 border-0 ${styles.card}`}>
        <h1 className={`${styles.header} mb-4`}>My Profile</h1>

        {/* Gifts Section */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-md-6">
            <div className={`${styles.giftCard}`}>
              <div className={styles.giftLabel}>Available Gift</div>
              <div className={styles.giftAmount}>100</div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={`${styles.giftCard}`}>
              <div className={styles.giftLabel}>Given Out Gift</div>
              <div className={styles.giftAmount}>100</div>
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <h2 className={`${styles.sectionTitle} mb-3`}>Basic Information</h2>
        <div className="row g-3 mb-3">
          <div className="col-12 col-md-6 position-relative">
            <FaEnvelope size={18} className={styles.inputIcon} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control ps-5"
            />
          </div>
          <div className="col-12 col-md-6 position-relative">
            <FaUser size={18} className={styles.inputIcon} />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="form-control ps-5"
            />
          </div>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-12 col-md-6 position-relative">
            <FaPen size={18} className={styles.inputIcon} />
            <textarea
              name="aboutMe"
              placeholder="About Me"
              value={formData.aboutMe}
              onChange={handleInputChange}
              className="form-control ps-5"
              rows="3"
            />
          </div>
          <div className="col-12 col-md-6">
            <div
              className={`${styles.uploadBox}`}
              onClick={() => alert("Upload functionality would go here")}
            >
              <FaUpload size={24} className={styles.uploadIcon} />
              <div className={styles.uploadText}>Upload Profile Picture</div>
            </div>
          </div>
        </div>

        {/* Password Section */}
        <div className={`${styles.passwordSection} mb-4`}>
          <h2 className={`${styles.sectionTitle} mb-3`}>Password</h2>

          {/* Old Password */}
          <div className="position-relative mb-3">
            <FaLock size={18} className={styles.inputIcon} />
            <input
              type={showOldPassword ? "text" : "password"}
              name="oldPassword"
              placeholder="Enter Old Password"
              value={formData.oldPassword}
              onChange={handleInputChange}
              className="form-control ps-5"
            />
            <div
              className={styles.eyeIcon}
              onClick={() => setShowOldPassword(!showOldPassword)}
            >
              {showOldPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </div>
          </div>

          {/* New & Confirm Password */}
          <div className="row g-3">
            <div className="col-12 col-md-6 position-relative">
              <FaLock size={18} className={styles.inputIcon} />
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                placeholder="Create New Password"
                value={formData.newPassword}
                onChange={handleInputChange}
                className="form-control ps-5"
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

            <div className="col-12 col-md-6 position-relative">
              <FaLock size={18} className={styles.inputIcon} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm New Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="form-control ps-5"
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
            className={`btn btn-primary mt-3 ${styles.primaryButton}`}
            onClick={() => alert("Password updated!")}
          >
            Update Password
          </button>
        </div>

        {/* Bank Account Section */}
        <div className={`${styles.bankSection} mb-4`}>
          <h2 className={`${styles.sectionTitle} mb-3`}>Bank Account</h2>
          <button
            className={`btn btn-outline-primary ${styles.secondaryButton}`}
            onClick={() => alert("Link bank account")}
          >
            Link Bank Account
          </button>
        </div>

        {/* Update Profile Button */}
        <div className="d-grid">
          <button
            className={`btn btn-warning text-white fw-semibold ${styles.updateButton}`}
            onClick={() => alert("Profile updated!")}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}