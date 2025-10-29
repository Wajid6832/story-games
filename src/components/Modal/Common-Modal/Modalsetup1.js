import React, { useState, useEffect } from "react";
import style from "../Common-Modal/Modal.module.css";
import image from "../../../assets/icon.png";
import { ImCross } from "react-icons/im";

function Modalsetup1({ onHide, selectedWorkRoom, setcomponentIndex }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Mount animation
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onHide();
    }, 300);
  };

  return (
    <div 
      className={`${style.overlay} ${isVisible ? style.visible : ''} ${isClosing ? style.closing : ''}`} 
      onClick={handleClose}
    >
      <div 
        className={`${style.wrapper} ${isVisible ? style.visible : ''} ${isClosing ? style.closing : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.icon}>
          <img src={image} alt="icon" />
        </div>

        <div className={style.text}>
          <button onClick={handleClose} className={style.closeBtn}>
            <ImCross />
          </button>

          <div className={style.content}>
            <p className={style.genre}>Genre</p>
            <h3 className={style.title}>Novel {selectedWorkRoom}</h3>
            <p className={style.authors}>
              <span className={style.span}>Author Name</span> •{" "}
              <span className={style.span}>Writer Name</span>
            </p>

            <div className={style.descContainer}>
              <p className={style.desc}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat.
              </p>

              <p className={style.desc}>
                Tempor sed lectus mauris luctus euismod. At tristique sed ut
                suspendisse nam. Malesuada magna wisi enim ad minim veniam.
              </p>
            </div>
          </div>

          <button 
            className={style.applyBtn} 
            onClick={() => setcomponentIndex(1)}
          >
            Apply for Position
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modalsetup1;