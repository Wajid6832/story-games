
import React from 'react';
import styles from './Application.module.css';
import square from '../../../../assets/square.png';
// import upload from '../../../../assets/upload.png';
import download from '../../../../assets/download.png'
import Frame1 from '../../../../assets/Frame.png';
const Application = () => {
  return (
    <div className={styles.application}>
      <div className={styles.flexible}>
        <div className={styles.content}>
          <div className={styles.img}>
            <img src={square} alt="square" />
            <h1>Application</h1>
          </div>
          <hr />
          <div className={styles.section}>
            <h1>Applicant Full Name</h1>
            <h2>Example of work:</h2>
            
            <div className={styles.imagContainer}>
              <div className={styles.text}>
            <img src={download} alt="Download" />
            <p>Download sample work </p>
            </div>
            </div>
            <div className={styles.buttons}>
              <button className={styles.btn1}>Save Candidate</button>
              <button className={styles.btn2}>Accept Candidate</button>
              <button className={styles.btn3}>Reject Candidate</button>
            </div>
          </div>
          <div className={styles.foot}>
            <img src={Frame1} alt="footer" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Application;