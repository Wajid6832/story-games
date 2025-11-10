import React, { useState, useEffect } from "react";
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
import styles from "./Profile.module.css";

export default function ProfilePage() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    aboutMe: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  //Load logged-in user info from localStorage
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsed = JSON.parse(userData);
      setLoggedUser(parsed);
      setFormData((prev) => ({
        ...prev,
        email: parsed.email || "",
      }));
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //Handle password update
  const handlePasswordUpdate = async () => {
    const { oldPassword, newPassword, confirmPassword } = formData;

    if (!oldPassword || !newPassword || !confirmPassword) {
      alert("Please fill all password fields!");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New and confirm passwords do not match!");
      return;
    }

    if (!loggedUser) {
      alert("No user is logged in!");
      return;
    }

    try {
      // Get all users from API
      const res = await fetch("http://localhost:3000/users");
      const users = await res.json();

      // Find the current logged-in user
      const currentUser = users.find(
        (u) => u.email === loggedUser.email && u.role === loggedUser.role
      );

      if (!currentUser) {
        alert("User not found in database!");
        return;
      }

      // Verify old password
      if (currentUser.password !== oldPassword) {
        alert("Old password is incorrect!");
        return;
      }

      // Update password
      const updateRes = await fetch(
        `http://localhost:3000/users/${currentUser.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...currentUser,
            password: newPassword,
          }),
        }
      );

      if (updateRes.ok) {
        alert("Password updated successfully!");

        //Clear all fields including email
        setFormData({
          email: "",
          username: "",
          aboutMe: "",
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });

        //Optionally also clear localStorage login (so user must log in again)
        localStorage.removeItem("user");
        setLoggedUser(null);
      } else {
        alert("Failed to update password!");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      alert("Error connecting to API!");
    }
  };

  return (
    <div className={`container-fluid ${styles.pageWrapper}`}>
      <div className={`card shadow p-4 border-0 ${styles.card}`}>
        <h1 className={`${styles.header} mb-4`}>My Profile</h1>

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
              placeholder="Email"
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
              placeholder="Username"
            />
          </div>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-12 col-md-6 position-relative">
            <FaPen size={18} className={styles.penicon} />
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
          <h2 className={`${styles.sectionTitle} mb-3`}>Change Password</h2>

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
                {showNewPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
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
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
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
            onClick={handlePasswordUpdate}
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}
