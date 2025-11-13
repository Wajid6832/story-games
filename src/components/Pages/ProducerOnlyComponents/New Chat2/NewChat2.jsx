

import React from "react";

import styles from './NewChat2.module.css'

import Group2 from '../../../../assets/img1/Group2.png'
import search from '../../../../assets/img1/search.png'
import fram from '../../../../assets/img1/Frame 512783.png'
const NewChat2 = () => {
  return (
    <div >
      <div className={styles.card}>
          <div>
            <img src={fram} alt="" className={styles.fram1}/>
          </div>
           <img src={Group2} alt="" className={styles.img2}/>
          <h2 className={styles.title}>Group Chat</h2>
            {/* <div className={styles.input}>
                 <div className={styles.leftInput}>
                    <input type="text" placeholder="Create Single Chat"/>
                 </div>
                 <div className={styles.rightInput}>
                    <input type="text" placeholder="Create Group"/>
                 </div>
            </div> */}
            <div className={styles.input}>
                <img src={search} alt="" className={styles.icon}/>
                <input type="text" placeholder="Search to Recipient"/>
            </div>
            <div className={styles.input2}>
                <input type="text" name="" id="" placeholder="Start Chat"/>
            </div>

            
            </div>
            </div>

  );
       
      
};

export default NewChat2;