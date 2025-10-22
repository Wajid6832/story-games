import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar"; // ✅ Import Sidebar
import "./readers-landing.css";
import supportImage from "../../../assets/Readers-Assets/images/support.png"; // ✅ Correct path

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
      {/* ✅ Sidebar Section */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* ✅ Main Content Section */}
      <Container fluid className="p-4 overflow-auto readers-main">
        {/* Header */}
        <div className="d-flex justify-content-start align-items-center mb-4 flex-wrap border-bottom pb-3">
          {/* Sidebar toggle for mobile */}
          <button
            className="btn btn-light d-lg-none mb-2 me-3"
            onClick={toggleSidebar}
            style={{ borderRadius: "50%" }}
          >
            <i className="bi bi-list fs-4"></i>
          </button>

          <h3 className="fw-bold mb-0">Support / Send Feedback</h3>
        </div>

        {/* Main Content Area */}
        <Row className="mt-4">
          {/* Left Column: Form */}
          <Col lg={6} md={12}>
            <div className="bg-white p-4 rounded-4 shadow-sm">
              <h6 className="fw-bold mb-3">Input your information:</h6>
              <Form onSubmit={handleSubmit}>
                {/* Email Input */}
                <Form.Group className="mb-3">
                  <div className="input-group" style={{ height: "45px" }}>
                    <span
                      className="input-group-text border-end-0 bg-light-subtle"
                      style={{ backgroundColor: "#f5f5f5" }}
                    >
                      <i className="bi bi-envelope text-muted"></i>
                    </span>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email Address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-start-0"
                      style={{
                        backgroundColor: "#f5f5f5",
                        borderLeft: "none",
                        height: "100%",
                      }}
                    />
                  </div>
                </Form.Group>

                {/* Message Input */}
                <Form.Group className="mb-4">
                  <div className="input-group">
                    <span
                      className="input-group-text border-end-0 align-items-start pt-3 bg-light-subtle"
                      style={{ backgroundColor: "#f5f5f5" }}
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
                      className="border-start-0"
                      style={{
                        backgroundColor: "#f5f5f5",
                        resize: "none",
                        borderLeft: "none",
                      }}
                    />
                  </div>
                </Form.Group>

                {/* Submit Button */}
                <Button
                  variant="primary"
                  type="submit"
                  className="px-4 fw-semibold"
                  style={{
                    backgroundColor: "#8797e8",
                    borderColor: "#8797e8",
                    borderRadius: "8px",
                  }}
                >
                  Send Feedback
                </Button>
              </Form>
            </div>
          </Col>

          {/* Right Column: Illustration */}
          <Col
            lg={6}
            md={12}
            className="d-none d-lg-flex justify-content-center align-items-end position-relative"
            style={{ minHeight: "400px" }}
          >
            <img
              src={supportImage}
              alt="Support Illustration"
              className="img-fluid"
              style={{
                maxWidth: "80%",
                height: "auto",
                objectFit: "contain",
              }}
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
