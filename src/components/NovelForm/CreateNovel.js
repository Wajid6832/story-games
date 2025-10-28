import React from "react";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import styles from "./CreateNovel.module.css";

const CreateNovel = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.topSection}>
        <h3 className={styles.title}>Create New Novel</h3>
        <hr className={styles.divider} />
      </div>

      <div className={styles.formSection}>
        <p className={styles.subHeader}>Fill the boxes below:</p>

        <Form>
          {/* Row 1 */}
          <Row className="mb-3">
            <Col md={6}>
              <div className={styles.inputWrapper}>
                <FaPen className={styles.icon} />
                <Form.Control
                  type="text"
                  placeholder="Create Novel Name"
                  className={styles.input}
                />
              </div>
            </Col>
            <Col md={6}>
              <div className={styles.inputWrapper}>
                <FaPen className={styles.icon} />
                <Form.Control
                  as="textarea"
                  rows={6} 
                  placeholder="Create Character Breakdown"
                  className={styles.input}
                />
              </div>
            </Col>
          </Row>

          {/* Row 2 */}
          <Row className="mb-3">
            <Col md={6}>
              <div className={styles.inputWrapper}>
                <FaPen className={styles.icon} />
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Create Character Breakdown"
                  className={styles.input}
                />
              </div>
            </Col>
            <Col md={3}>
              <Form.Control
                type="date"
                className={styles.input}
                placeholder="2 Oct 22"
              />
            </Col>
            <Col md={3}>
              <Form.Control
                type="date"
                className={styles.input}
                placeholder="Select Closing Date"
              />
            </Col>
          </Row>

          {/* Row 3 */}
          <Row className="mb-3">
            <Col md={4}>
              <Form.Select className={styles.input}>
                <option>Select Role</option>
                <option>Hero</option>
                <option>Villain</option>
                <option>Side Character</option>
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="ID"
                className={styles.input}
              />
            </Col>
            <Col md={4}>
              <Button className={styles.addBtn}>+</Button>
            </Col>
          </Row>

          {/* Synopsis */}
          <div className="mb-4">
            <div className={styles.inputWrapper}>
              <FaPen className={styles.icon} />
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Create Synopsis"
                className={styles.input}
              />
            </div>
          </div>

          {/* Characters */}
          <h5 className={styles.subHeader}>Characters Involved</h5>
          <div className={styles.characterRow}>
            {[1, 2, 3].map((i) => (
              <Card key={i} className={styles.characterCard}>
                <Card.Body>
                  <Card.Title className={styles.characterTitle}>
                    Character Name
                  </Card.Title>
                  <Card.Text className={styles.characterRole}>Role</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <h5 className={styles.subHeader}>Add Additional Info</h5>
          <Row className="mb-3">
            <Col md={6}>
              <div className={styles.uploadBox}>
                <IoCloudUploadOutline className={styles.uploadIcon} />
                Upload Thumbnail
              </div>
            </Col>
            <Col md={6}>
              <div className={styles.inputWrapper}>
                <FaPen className={styles.icon} />
                <Form.Control
                  type="text"
                  placeholder="Set the Opening Scene"
                  className={styles.input}
                />
              </div>
            </Col>
          </Row>

          {/* Genre + Button */}
          <Row>
            <Col md={6}>
              <div className={styles.inputWrapper}>
                <FaPen className={styles.icon} />
                <Form.Control
                  type="text"
                  placeholder="Enter Genre"
                  className={styles.input}
                />
              </div>

              {/* Button niche move kia */}
              <div className={styles.buttonWrapper}>
                <Button className={styles.submitBtn}>Submit & Create</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default CreateNovel;
