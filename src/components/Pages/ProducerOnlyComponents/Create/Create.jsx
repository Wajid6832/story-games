import React from 'react'
import styles from './Create.module.css'

import Group from '../../../../assets/Group.png'
import write from '../../../../assets/write.png'
import document from '../../../../assets/document.png'
import { RxCrossCircled } from "react-icons/rx";
const Create = () => {
  return (
    <div className={styles.createContainer}>
      <div >
      <RxCrossCircled className={styles.crossIcon} />
      </div>
      <div className={styles.illustration}>
        <img src={Group} alt="illustration" />
      </div>

      <h2 className={styles.title}>Create Submission</h2>
      <div className={styles.inputContainer}>
        <img src={write} alt="icon" className={styles.inputImg} />
        <input
          type="text"
          placeholder="Create Submission Name"
          className={styles.inputField}
        />
      </div>

      <button className={styles.uploadBtn}>Upload Adventure Log From Writer</button>

      <h4 className={styles.uploadedTitle}>Uploaded Document</h4>

      <div className={styles.uploadedBox}>
        <p>
          <img src={document} alt="" className={styles.documentImg} />
          <div className={styles.text}>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.
          </div>
        </p>
      </div>

      <button className={styles.btn}>Submit Submission</button>
    </div>

  )
}

export default Create

