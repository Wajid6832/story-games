


import React from "react";
import styles from './Book.module.css'

// import Book2 from './Book2.jsx'
import Group2 from '../../../../assets/img1/Group2.png'
import Avatar from '../../../../assets/img1/Avatar.png'
import img2 from '../../../../assets/img1/images.png'
import write from "../../../../assets/img1/write.png"
import search from '../../../../assets/img1/search.png'
import fram from '../../../../assets/img1/Frame 512783.png'
const Book = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
         
          <div>
            <img src={fram} alt="" className={styles.fram1}/>
          </div>
           <img src={Group2} alt="" className={styles.img2}/>
          <h2 className={styles.title}>Group Chat</h2>
        </div>

        <div className={styles.uploadSection}>
          <div className={styles.uploadCircle}>
            
            <img src={img2} alt="Upload" className={styles.uploadIcon} />
          </div>
          
          <p>Upload Group Photo</p>
        </div>

        
     <div className={styles.input1Container}>
          <img src={write} alt="icon" className={styles.inputImg} />
          <input
            type="text"
            placeholder="Create Group Name"
            className={styles.inputField}
          />
        </div>
       
          <div className={styles.textareaContainer}>
  <img src={write} alt="icon" className={styles.icon3} />
  <textarea
    placeholder="Create Group Description"
    className={styles.textarea}
  ></textarea>
</div>
          <div className={styles.input2Container}>
  <img src={search} alt="search icon" className={styles.searchIcon} />
  <input
    type="text"
    placeholder="l"
    className={styles.input1}
  />
</div>
<div className={styles.img}>
            <img src={Avatar} alt="" className={styles.IMG1}/>
            <img src={Avatar} alt="" className={styles.IMG1}/>
          </div>

          <button className={styles.createButton}>Create Group</button>
          
        </div>
        {/* <Book2 /> */}
      </div>
    
  );
};

export default Book;

      





    

    


    


