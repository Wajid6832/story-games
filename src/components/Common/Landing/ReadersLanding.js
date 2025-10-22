import React, { useState } from "react";
import { Container, Card, Modal, Button } from "react-bootstrap";
import placeholder from "../../../assets/Readers-Assets/images.png";
import Sidebar from "./Sidebar";
import "./readers-landing.css";

// Section Names
const sections = [
  "Uploaded",
  "My Favorites",
  "Top 10 Stories",
  "Top 10 Writers",
  "Top 10 Characters",
  "Top 10 Intro Chapters",
];

// Generate Dummy Story Data
const generateStories = (sectionName) =>
  Array.from({ length: 10 }, (_, i) => ({
    id: `${sectionName}-${i}`,
    title: `${sectionName} Item ${i + 1}`,
    image: placeholder,
    author: "Author Name",
    writer: "Writer Name",
    book: "Novel Name",
    genre: "Genre",
    character: "Character Name",
    chapterTitle: "Chapter 1: The Beginning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    chapters: 13,
  }));

// Card Content Renderer
const CardContent = ({ section, story }) => {
  if (section === "Top 10 Writers") {
    return (
      <div className="writer-placeholder text-center">
        <div className="writer-circle mx-auto">
          <img
            src={story.image}
            alt="writer"
            className="writer-placeholder-icon"
          />
        </div>
        <p className="fw-semibold mt-2 mb-0 small text-dark">Author Name</p>
      </div>
    );
  }
  if (section.includes("Character")) {
    return (
      <div className="p-3">
        <p className="text-muted small mb-1">{story.book}</p>
        <h6 className="fw-bold mb-0">{story.character}</h6>
        <p className="text-primary small mb-0">
          Played & Written by {story.author}
        </p>
      </div>
    );
  }
  if (section.includes("Chapter")) {
    return (
      <div className="p-3">
        <p className="text-muted small mb-1">{story.book}</p>
        <h6 className="fw-bold mb-0">{story.chapterTitle}</h6>
        <p className="text-primary small mb-0">Written by {story.author}</p>
      </div>
    );
  }
  // Default Placeholder Card
  return (
    <div className="placeholder-card d-flex justify-content-center align-items-center">
      <img src={story.image} alt="placeholder" className="placeholder-img" />
    </div>
  );
};

// 📘 Novel Detail Modal
const NovelDetailModal = ({ show, handleClose, story }) => {
  if (!story) return null;
  return (
    <Modal show={show} onHide={handleClose} centered backdrop={false}>
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "#2B292D33", backdropFilter: "blur(3px)", zIndex: 1040 }}
      ></div>

      <Modal.Body
        className="p-4 position-relative rounded-4"
        style={{
          width: "836px",
          height: "470px",
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          zIndex: 1050,
          margin: "auto",
        }}
      >
        <button
          className="btn-close position-absolute"
          style={{ top: "20px", right: "20px" }}
          onClick={handleClose}
        ></button>

        <div className="d-flex align-items-start gap-4 h-100 flex-wrap flex-md-nowrap">
          <div
            className="d-flex justify-content-center align-items-center rounded-4 flex-shrink-0"
            style={{
              width: "200px",
              height: "280px",
              backgroundColor: "#E9ECEF",
              border: "1px solid #DEE2E6",
            }}
          >
            <i className="bi bi-image fs-3 text-muted"></i>
          </div>

          <div className="flex-grow-1 d-flex flex-column">
            <span className="text-secondary mb-1" style={{ fontSize: "0.75rem" }}>
              {story.genre}
            </span>
            <h4 className="fw-bold mb-1">{story.book}</h4>
            <p className="small mb-3">
              <a href="#" className="text-primary fw-semibold text-decoration-none me-1">
                {story.author}
              </a>
              <span className="text-muted">•</span>
              <a href="#" className="text-primary fw-semibold text-decoration-none ms-1">
                {story.writer}
              </a>
            </p>
            <p className="text-secondary small flex-grow-1">{story.description}</p>
            <Button
              variant="primary"
              className="w-100 fw-semibold d-flex justify-content-between align-items-center mt-3"
              style={{
                backgroundColor: "#5D50FE",
                borderColor: "#5D50FE",
                borderRadius: "8px",
                padding: "12px 18px",
                fontSize: "0.9rem",
              }}
            >
              <span>Read Chapter 1 of {story.chapters} for Free</span>
              <i className="bi bi-chevron-right ms-2"></i>
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

