import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import placeholder from "../../../assets/Readers-Assets/images.png";
import Sidebar from "./Sidebar";
import styles from "./CurrentNovels.module.css";

const generateNovels = () =>
  Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    title: `Novel ${i + 1}`,
    image: placeholder,
  }));

const CurrentNovels = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const novels = generateNovels();

  return (
    <div className="d-flex bg-light vh-100">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <Container fluid className="p-4 overflow-auto readers-main">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
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
