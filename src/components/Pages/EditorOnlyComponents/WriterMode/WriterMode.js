import React from "react";
import styles from "./WriterMode.module.css";
import writerImage from "../../../../assets/Readers-Assets/images/Frame (2).png";
import { useNavigate } from "react-router-dom";

function WriterMode({ onClose }) {
  const navigate = useNavigate();
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>

        <div className={styles.iconWrapper}>
          <img
            src={writerImage}
            alt="Writer Mode"
            className={styles.writerImage}
          />
        </div>

        <h5>Writer Mode Not Active</h5>
        <button onClick={() => navigate("/becomeWriter")} className={styles.primaryBtn}>Become a Writer</button>
      </div>
    </div>
  );
}

export default WriterMode;
