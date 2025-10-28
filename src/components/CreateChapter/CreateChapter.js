import React from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { FaPen, FaUpload } from "react-icons/fa";
import styles from "./CreateChapter.module.css";
import { IoCloudUploadOutline } from "react-icons/io5";

const CreateChapter = () => {
    return (
        <div className={styles.createChapter}>
            <h3 className={styles.header}>Create New Chapter - Chapter x out of 13</h3>
            <hr className={styles.divider} />

            <div className={styles.formSection}>
                <h5 className={styles.subHeader}>Fill the boxes below:</h5>

                <Row className={`align-items-start mb-5 ${styles.rowFix}`}>
                    <Col md={6}>
                        
                        <Form.Group className={styles.formGroup}>
                            <FaPen className={styles.icon} />
                            <Form.Control
                                type="text"
                                placeholder="Create Chapter Title"
                                className={styles.input}
                            />
                        </Form.Group>

                       
                        <Form.Group className={`${styles.formGroup} mt-4`}>
                            <FaPen className={styles.icon} />
                            <Form.Control
                                as="textarea"
                                rows={6}
                                placeholder="Create Opening Scene..."
                                className={styles.textArea}
                            />
                        </Form.Group>
                    </Col>

                   
                    <Col md={6}>
                        <Row className="g-3">
                            <Col md={6}>
                                <Card className={styles.uploadCard}>
                                    <IoCloudUploadOutline />
                                    <span>Upload Image</span>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className={styles.uploadCard}>
                                   <IoCloudUploadOutline />
                                    <span>Upload MP3 File</span>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>

               
                <h5 className={styles.subHeader}>Characters</h5>

                <Row className={styles.characterRow}>
                    {[1, 2].map((num) => (
                        <Col md={6} lg={3} key={num}>
                            <Card className={styles.characterCard}>
                                <div className={styles.cardContent}>
                                    <span className={styles.characterTitle}>Character {num}</span>
                                    <Button className={styles.createBtn}>Create Submission</Button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Bottom Buttons */}
                <div className={styles.bottomButtons}>
                    <Button className={styles.saveBtn}>Save & Review</Button>
                    <Button className={styles.publishBtn}> Publish Chapter</Button>
                </div>
            </div>
        </div>
    );
};

export default CreateChapter;
