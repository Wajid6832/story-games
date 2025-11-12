
import React from "react";
import { useNavigate } from "react-router-dom"; 
import style from "./PageReduced.module.css";
import image from "../../../../assets/icon.png";
import square from "../../../../assets/square.png";
import Rsquare from "../../../../assets/rightsquare.png";
import { AiOutlineLike } from "react-icons/ai";
import { BiCoinStack } from "react-icons/bi";
import { IoMdBook } from "react-icons/io";
import Frame from "../../../../assets/Frame 512783.png";
import align from "../../../../assets/align-justify.png";

function PageReducer() {
  const navigate = useNavigate(); 

  const handleEnterWorkroom = () => {
    navigate("/workroom"); 
  };
  return (
    <div className={style.overlay}>
      <img src={square} alt="left" className={style.leftImage} />

      <div className={style.wrapper}>
        <div className={style.icon}>
          <img src={image} alt="icon" />
        </div>

        <div className={style.text}>
          <img src={Frame} alt="" className={style.closeBtn} />
          <p>Genre</p>
          <h2 className={style.title}>Novel Name</h2>
          <p className={style.author}>
            <span>Author Name</span> • <span>Writer Name</span>
          </p>

          <p className={style.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis.
          </p>

          <div className={style.stats}>
            <span>
              <AiOutlineLike /> Likes (5)
            </span>
            <span>
              <BiCoinStack /> Good Read Tokens (5)
            </span>
            <span>
              <IoMdBook /> Total Reads (50)
            </span>
          </div>

          <div className={style.buttons}>
            <button className={style.prevBtn}>← Previous Chapter</button>
            <button className={style.enterBtn} onClick={handleEnterWorkroom}>Enter Workroom</button>
          </div>

          <div className={style.applyBtn}>
            <button className={style.applyBtnText}>Create New Chapter</button>
            <button className={style.apply2} onClick={()=>{navigate("/create-novel")}}>
        
              <img src={align} alt="right" className={style.arrow} />
            </button>
          </div>
        </div>
      </div>

      <img src={Rsquare} alt="right" className={style.rightImage} />
    </div>
  );
}

export default PageReducer;







