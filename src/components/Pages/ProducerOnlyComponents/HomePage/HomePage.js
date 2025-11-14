import React from "react";
import styles from "./HomePage.module.css";
import { Button, Form, Card } from "react-bootstrap";
import novelImages from "../../../../assets/images.png";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
  navigate("/create-novel");
};

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.header}>
          <h2>Home</h2>
          <div className={styles.rightSection}>
            <div className={styles.searchBar}>
              <FaSearch className={styles.searchIcon} />
              <Form.Control
                type="text"
                placeholder="Search"
                onClick={() => navigate("/pagereducer")}
                className={styles.input}
              />
            </div>
            <Button className={styles.newNovelBtn} onClick={handleClick}>
              Create New Novel
            </Button>
          </div>
        </div>

        <hr className={styles.lineDivider} />

        <div className={styles.content}>
          <h5>Active Novels</h5>
          <div className={styles.novelGrid}>
            {[...Array(8)].map((_, i) => (
              <Card key={i} className={styles.novelCard}>
                <div className={styles.imagePlaceholder}
                   onClick={() => navigate("/pagereducer")}
                   >
                  <img
                    src={novelImages}
                    alt="Novel Cover"
                    className={styles.novelImage}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;











