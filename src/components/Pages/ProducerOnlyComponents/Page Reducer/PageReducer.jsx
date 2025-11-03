import React from "react";
import styles from './PageReduced.module.css'
import { AiOutlineLike } from "react-icons/ai";
import { BiCoinStack } from "react-icons/bi";
import { IoMdBook } from "react-icons/io";
import images from '../../../../assets/images.png'
import frame from '../../../../assets/Frame 512783.png'

const PageReducer = () => {
  return (
    <div className={styles.pageContainer}>
      
      <div className={styles.imageSection}>
        <div className={styles.imagePlaceholder}>
          <i className={styles.Img}></i>
          <img src={images} alt="" />
        </div>
        <button className={`${styles.arrowBtn} ${styles.leftArrow}`}></button>
      </div>

      <div className={styles.contentSection}>
        <div >
        <img className={styles.crossIcon} src={frame} alt="" />
        </div>
        <p className={styles.genre}>Genre</p>
        <h1 className={styles.novelTitle}>Novel Name</h1>
        <p className={styles.author}>
          <span>Author Name</span> • <span>Writer Name</span>
        </p>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis.
        </p>

        
        <div className={styles.stats}>
          <span>
            <AiOutlineLike className={styles.icon} /> Likes (5)
          </span>
          <span>
            <BiCoinStack className={styles.icon} /> Good Read Tokens (5)
          </span>
          <span>
            <IoMdBook className={styles.icon} /> Total Reads (50)
          </span>
        </div>

      
        <div className={styles.buttons}>
          <button className={styles.prevBtn}>← Previous Chapter</button>
          <button className={styles.enterBtn}>Enter Workroom</button>
        </div>

    
        <div className={styles.footerBtn}>
          <button>Create Next Chapter </button>
        </div>
      </div>

    
      <button className={`${styles.arrowBtn} ${styles.rightArrow}`}></button>
    </div>
  );
};

export default PageReducer;



// import React from "react";
// import style from "./PageReduced.module.css";
// import image from "../../../../assets/icon.png"
// import images from "../../../../assets/favourites.png";
// import { ImCross } from "react-icons/im";
// import likeimage from   "../../../../assets/likes.png"
// function Modalsetup4({ onHide, selectedWorkRoom, setcomponentIndex }) {
//   return (
//     <div className={style.overlay} onClick={onHide}>
//       <div className={style.wrapper} onClick={(e) => e.stopPropagation()}>
//         <div className={style.icon}>
//           <img src={image} alt="icon" />
//         </div>

//         <div className={style.text}>
//           <button onClick={onHide} className={style.closeBtn}>
//             <ImCross />
//           </button>

//           <p className={style.genre}> <img src={images} alt=""/></p>
//           <h2 className={style.title}>Novel {selectedWorkRoom}</h2>
         

//           <p className={style.desc}>
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
//             nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
//             volutpat.
//           </p>

//           <p className={style.desc}>
//             Tempor sed lectus mauris luctus euismod. At tristique sed ut
//             suspendisse nam. Malesuada magna wisi enim ad minim veniam.
//           </p>
//             <span className={style.like}><img src={likeimage}/>&nbsp;Likes(5)</span>  
//           <button className={style.applyBtn} >Read Novel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modalsetup4;
