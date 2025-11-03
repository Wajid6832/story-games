import React from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import styles from "./CreateChapter.module.css";

const CreateChapter = () => {
  return (
    <div className={`${styles.createChapter} container bg-white p-4 p-md-5 rounded-4 shadow-sm`}>
      {/* Header */}
      <h3 className="fw-semibold fs-4 mb-2">
        Create New Chapter - Chapter x out of 13
      </h3>

      <hr className={styles.divider} />

      {/* Form Section */}
      <div>
        <h5 className="fw-medium mb-4">Fill the boxes below:</h5>

        <Row className="align-items-start g-4 mb-4">
          {/* LEFT SIDE */}
          <Col md={6} sm={12}>
            {/* Chapter Title */}
            <Form.Group className="position-relative mb-4">
              <FaPen className={`${styles.icon} text-muted`} />
              <Form.Control
                type="text"
                placeholder="Create Chapter Title"
                className={`${styles.input} ps-5 py-2 rounded-3`}
              />
            </Form.Group>

            {/* Opening Scene */}
            <Form.Group className="position-relative">
              <FaPen className={`${styles.iconTop} text-muted`} />
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Create Opening Scene..."
                className={`${styles.textArea} ps-5 py-2 rounded-3`}
              />
            </Form.Group>
          </Col>

          {/* RIGHT SIDE */}
          <Col md={6} sm={12}>
  <Row className="g-3">
    <Col sm={6} xs={12}>
      <Card className={`${styles.uploadCard} text-center border-0`}>
        <IoCloudUploadOutline className={styles.uploadIcon} />
        <span>Upload Image</span>
      </Card>
    </Col>
    <Col sm={6} xs={12}>
      <Card className={`${styles.uploadCard} text-center border-0`}>
        <IoCloudUploadOutline className={styles.uploadIcon} />
        <span>Upload MP3 File</span>
      </Card>
    </Col>
  </Row>
</Col>

        </Row>

        {/* CHARACTERS */}
        <h5 className="fw-medium mb-3">Characters</h5>

        <Row className="g-3 mb-5">
          {[1, 2].map((num) => (
            <Col md={4} sm={6} xs={12} key={num}>
              <Card
                className={`${styles.characterCard} border-0 rounded-3 p-3 d-flex flex-row justify-content-between align-items-center`}
              >
                <span className="fw-medium">Character {num}</span>
                <Button className={`${styles.createBtn} px-3 py-1`}>
                  Create Submission
                </Button>
              </Card>
            </Col>
          ))}
        </Row>

        {/* BOTTOM BUTTONS */}
        <div className="d-flex flex-wrap gap-3">
          <Button className={`${styles.saveBtn} px-4 py-2`}>
            Save & Review
          </Button>
          <Button className={`${styles.publishBtn} px-4 py-2`}>
            Publish Chapter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateChapter;
