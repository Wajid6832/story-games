import React, { useState } from "react";
import illustration from "../../assets/Frame (2).png";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./WriterSignUp.module.css";

const WriterSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLoginForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!role) {
      alert("Please select a role");
      return;
    }


    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setRole("");

  };

  return (
    <Container fluid className={styles.mainLandingDiv}>
      <Row className={`justify-content-center ${styles.ladingContentDiv}`}>
        <Col xs={12} md={6} className={`${styles.content} d-flex flex-column gap-4`}>
          <div className={styles.heading}>
            <p>STORY HOST</p>
          </div>
          <div className={`${styles.secondHeading} d-flex align-items-center gap-2`}>
            <p>Create your account</p>
            <div className={styles.dashtLine}></div>
          </div>

          <Form.Group>
            <Form.Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={styles.input}
            >
              <option value="">Select Role</option>
              <option value="Reader">Reader</option>
              <option value="Writer">Writer</option>
              <option value="Editor">Editor</option>
              <option value="Producer">Producer</option>
            </Form.Select>
          </Form.Group>


          <Form.Group className={`${styles.inputGroup} ${styles.emailGroup}`}>
            <i className="bi bi-envelope"></i>
            <Form.Control
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </Form.Group>

          <Form.Group className={`${styles.inputGroup} ${styles.passwordGroup}`}>
            <i className="bi bi-lock"></i>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
            <Button
              variant="link"
              className={styles.eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}></i>
            </Button>
          </Form.Group>


          <Form.Group className={`${styles.inputGroup} ${styles.passwordGroup}`}>
            <i className="bi bi-lock"></i>
            <Form.Control
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={styles.input}
            />
            <Button
              variant="link"
              className={styles.eyeIcon}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <i className={showConfirmPassword ? "bi bi-eye" : "bi bi-eye-slash"}></i>
            </Button>
          </Form.Group>




          <div className={`${styles.butons} d-flex flex-wrap gap-3`}>
            <Button className={`${styles.signup}`} onClick={handleLoginForm}>
              Sign Up
            </Button>
            <Button className={`${styles.signin}`}>Forgot Password?</Button>
          </div>
        </Col>

        <Col xs={12} md={6} className={`${styles.image} d-flex justify-content-center align-items-center`}>
          <img src={illustration} alt="Illustration" />
        </Col>
      </Row>
    </Container>
  );
};

export default WriterSignUp;
