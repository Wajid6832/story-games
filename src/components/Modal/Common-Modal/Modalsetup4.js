import React from "react";
import style from "../Common-Modal/Modalsetup4.module.css";
import image from "../../../assets/icon.png";
import images from "../../../assets/favourites.png";
import { ImCross } from "react-icons/im";
import likeimage from   "../../../assets/likes.png"
function Modalsetup4({ onHide, selectedWorkRoom, setcomponentIndex }) {
  return (
    <div className={style.overlay} onClick={onHide}>
      <div className={style.wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={style.icon}>
          <img src={image} alt="icon" />
        </div>

        <div className={style.text}>
          <button onClick={onHide} className={style.closeBtn}>
            <ImCross />
          </button>

          <p className={style.genre}> <img src={images} alt=""/></p>
          <h2 className={style.title}>Novel {selectedWorkRoom}</h2>
         

          <p className={style.desc}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>

          <p className={style.desc}>
            Tempor sed lectus mauris luctus euismod. At tristique sed ut
            suspendisse nam. Malesuada magna wisi enim ad minim veniam.
          </p>
            <span className={style.like}><img src={likeimage}/>&nbsp;Likes(5)</span>  
          <button className={style.applyBtn} >Read Novel</button>
        </div>
      </div>
    </div>
  );
}

export default Modalsetup4;