// 🧍 Character Detail Modal
const CharacterDetailModal = ({ show, handleClose, story }) => {
  if (!story) return null;
  return (
    <Modal show={show} onHide={handleClose} centered backdrop={false}>
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "#2B292D33", backdropFilter: "blur(3px)", zIndex: 1040 }}
      ></div>

      <Modal.Body
        className="p-4 position-relative rounded-4"
        style={{
          width: "720px",
          height: "400px",
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          zIndex: 1050,
          margin: "auto",
        }}
      >
        <button
          className="btn-close position-absolute"
          style={{ top: "20px", right: "20px" }}
          onClick={handleClose}
        ></button>

        <div className="d-flex align-items-start gap-4 flex-wrap flex-md-nowrap">
          <div
            className="rounded-4 flex-shrink-0"
            style={{
              width: "160px",
              height: "220px",
              backgroundColor: "#E9ECEF",
              border: "1px solid #DEE2E6",
            }}
          ></div>
          <div className="flex-grow-1">
            <h5 className="fw-bold mb-1">{story.character}</h5>
            <p className="text-primary small mb-2">
              Played & Written by {story.author}
            </p>
            <p className="text-secondary small mb-3">{story.book}</p>
            <p className="text-muted small">{story.description}</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

// 📖 Chapter Detail Modal
const ChapterDetailModal = ({ show, handleClose, story }) => {
  if (!story) return null;
  return (
    <Modal show={show} onHide={handleClose} centered backdrop={false}>
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "#2B292D33", backdropFilter: "blur(3px)", zIndex: 1040 }}
      ></div>

      <Modal.Body
        className="p-4 position-relative rounded-4"
        style={{
          width: "760px",
          height: "420px",
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          zIndex: 1050,
          margin: "auto",
        }}
      >
        <button
          className="btn-close position-absolute"
          style={{ top: "20px", right: "20px" }}
          onClick={handleClose}
        ></button>

        <div className="d-flex flex-column h-100">
          <h4 className="fw-bold mb-1">{story.chapterTitle}</h4>
          <p className="text-muted small mb-2">{story.book}</p>
          <p className="text-primary small mb-3">Written by {story.author}</p>
          <p className="text-secondary small flex-grow-1">{story.description}</p>
          <Button
            variant="primary"
            className="w-100 fw-semibold mt-3"
            style={{
              backgroundColor: "#5D50FE",
              borderColor: "#5D50FE",
              borderRadius: "8px",
              padding: "12px 18px",
              fontSize: "0.9rem",
            }}
          >
            Continue Reading Chapter
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

// 📚 Readers Landing
const ReadersLanding = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [modalType, setModalType] = useState(null); // "story" | "character" | "chapter"

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleClose = () => setModalType(null);

  const handleCardClick = (storyData, section) => {
    setSelectedStory(storyData);
    if (section === "Uploaded" || section === "My Favorites" || section === "Top 10 Stories")
      setModalType("story");
    else if (section.includes("Character")) setModalType("character");
    else if (section.includes("Chapter")) setModalType("chapter");
  };

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
                  className={`story-card border-0 rounded-4 mx-2 cursor-pointer ${
                    section === "Top 10 Writers"
                      ? "writer-card"
                      : section.includes("Character")
                      ? "character-card"
                      : section.includes("Chapter")
                      ? "chapter-card"
                      : "image-card"
                  }`}
                  onClick={() => handleCardClick(story, section)}
                >
                  <CardContent section={section} story={story} />
                </Card>
              ))}
            </div>
          </div>
        ))}
      </Container>

      {modalType === "story" && (
        <NovelDetailModal show handleClose={handleClose} story={selectedStory} />
      )}
      {modalType === "character" && (
        <CharacterDetailModal show handleClose={handleClose} story={selectedStory} />
      )}
      {modalType === "chapter" && (
        <ChapterDetailModal show handleClose={handleClose} story={selectedStory} />
      )}
    </div>
  );
};

export default ReadersLanding;
