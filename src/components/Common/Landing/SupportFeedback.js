import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import supportImage from "../../../assets/Readers-Assets/images/support.png";
import styles from "./SupportFeedback.module.css";

const SupportFeedback = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Feedback:", { email, message });
    alert("Your feedback has been submitted!");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="d-flex bg-light vh-100">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <Container fluid className="p-4 overflow-auto readers-main">
        <div className="d-flex justify-content-start align-items-center mb-4 flex-wrap border-bottom pb-3">
          <button
            className="btn btn-light d-lg-none mb-2 me-3"
            onClick={toggleSidebar}
            style={{ borderRadius: "50%" }}
          >
            <i className="bi bi-list fs-4"></i>
          </button>
          <h3 className="fw-bold mb-0">Support / Send Feedback</h3>
        </div>

        <Row className="mt-4">
          <Col lg={6} md={12}>
            <div className={styles.formContainer}>
              <h6 className="fw-bold mb-3">Input your information:</h6>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <div className={styles.inputGroup + " input-group"}>
                    <span className={styles.inputGroupText + " input-group-text"}>
                      <i className="bi bi-envelope text-muted"></i>
                    </span>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email Address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.formControl + " form-control"}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-4">
                  <div className={styles.inputGroup + " input-group"}>
                    <span
                      className={styles.inputGroupText + " input-group-text align-items-start pt-3"}
                    >
                      <i className="bi bi-chat-text text-muted"></i>
                    </span>
                    <Form.Control
                      as="textarea"
                      placeholder="Message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={styles.textareaControl + " form-control"}
                    />
                  </div>
                </Form.Group>

                <Button type="submit" className={styles.submitButton}>
                  Send Feedback
                </Button>
              </Form>
            </div>
          </Col>
          <Col
            lg={6}
            md={12}
            className={`d-none d-lg-flex justify-content-center align-items-end position-relative ${styles.illustrationCol}`}
          >
            <img
              src={supportImage}
              alt="Support Illustration"
              className={styles.illustrationImg + " img-fluid"}
              onError={(e) => {
                console.error("⚠️ Image not found:", supportImage);
                e.target.style.display = "none";
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SupportFeedback;
