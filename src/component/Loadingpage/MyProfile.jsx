
import React from 'react'

import styles from './MyProfile.module.css'
import Group100 from '../../assets/img1/Group 100.png'
import Group1100 from '../../assets/img1/Group 1100.png'
import mail from '../../assets/img1/mail.png'
import profile from '../../assets/img1/profile.png'
const MyProfile = () => {
  return (
   <div>
    <div>
    <div className={styles.myProfile}>
      <h3 className={styles.profile}>My Profile</h3>
     
     <hr className={styles.bigLine} />
       <div className={styles.img5}>
      <img src={Group100} alt="" />
      <img  src={Group1100} alt="" />
    </div>
    <div className={styles.heading}>
    <h5>basic information</h5>
    </div>
    <div className={styles.input}>
        <div className={styles.emailImag}>
          <img src={mail} alt="" className={styles.icon}/>
      <input type="text" placeholder='mail@mail.com' className={styles.emailInput}/>
      </div>
      <div className={styles.userImag}>
        <img src={profile} alt="" className={styles.icon2}/>
      <input type="text" placeholder='user_name01' className={styles.userInput}/>
      </div>
    </div>
    <div className={styles.description}>
      <div>

    <input type="text"  placeholder='About me' className={styles.description1}/>
    </div>
    
     <input type="text" placeholder='upload profile picture'/>
    </div>
    </div>
    
  
   </div>
 
   </div>
   
  )
}

export default MyProfile
