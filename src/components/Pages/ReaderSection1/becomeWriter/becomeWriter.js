import React, { useState, useRef } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import styles from "./BecomeWriter.module.css";

const characterData = [
  "Character 1 Name",
  "Character 2 Name",
  "Character 3 Name",
  "Character 4 Name",
  "Character 5 Name"
];

const FileUploadBox = ({ onFileChange }) => {
  const [fileName, setFileName] = useState(null);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onFileChange(e.target.files);
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className={styles.fileUploadBox} onClick={() => inputRef.current.click()}>
      <input
        ref={inputRef}
        type="file"
        onChange={handleChange}
        className={styles.hiddenInput}
      />
      <div className={styles.uploadContent}>
        <i className="bi bi-cloud-upload mb-1"></i>
        <div className={styles.uploadText}>Upload Sample Work</div>
        {fileName && <div className={styles.fileName}>{fileName}</div>}
      </div>
    </div>
  );
};

const BecomeWriter = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [expandedCharacter, setExpandedCharacter] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    sampleFile: null
  });

  const handleMoreInfo = (name) => {
    setExpandedCharacter(name === expandedCharacter ? null : name);
  };

  const handleApplyClick = (name) => {
    setSelectedCharacter(name);
    setExpandedCharacter(null);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (files) => {
    setFormData({ ...formData, sampleFile: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted for: ${selectedCharacter}`);
  };

  return (
    <div className={styles.appWrapper}>
      <div className={styles.mainContent}>
        <Container fluid>
          <h3 className={styles.heading}>Become a Writer</h3>
          <h5 className={styles.subHeading}>Open Characters</h5>

          <Row xs={1} md={2} lg={5} className="g-3">
            {characterData.map((name) => {
              const isExpanded = expandedCharacter === name;
              const isSelected = selectedCharacter === name;

              return (
                <Col key={name}>
                  <Card
                    className={`${styles.characterCard} 
                      ${isSelected ? styles.selectedCard : ""} 
                      ${isExpanded ? styles.expandedCard : ""}`}
                  >
                    <Card.Body className={styles.cardBody}>
                      <div>
                        <Card.Subtitle className={styles.bookName}>
                          Book Name
                        </Card.Subtitle>
                        <Card.Title className={styles.characterName}>
                          {name}
                        </Card.Title>

                        <p
                          className={styles.infoLink}
                          onClick={() => handleMoreInfo(name)}
                        >
                          More Information
                          <i
                            className={`bi bi-chevron-${isExpanded ? "up" : "down"} ms-1`}
                          />
                        </p>
                      </div>

                      {isExpanded && (
                        <div className={styles.hiddenInfo}>
                          <p className={styles.authorText}>Author Name · Writer Name</p>
                          <p className={styles.infoDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla facilisis at vero eros.
                          </p>
                          <Button
                            className={styles.applyButton}
                            onClick={() => handleApplyClick(name)}
                          >
                            Apply for Position
                          </Button>
                        </div>
                      )}

                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>

          {selectedCharacter && (
            <div className={styles.formWrapper}>
              <h5 className={styles.formHeading}>
                Input your information for <strong>{selectedCharacter}</strong>:
              </h5>

              <Form onSubmit={handleSubmit} className={styles.form}>
                <Row className={styles.inputRow}>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Enter Full Name"
                      name="fullName"
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

                <div className={styles.buttonRow}>
                  <Button type="submit" className={styles.primaryButton}>
                    Upload File
                  </Button>
                  <Button type="submit" className={styles.CancelButton}>
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
