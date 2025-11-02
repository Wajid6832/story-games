import React from "react";
import style from "../Common-Modal/Modalsetup4.module.css";
import { ImCross } from "react-icons/im";
import likeimage from "../../../assets/likes.png";

function Modalsetup4({ onHide, bookData }) {
  if (!bookData) return null;

  return (
    <div className={style.overlay} onClick={onHide}>
      <div className={style.wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={style.icon}>
          <img 
            src={bookData.image} 
            alt={bookData.title} 
            className={style.bookImage}
          />
        </div>

        <div className={style.text}>
          <button onClick={onHide} className={style.closeBtn}>
            <ImCross />
          </button>

          <p className={style.genre}>{bookData.genre}</p>
          
          <h2 className={style.title}>{bookData.title}</h2>
          
          <p className={style.authors}>{bookData.author}</p>

          <div className={style.descContainer}>
            <p className={style.desc}>
              {bookData.description}
            </p>
          </div>

          <div className={style.likeContainer}>
            <span className={style.like}>
              <img src={likeimage} alt="likes"/>
              &nbsp;Likes(5)
            </span>  
          </div>

          <button className={style.applyBtn}>Read Novel</button>
        </div>
      </div>
    </div>
  );
}

export default Modalsetup4;