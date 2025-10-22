import React from "react";
import styles from "./Home.module.css";
import { Card } from "react-bootstrap";

const Home = () => {
  const novels = Array(7).fill("");

  return (
    <div className={styles.container}>
      <h5 className={styles.heading}>Active Novels</h5>
      <div className={styles.grid}>
        {novels.map((_, idx) => (
          <Card key={idx} className={styles.novelCard}>
            <div className={styles.iconWrapper}>
              <i className="bi bi-image"></i>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
