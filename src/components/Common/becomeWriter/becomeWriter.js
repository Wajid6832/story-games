import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Collapse } from "react-bootstrap";
import Sidebar from "../ReaderSidebar/Sidebar";
import styles from "./BecomeWriter.module.css";

const characterData = [
  "Character 1 Name",
  "Character 2 Name",
  "Character 3 Name",
  "Character 4 Name"
];

const FileUploadBox = ({ onFileChange }) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = React.useRef(null);
  const [fileName, setFileName] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileChange(e.dataTransfer.files);
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onFileChange(e.target.files);
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div
      className={`${styles.fileUploadBox} ${dragActive ? styles.dragActive : ""}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={() => inputRef.current.click()}
    >
      <input ref={inputRef} type="file" onChange={handleChange} style={{ display: "none" }} />
      <div className="text-center">
        <i className="bi bi-cloud-upload fs-3 mb-2"></i>
        <span>{fileName ? `File Selected: ${fileName}` : "Upload Sample Work"}</span>
      </div>
    </div>
  );
};

const BecomeWriter = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [expandedCharacter, setExpandedCharacter] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", sampleFile: null });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleSelect = (name) => {
    setSelectedCharacter(name);
  };

  const handleMoreInfo = (name) => {
    setShowForm(false);
    setExpandedCharacter(name === expandedCharacter ? null : name);
    setSelectedCharacter(name);
  };

  const handleApplyClick = () => {
    setExpandedCharacter(null);
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (files) => {
    setFormData({ ...formData, sampleFile: files[0] });
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted for: ${selectedCharacter}`);
    setShowForm(false);
  };

  const contentMargin = isSidebarOpen ? "260px" : "70px";

  return (
    <div className={styles.appWrapper}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={styles.mainContent} style={{ marginLeft: contentMargin }}>
        <Container fluid>
          <h3 className="mb-4 fw-bold">Become a Writer</h3>
          <h5 className="mb-3">Open Characters</h5>

          <Row xs={1} md={2} lg={5} className="g-3">
            {characterData.map((name) => (
              <Col key={name}>
                <Card
                  className={`${styles.characterCard} ${
                    selectedCharacter === name ? styles.selectedCard : ""
                  }`}
                  onClick={() => handleSelect(name)}
                >
                  <Card.Body>
                    <Card.Subtitle className="text-muted small">Book Name</Card.Subtitle>
                    <Card.Title className="fw-bold mb-2">{name}</Card.Title>

                    <p
                      className={`${styles.infoLink} mb-0`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMoreInfo(name);
                      }}
                    >
                      More Information
                      <i
                        className={`bi bi-chevron-${
                          expandedCharacter === name ? "up" : "down"
                        } ms-1`}
                      />
                    </p>

                    <Collapse in={expandedCharacter === name}>
                      <div>
                        <p className="small mt-3 text-muted">
                          Author Name · Writer Name
                          <br />
                          Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore.
                        </p>

                        <Button
                          className={`mt-2 ${styles.primaryButton}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleApplyClick();
                          }}
                        >
                          Apply for Position
                        </Button>
                      </div>
                    </Collapse>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {showForm && (
            <div className="mt-5">
              <h5 className="mb-3">Input your information:</h5>

              <Form onSubmit={handleSubmit} style={{ maxWidth: "700px" }}>
                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Enter Full Name"
                      name="fullName"
                      className={styles.inputField}
                      onChange={handleFormChange}
                      required
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email Address"
                      name="email"
                      className={styles.inputField}
                      onChange={handleFormChange}
                      required
                    />
                  </Col>
                </Row>

                <FileUploadBox onFileChange={handleFileChange} />

                <div className="d-flex mt-4">
                  <Button type="submit" className={`${styles.primaryButton} me-3`}>
                    Upload File
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className={styles.cancelButton}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default BecomeWriter;
