import React from "react";
import style from "../Common-Modal/Modalstep3.module.css";
import image from "../../../assets/icon.png";
import { ImCross } from "react-icons/im";

function Modalsetup3({ onHide, selectedWorkRoom, setcomponentIndex }) {
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

          <p className={style.genre}>Genre</p>
          <h3 className={style.title}>Novel {selectedWorkRoom}</h3>
          <p className={style.authors}>
            <span className={style.span}>Author Name</span> •{" "}
            <span className={style.span}>Writer Name</span>
          </p>

          <p className={style.desc}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>

          <p className={style.desc}>
            Tempor sed lectus mauris luctus euismod. At tristique sed ut
            suspendisse nam. Malesuada magna wisi enim ad minim veniam.
          </p>

          <button className={style.applyBtn} >saved</button>
        </div>
      </div>
    </div>
  );
}

export default Modalsetup3;
