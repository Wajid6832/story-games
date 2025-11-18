import React from "react";
import style from "../Common-Modal/Modal.module.css";
import defaultImage from "../../../assets/icon.png";
import { ImCross } from "react-icons/im";

function Modalsetup1({ onHide, selectedBook, setcomponentIndex }) {
  console.log("Selected Book Data:", selectedBook);

  return (
    <div className={style.wrapper}>
      <div className={style.icon}>
        <img 
          src={selectedBook?.image || defaultImage} 
          alt={selectedBook?.title || "Book Cover"}
          onError={(e) => {
            e.target.src = defaultImage; 
          }}
        />
      </div>

      <div className={style.text}>
        <button onClick={onHide} className={style.closeBtn}>
          <ImCross />
        </button>

        <div className={style.content}>
          <p className={style.genre}>
            {selectedBook?.genre?.toUpperCase() || "GENRE"}
          </p>
          
          <h3 className={style.title}>
            {selectedBook?.title || "Book Title"}
          </h3>
          
          <p className={style.authors}>
            <span className={style.span}>
              {selectedBook?.author || "Unknown Author"}
            </span>
          </p>

          <div className={style.descContainer}>
            <p className={style.desc}>
              {selectedBook?.description || "No description available for this book."}
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
  );
}

export default Modalsetup1;