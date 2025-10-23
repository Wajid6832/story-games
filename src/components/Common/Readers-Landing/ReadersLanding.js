import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import placeholder from "../../../assets/Readers-Assets/images/images.png";
import Sidebar from "../ReaderSidebar/Sidebar";
import NovelModal from "../../NovalPage/noval";
import styles from "./ReadersLanding.module.css";

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
      <div className={`${styles["writer-placeholder"]} text-center`}>
        <div className={styles["writer-circle"]}>
          <img
            src={story.image}
            alt="writer"
            className={styles["writer-placeholder-icon"]}
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
        <h6 className="fw-bold mb-0">Character Name</h6>
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
        <h6 className="fw-bold mb-0">Chapter 1 Name</h6>
        <p className="text-primary small mb-0">Written by {story.author}</p>
      </div>
    );
  }

  return (
    <div
      className={`${styles["placeholder-card"]} d-flex justify-content-center align-items-center`}
    >
      <img
        src={story.image}
        alt="placeholder"
        className={styles["placeholder-img"]}
      />
    </div>
  );
};

const ReadersLanding = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [showModal, setShowModal] = useState(false);
  const [selectedNovel, setSelectedNovel] = useState(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleCardClick = (section, story) => {
    if (
      section !== "Top 10 Writers" &&
      !section.includes("Character") &&
      !section.includes("Chapter")
    ) {
      setSelectedNovel(story);
      setShowModal(true);
    }
  };

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
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <Container
        fluid
        className={`p-4 overflow-auto ${styles["readers-main"]}`}
        style={{
          marginLeft: contentMargin,
          width: "100%",
          transition: "margin-left 0.3s ease",
        }}
      >
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
            <div
              className={`${styles["scroll-container"]} ${styles["no-scrollbar"]} d-flex`}
            >
              {generateStories(section).map((story) => (
                <Card
                  key={story.id}
                  onClick={() => handleCardClick(section, story)}
                  className={`${styles["story-card"]} border-0 rounded-4 mx-2 ${
                    section === "Top 10 Writers"
                      ? styles["writer-card"]
                      : section.includes("Character")
                      ? styles["character-card"]
                      : section.includes("Chapter")
                      ? styles["chapter-card"]
                      : styles["image-card"]
                  }`}
                >
                  <CardContent section={section} story={story} />
                </Card>
              ))}
            </div>
          </div>
        ))}

        <NovelModal
          show={showModal}
          onHide={() => setShowModal(false)}
          novel={selectedNovel}
        />
      </Container>
    </div>
  );
};

export default ReadersLanding;
