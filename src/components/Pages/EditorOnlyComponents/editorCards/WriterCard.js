import React from 'react';
import styles from "./WriterCard.module.css";

const WriterCard = ({ title, items }) => {
  return (
    <div className={styles.section}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.cardContainer}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.image || "/placeholder.png"} alt={item.name} />
            <p className={styles.name}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WriterCard;
