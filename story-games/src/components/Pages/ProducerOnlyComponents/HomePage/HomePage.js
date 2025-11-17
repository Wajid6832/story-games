import React, { useEffect } from "react";
import styles from "./HomePage.module.css";
import { Button, Form, Card } from "react-bootstrap";
import novelImages from "../../../../assets/images.png";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../../../features/auth/writerslice";
const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.writer);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const handleClick = () => {
    navigate("/createnovel");
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
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          <div className={styles.novelGrid}>
            {books && books.length > 0 ? (
              books.map((book, i) => (
                <Card key={i} className={styles.novelCard}>
                  <div
                    className={styles.imagePlaceholder}
                    onClick={() => navigate("/pagereducer")}
                  >
                    <img
                      src={book.image || novelImages}
                      alt={book.title || "Novel Cover"}
                      className={styles.novelImage}
                    />
                  </div>
                </Card>
              ))
            ) : (
              !loading && <p>No novels available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;