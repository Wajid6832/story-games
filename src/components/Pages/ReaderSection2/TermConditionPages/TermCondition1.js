import React from "react";
import styles from "./TermCondition1.module.css";
import backArrow from "../../../../assets/Readers-Assets/buttons/square.png";

const TermCondition1 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <button className={styles.backButton}>
            <img src={backArrow} alt="Back" className={styles.backIcon} />
          </button>
          <h1 className={styles.title}>Story Host</h1>
        </div>

        {/* Subtitle */}
        <div className={styles.subHeader}>
          <h3>Privacy Policy</h3>
          <div className={styles.underline}></div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.section}>
            <h4>Information We Collect</h4>
            <p>
              We collect personal data such as name, email, and preferences to
              improve your reading experience and provide personalized features
              on Story Host.
            </p>
          </div>

          <div className={styles.section}>
            <h4>How We Use Your Data</h4>
            <p>
              Your data helps us enhance platform functionality, recommend
              stories, and ensure better service quality while maintaining user
              privacy.
            </p>
          </div>

          <div className={styles.section}>
            <h4>Your Privacy Rights</h4>
            <p>
              You can update or delete your data anytime. We’re committed to
              keeping your information safe and secure at all times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermCondition1;
