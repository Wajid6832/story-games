import React from "react";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { FaPen, FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import styles from "./CreateNovel.module.css";

const CreateNovel = () => {
  return (
    <div className={`container-fluid bg-white p-5 rounded shadow-sm ${styles.pageWrapper}`}>
     
      <div className="mb-3">
        <h3 className="fw-semibold text-dark">Create New Novel</h3>
        <hr className={styles.divider} />
      </div>

      <Form>
       
        <p className="fw-medium text-secondary mb-3">Fill the boxes below:</p>
        <Row className="gy-3">
          <Col md={6}>
            <div className={styles.inputBox}>
              <FaPen className={styles.icon} />
              <Form.Control type="text" placeholder="Create Novel Name" className={styles.inputField} />
            </div>
          </Col>

          <Col md={6}>
            <div className={styles.inputBox}>
              <FaPen className={styles.icon} />
              <Form.Control type="text" placeholder="Create Character Name" className={styles.inputField} />
            </div>
          </Col>

          <Col md={6}>
            <div className={styles.inputBox}>
              <FaPen className={styles.iconTop} />
              <Form.Control as="textarea" rows={2} placeholder="Create Character Breakdown" className={styles.inputArea} />
            </div>
          </Col>

          <Col md={6}>
            <Row className="g-3">
          
              <Col md={6}>
                <div className={styles.inputBox}>
                  <FaCalendarAlt className={styles.icon} />
                  <Form.Control type="date" className={styles.inputField} />
                </div>
              </Col>

            
              <Col md={6}>
                <div className={styles.inputBox}>
                  <FaCalendarAlt className={styles.icon} />
                  <Form.Control type="date" className={styles.inputField} />
                </div>
              </Col>

       
              <Col md={12}>
                <div className={`${styles.inputBoxGroup} d-flex align-items-center`}>
                
                  <div className={`${styles.inputBox} flex-grow-1 me-2`}>
                    <FaUserAlt className={styles.icon} />
                    <Form.Select className={styles.inputField}>
                      <option>Select Role</option>
                      <option>Hero</option>
                      <option>Villain</option>
                      <option>Side Character</option>
                    </Form.Select>
                  </div>

                  
                  <div className={`${styles.inputBox} flex-grow-1 me-2`}>
                    <FaPen className={styles.icon} />
                    <Form.Control type="text" placeholder="ID" className={styles.inputField} />
                  </div>

                 
                  <Button className={styles.squareAddBtn}>+</Button>
                </div>
              </Col>
            </Row>
          </Col>


          <Col md={12}>
            <div className={styles.inputBox}>
              <FaPen className={styles.iconTop} />
              <Form.Control as="textarea" rows={3} placeholder="Create Synopsis" className={styles.inputArea} />
            </div>
          </Col>
        </Row>

      
        <h5 className="fw-semibold mt-4 mb-3 text-secondary">Characters Involved</h5>
        <Row className="g-3 mb-4">
          {[1, 2, 3].map((i) => (
            <Col md={2} key={i}>
              <Card className={styles.characterCard}>
                <Card.Body>
                  <Card.Title className="fw-semibold">Character Name</Card.Title>
                  <Card.Text className={styles.characterRole}>Role</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      
        <h5 className="fw-semibold mb-3 text-secondary">Add Additional Info</h5>
        <Row className="g-3 mb-3">
          <Col md={6}>
            <div className={styles.uploadBox}>
              <IoCloudUploadOutline className={styles.uploadIcon} />
              Upload Thumbnail
            </div>
          </Col>

          <Col md={6}>
            <div className={styles.inputBox}>
              <FaPen className={styles.iconTop} />
              <Form.Control as="textarea" rows={6} placeholder="Set the Opening Scene" className={styles.inputArea} />
            </div>
          </Col>

          <Col md={6}>
            <div className={styles.inputBox}>
              <FaPen className={styles.icon} />
              <Form.Control type="text" placeholder="Enter Genre" className={styles.inputField} />
            </div>
            <div className="mt-3">
              <Button className={styles.submitBtn}>Submit & Create</Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CreateNovel;
