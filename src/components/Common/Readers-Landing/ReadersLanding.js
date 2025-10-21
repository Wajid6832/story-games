import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import placeholder from "../../../assets/Readers-Assets/images.png";
import Sidebar from "./Sidebar";
import "./ReadersLanding.css";
const sections = [
  "Uploaded",
  "My Favorites",
  "Top 10 Stories",
  "Top 10 Writers",
  "Top 10 Characters",
  "Top 10 Intro Chapters",
];

const generateStories = (sectionName) =>
  Array.from({ length: 10 }, (_, i) => ({
    id: `${sectionName}-${i}`,
    title: `${sectionName} Item ${i + 1}`,
    image: placeholder,
    author: "Jon Doe",
    book: "Book Name",
  }));
const CardContent = ({ section, story }) => {
  if (section === "Top 10 Writers") {
    return (
      <div className="writer-placeholder text-center">
        <div className="writer-circle mx-auto">
          <img src={story.image} alt="writer" className="writer-placeholder-icon" />
        </div>
        <p className="fw-semibold mt-2 mb-0 small text-dark">Author Name</p>
      </div>
    );
  }
  if (section.includes("Character")) {
    return (
      <div className="p-3">
        <p className="text-muted small mb-1">{story.book}</p>
        <h6 className="fw-bold mb-0">Character Name</h6>
        <p className="text-primary small mb-0">Played & Written by {story.author}</p>
      </div>
    );
  }
  if (section.includes("Chapter")) {
    return (
      <div className="p-3">
        <p className="text-muted small mb-1">{story.book}</p>
        <h6 className="fw-bold mb-0">Chapter 1 Name</h6>
        <p className="text-primary small mb-0">Written by {story.author}</p>
      </div>
    );
  }
  return (
    <div className="placeholder-card d-flex justify-content-center align-items-center">
      <img src={story.image} alt="placeholder" className="placeholder-img" />
    </div>
  );
};
const ReadersLanding = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
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
          <h3 className="fw-bold mb-0 me-auto">Home</h3>
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
        {sections.map((section) => (
          <div key={section} className="mb-5">
            <h5 className="fw-bold mb-3">{section}</h5>
            <div className="scroll-container no-scrollbar d-flex">
              {generateStories(section).map((story) => (
                <Card
                  key={story.id}
                  className={`story-card border-0 rounded-4 mx-2 ${
                    section === "Top 10 Writers"
                      ? "writer-card"
                      : section.includes("Character")
                      ? "character-card"
                      : section.includes("Chapter")
                      ? "chapter-card"
                      : "image-card"
                  }`}
                >
                  <CardContent section={section} story={story} />
                </Card>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};
export default ReadersLanding;