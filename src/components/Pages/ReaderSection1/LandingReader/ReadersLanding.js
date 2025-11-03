
import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Offcanvas,
  Modal,
  Button
} from "react-bootstrap";
import placeholder from "../../../../assets/Readers-Assets/images/Frame1.png";
import styles from "./ReadersLanding.module.css";
import Modalsetup4 from "../../../Modal/Common-Modal/Modalsetup4";
import { CommonModal } from "../../../Modal/Common-Modal/Modal";


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
<<<<<<< HEAD
  const [selectedStory, setSelectedStory] = useState(null);
  const [modalType, setModalType] = useState(null);
    const [openModal, setOpenModal] = useState(false);
  // const [selectedWorkRoom, setSetselectedWorkRoom] = useState(null);


=======
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [modalType, setModalType] = useState(null);
  const handleCloseModal = () => {
    setModalType(null);
    setSelectedStory(null);
  };
>>>>>>> c55451acf288a496b5a7e2ee539b7c0807cc8eb8
  const handleCardClick = (storyData, section) => {
    setSelectedStory(storyData);
    if (
      section === "Uploaded" ||
      section === "My Favorites" ||
      section === "Top 10 Stories"
    ) {
      setModalType("story");
    } else if (section.includes("Character")) {
      setModalType("character");
    } else if (section.includes("Chapter")) {
      setModalType("chapter");
    } else {
      setModalType("story");
    }
  };
<<<<<<< HEAD

  const handleCloseModal = () => setModalType(null);

  return (
    <div className="d-flex bg-light vh-100">
      <Container 
        fluid 
        className={`${styles.mainContent} p-4 overflow-auto readers-main`}
      >
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
=======
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const contentMargin = isMobile ? "0px" : "80px";
  return (
    <div className="d-flex bg-light vh-100">
      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <Sidebar /> */}
          <div className="d-flex flex-column gap-2">
            {sections.map((s) => (
              <button key={s} className="btn btn-link text-start">
                {s}
              </button>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Container
        fluid
        className={`${styles.mainContent} p-4 overflow-auto readers-main`}
        style={{
          marginLeft: contentMargin,
          width: "100%",
          transition: "margin-left 0.3s ease",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <button
            className="btn btn-light d-lg-none mb-2"
            onClick={() => setShowOffcanvas(true)}
            style={{ borderRadius: "50%" }}
            aria-label="open menu"
          >
            <i className="bi bi-list fs-4"></i>
          </button>
>>>>>>> c55451acf288a496b5a7e2ee539b7c0807cc8eb8
          <h3 className="fw-bold mb-0 me-auto">Home</h3>
          <div className={`${styles.searchBox} ms-auto`}>
            <i className="bi bi-search me-2 text-muted"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        {sections.map((section) => (
          <div key={section} className="mb-5">
            <h5 className="fw-bold mb-3">{section}</h5>
            <div className={styles.scrollContainer} role="list">
              {generateStories(section).map((story) => (
                <Card
                  as="button"
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
<<<<<<< HEAD
                  // onClick={() => handleCardClick(story, section)}
                   onClick={() => {
                    setOpenModal(true);
                    // setSetselectedWorkRoom(id);
=======
                  onClick={() => handleCardClick(story, section)}
                  style={{
                    border: "none",
                    background: "transparent",
                    padding: 0,
>>>>>>> c55451acf288a496b5a7e2ee539b7c0807cc8eb8
                  }}
                >
                  <Card.Body className="p-0">
                    <CardContent section={section} story={story} />
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </Container>
<<<<<<< HEAD
      {openModal && (
             <CommonModal
               show={openModal}
              //  selectedWorkRoom={selectedWorkRoom}
               onHide={() => setOpenModal(false)}
             >
               <Modalsetup4 onHide={() => setOpenModal(false)} />
             </CommonModal>
           )}
=======
      <Modal show={!!modalType} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "story"
              ? "Story"
              : modalType === "character"
              ? "Character"
              : modalType === "chapter"
              ? "Chapter"
              : "Details"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedStory ? (
            <>
              <div className="d-flex gap-3 align-items-start">
                <img
                  src={selectedStory.image}
                  alt={selectedStory.title}
                  style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 8 }}
                />
                <div>
                  <h6 className="mb-1 fw-bold">{selectedStory.title}</h6>
                  <p className="mb-1 small text-muted">{selectedStory.book}</p>
                  <p className="mb-0 small">{selectedStory.description}</p>
                </div>
              </div>
              <hr />
              <div className="small text-muted">
                <p className="mb-1">Author: {selectedStory.author}</p>
                <p className="mb-1">Writer: {selectedStory.writer}</p>
                <p className="mb-0">Chapters: {selectedStory.chapters}</p>
              </div>
            </>
          ) : (
            <p>No data</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => alert("Proceed action")}>
            Open
          </Button>
        </Modal.Footer>
      </Modal>
>>>>>>> c55451acf288a496b5a7e2ee539b7c0807cc8eb8
    </div>
  );
};

export default ReadersLanding;
