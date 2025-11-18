import React, { useState } from "react";
import styles from "./TopCards.module.css";

const TopCards = ({ data }) => {
const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <div className={styles.section}>
      {data.map((sec, index) => (
        <div key={index} className={styles.sectionBlock}>
          <h4 className={styles.title}>{sec.section}</h4>
          <div className={styles.cardContainer}>
            {sec.items.map((ele) => (
              <div
                key={ele.id}
                className={styles.card}
                onClick={() => handleCardClick(ele)}
              >
                <img src={ele.image} alt={ele.name} />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Popup Modal */}
      {selectedCard && (
        <div className={styles.modalOverlay} onClick={handleClose}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={handleClose}>
              ✖
            </button>
            <img
              src={selectedCard.image}
              alt={selectedCard.name}
              className={styles.modalImage}
            />
            <h4 className={styles.modalTitle}>{selectedCard.name}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopCards;
