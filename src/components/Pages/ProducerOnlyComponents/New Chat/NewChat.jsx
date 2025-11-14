
import React from "react";

import styles from './NewChat.module.css'

import Group2 from '../../../../assets/img1/Group2.png'

import fram from '../../../../assets/img1/Frame 512783.png'
const NewChat = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
          <div>
            <img src={fram} alt="" className={styles.fram1}/>
          </div>
           <img src={Group2} alt="" className={styles.img2}/>
          <h2 className={styles.title}>Group Chat</h2>
            <div className={styles.input}>
                 <div className={styles.leftInput}>
                    <input type="text" placeholder="Create Single Chat"/>
                 </div>
                 <div className={styles.rightInput}>
                    <input type="text" placeholder="Create Group"/>
                 </div>
            </div>
            </div>
    </div>
  );
       
      
};

export default NewChat;
