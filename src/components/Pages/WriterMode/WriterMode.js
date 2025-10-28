import React from "react";
import styles from "./WriterMode.module.css";

function WriterMode({ onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <div className={styles.iconWrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80"
            viewBox="0 0 512 512"
            width="80"
          >
            <path
              fill="#f9bb00"
              d="M256 32L20 464h472L256 32z"
              stroke="#e5a400"
              strokeWidth="8"
            />
            <rect x="240" y="160" width="32" height="160" fill="#333" />
            <circle cx="256" cy="360" r="16" fill="#333" />
          </svg>
        </div>

        <h5>Writer mode NOT active</h5>
        <button className={styles.primaryBtn}>Become a Writer</button>
      </div>
    </div>
  );
}

export default WriterMode;