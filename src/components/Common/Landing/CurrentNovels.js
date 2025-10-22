import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import placeholder from "../../../assets/Readers-Assets/images.png";
import Sidebar from "./Sidebar";
import "./readers-landing.css";

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
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <Container fluid className="p-4 overflow-auto readers-main">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <button
            className="btn btn-light d-lg-none mb-2"
            onClick={toggleSidebar}
            style={{ borderRadius: "50%" }}
          >
            <i className="bi bi-list fs-4"></i>
          </button>
          <h3 className="fw-bold mb-0 me-auto">Current Novels</h3>
          <div
            className="search-box d-flex align-items-center px-3 py-1 rounded bg-light-subtle ms-auto"
            style={{ minWidth: "150px", maxWidth: "200px" }}
          >
            <i className="bi bi-search me-2 text-muted"></i>
            <input
              type="text"
              placeholder="Search"
              className="border-0 bg-transparent outline-0 w-100"
            />
          </div>
        </div>

        {/* Grid of Novel Cards */}
        <div
          className="d-grid"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
            gap: "20px",
            justifyItems: "center",
          }}
        >
          {novels.map((novel) => (
            <Card
              key={novel.id}
              className="border-0 rounded-4 d-flex justify-content-center align-items-center"
              style={{
                width: "100px",
                height: "140px",
                backgroundColor: "#E9ECEF",
                borderRadius: "16px",
              }}
            >
              <img
                src={novel.image}
                alt={novel.title}
                style={{ width: "40px", height: "40px", opacity: 0.6 }}
              />
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CurrentNovels;
