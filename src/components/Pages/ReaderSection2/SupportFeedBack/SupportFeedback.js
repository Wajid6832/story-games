import supportImage from "../../../../assets/Readers-Assets/images/support.png";
import React from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import styles from "../SupportFeedBack/SupportFeedback.module.css";

const Support = () => {
  return (
    <Container fluid className="py-4">
      <h4 className="mb-4 fw-bold">Support/Send Feedback</h4>
      <Row className="align-items-center">
        {/* Form Section */}
        <Col md={6}>
          <div className={styles.formContainer}>
            <h6 className="fw-semibold mb-3">Input your information:</h6>

            {/* Email */}
            <InputGroup className={`mb-3 ${styles.inputGroup}`}>
              <InputGroup.Text className={styles.inputGroupText}>
                <i className="bi bi-envelope"></i>
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Enter Email Address"
                className={styles.formControl}
              />
            </InputGroup>

            {/* Message */}
            <InputGroup className="mb-3">
              <InputGroup.Text className={styles.inputGroupText}>
                <i className="bi bi-pencil"></i>
              </InputGroup.Text>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Message"
                className={styles.textareaControl}
              />
            </InputGroup>

            <Button className={styles.submitButton}>Update Password</Button>
          </div>
        </Col>

        {/* Illustration Section */}
        <Col md={6} className={`text-center ${styles.illustrationCol}`}>
          <img
            src={supportImage}
            alt="Support Illustration"
            className={styles.illustrationImg}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Support;
