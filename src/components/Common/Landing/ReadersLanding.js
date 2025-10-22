import React, { useState } from "react";
import { Container, Card, Modal, Button } from "react-bootstrap";
import placeholder from "../../../assets/Readers-Assets/images.png";
import Sidebar from "./Sidebar";
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
  return (
    <div className={styles.placeholderCard}>
      <img src={story.image} alt="placeholder" className={styles.placeholderImg} />
    </div>
  );
};


const ReadersLanding = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [modalType, setModalType] = useState(null);

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
          <div className={styles.searchBox + " ms-auto"}>
            <i className="bi bi-search me-2 text-muted"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>

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
