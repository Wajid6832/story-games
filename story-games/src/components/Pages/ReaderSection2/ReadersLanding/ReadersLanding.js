import React, { useState, useEffect } from "react";
import { Container, Card, Modal, Button } from "react-bootstrap";
import placeholder from "../../../../assets/Readers-Assets/images/Frame1.png";
import styles from "../../../Pages/ReaderSection2/ReadersLanding/ReadersLanding.module.css";
import { useNavigate } from "react-router-dom";
const sections = [
  "Uploaded",
  "My Favorites",
  "Top 10 Stories",
  "Top 10 Writers",
  "Top 10 Characters",
  "Top 10 Intro Chapters",
];
// Dummy data generator
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
// Card content based on section type
const CardContent = ({ section, story }) => {
  if (section === "Top 10 Writers") {
    return (
      <div className={styles.writerPlaceholder}>
        <div className={styles.writerCircle}>
          <img
            src={story.image}
            alt="writer"
            className={styles.writerPlaceholderIcon}
          />
        </div>
        <p className="fw-semibold mt-2 mb-0 small text-dark">{story.author}</p>
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
  // Default card for Uploaded / My Favorites / Top 10 Stories
  return (
    <div className={styles.placeholderCard}>
      <img src={story.image} alt={story.title} className={styles.placeholderImg} />
      <h6 className="fw-bold mt-2">{story.title}</h6>
    </div>
  );
};
const ReadersLanding = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [selectedStory, setSelectedStory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleClose = () => setShowModal(false);
  // Card click only for Uploaded
  const handleCardClick = (story, section) => {
    if (section === "Uploaded") {
     navigate("/ProfilePage");
    }
  };
  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      const mobileCheck = window.innerWidth < 992;
      setIsMobile(mobileCheck);
      setSidebarOpen(!mobileCheck);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const contentMargin = isMobile ? "0px" : sidebarOpen ? "260px" : "80px";
  return (
    <div className="d-flex bg-light vh-100">
      <Container
        fluid
        className={styles.mainContent + " p-4 overflow-auto readers-main"}
        style={{ marginLeft: contentMargin, width: "100%", transition: "margin-left 0.3s ease" }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <button
            className="btn btn-light d-lg-none mb-2"
            onClick={toggleSidebar}
            style={{ borderRadius: "50%" }}
          >
            <i className="bi bi-list fs-4"></i>
          </button>
          <h3 className="fw-bold mb-0 me-auto">Home</h3>
          <div className={styles.searchBox + " ms-auto"}>
            <i className="bi bi-search me-2 text-muted"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        {/* Sections */}
        {sections.map((section) => (
          <div key={section} className="mb-5">
            <h5 className="fw-bold mb-3">{section}</h5>
            <div className={styles.scrollContainer}>
              {generateStories(section).map((story) => (
                <Card
                  key={story.id}
                  className={`${styles.storyCard} ${
                    section === "Top 10 Writers"
                      ? styles.writerCard
                      : section.includes("Character")
                      ? styles.characterCard
                      : section.includes("Chapter")
                      ? styles.chapterCard
                      : ""
                  }`}
                  onClick={() => handleCardClick(story, section)}
                  style={{ cursor: section === "Uploaded" ? "pointer" : "default" }}
                >
                  <CardContent section={section} story={story} />
                </Card>
              ))}
            </div>
          </div>
        ))}
        {/* Uploaded Modal */}
        <Modal
          show={showModal}
          onHide={handleClose}
          size="lg"
          centered
          backdrop="static"
          fullscreen="md-down"
        >
          {selectedStory && (
            <div className="d-flex flex-column flex-md-row">
              <div
                className="d-flex align-items-center justify-content-center bg-light"
                style={{ width: "35%", minHeight: "400px" }}
              >
                <img
                  src={selectedStory.image}
                  alt={selectedStory.title}
                  className="img-fluid"
                  style={{ maxHeight: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="p-4" style={{ width: "65%", position: "relative" }}>
                <button
                  type="button"
                  className="btn-close position-absolute"
                  style={{ top: "15px", right: "15px" }}
                  onClick={handleClose}
                ></button>
                <p className="mb-1 text-muted">{selectedStory.genre}</p>
                <h5 className="fw-bold mb-2">{selectedStory.book}</h5>
                <div className="mb-3">
                  <span className="text-primary me-3" style={{ cursor: "pointer" }}>
                    {selectedStory.author}
                  </span>
                  <span className="text-primary" style={{ cursor: "pointer" }}>
                    {selectedStory.writer}
                  </span>
                </div>
                <p className="text-muted" style={{ lineHeight: "1.5" }}>
                  {selectedStory.description}
                </p>
                <Button
                  className="text-white mt-2"
                  style={{
                    backgroundColor: "#6F8BDA",
                    borderRadius: "25px",
                    fontWeight: "500",
                    width: "100%",
                    height: "50px",
                  }}
                >
                  Read Chapter 1 of {selectedStory.chapters} for Free
                  <i className="bi bi-chevron-right fs-6 ms-2"></i>
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </Container>
    </div>
  );
};
export default ReadersLanding