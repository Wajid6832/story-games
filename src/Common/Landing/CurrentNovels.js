import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import placeholder from "../../assets/Readers-Assets/images.png";
import styles from "./CurrentNovels.module.css";

const generateNovels = () =>
  Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    title: `Novel ${i + 1}`,
    image: placeholder,
  }));

const CurrentNovels = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const novels = generateNovels();

  useEffect(() => {
    const handleResize = () => {
      const mobileCheck = window.innerWidth < 992;
      setIsMobile(mobileCheck);

      if (!mobileCheck) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contentMargin = isMobile ? "0px" : sidebarOpen ? "260px" : "80px";

  return (
    <div className="d-flex bg-light vh-100">
      <div className={styles.sidebarWrapper}>
        
      </div>

      <Container
        fluid
        className={styles.mainContent}
        style={{
          marginLeft: contentMargin,
          width: "100%",
          transition: "margin-left 0.3s ease",
        }}
      >
        <div
          className={`d-flex justify-content-between align-items-center flex-wrap ${styles.headerNav}`}
        >
          <button
            className="btn btn-light d-lg-none mb-2"
            onClick={toggleSidebar}
            style={{ borderRadius: "50%" }}
          >
            <i className="bi bi-list fs-4"></i>
          </button>

          <h3 className="fw-bold mb-0 me-auto">Current Novels</h3>

          <div className={styles.searchBox + " ms-auto"}>
            <i className="bi bi-search me-2 text-muted"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className={styles.containerGrid}>
          {novels.map((novel) => (
            <Card key={novel.id} className={styles.novelCard}>
              <img
                src={novel.image}
                alt={novel.title}
                className={styles.novelImage}
              />
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CurrentNovels;