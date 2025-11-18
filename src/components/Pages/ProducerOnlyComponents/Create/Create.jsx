import React, { useState } from 'react';
import styles from './Create.module.css';
import Group from '../../../../assets/Group.png';
import write from '../../../../assets/write.png';
import document from '../../../../assets/document.png';
import { RxCrossCircled } from "react-icons/rx";

const Create = ({onClose }) => {
  const [data, setData] = useState({ submissionName: "" });

  const handleChange = (e) => setData({ submissionName: e.target.value });


  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <div className={styles.createContainer}>
          <RxCrossCircled className={styles.crossIcon} onClick={onClose} />

          <div className={styles.illustration}>
            <img src={Group} alt="illustration" />
          </div>

          <h2 className={styles.title}>Create Submission</h2>

          <div className={styles.inputContainer}>
            <img src={write} alt="icon" className={styles.inputImg} />
            <input
              type="text"
              onChange={handleChange}
              value={data.submissionName}
              placeholder="Create Submission Name"
              className={styles.inputField}
            />
          </div>

          <button className={styles.uploadBtn}>Upload Adventure Log From Writer</button>

          <h4 className={styles.uploadedTitle}>Uploaded Document</h4>
          <div className={styles.uploadedBox}>
            <img src={document} alt="" className={styles.documentImg} />
            <div className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </div>
          </div>

          <button className={styles.btn}>Submit Submission</button>
        </div>
      </div>
    </div>
  );
};

export default Create;
