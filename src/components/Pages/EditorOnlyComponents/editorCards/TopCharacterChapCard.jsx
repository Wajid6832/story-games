import React, { useState } from "react";
import styles from "./TopCharacterChapCard.module.css";
import { Modal } from "bootstrap";
// import WorkroomModal from "../WorkroomModal/WorkroomModal"; // import modal

const TopCharacterChapCard = ({ section }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => setSelectedItem(item);
  const handleClose = () => setSelectedItem(null);

  return (
    <>
      <div className={styles.cardSection}>
        {section.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.leftPanel}>
              <i className="bi bi-image" style={{ fontSize: "2rem", color: "#555" }}></i>
            </div>
            <div className={styles.rightPanel}>
              <h5 className={styles.novelName}>Novel Name</h5>
              <button
                className={styles.enterLink}
                onClick={() => handleOpen(item)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#2563eb",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                Enter Workroom <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
      
        // <WorkroomModal item={selectedItem} onClose={handleClose} />
        <Modal item={selectedItem}/>
      )}
    </>
  );
};

export default TopCharacterChapCard;
