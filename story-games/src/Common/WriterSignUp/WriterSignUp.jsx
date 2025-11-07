import React, { useState } from "react";
import illustration from "../../assets/Frame (2).png";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import styles from "./WriterSignUp.module.css";

const WriterSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email");
      return;
    }
    if (password.length < 8) {
      setErrorMsg("Password must be at least 8 characters");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }
    if (!role) {
      setErrorMsg("Please select a role");
      return;
    }

    setErrorMsg("");
    setSuccessMsg("");
    setLoading(true);

    try {
    
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        
        setSuccessMsg("User created successfully! Redirecting to login...");
        console.log("User Data:", data);

       
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setRole("");

        setTimeout(() => {
          navigate("/editorLogin");
        }, 2000);
      } else {
        setErrorMsg(data.message || "Signup failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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

        
          {successMsg && <Alert variant="success">{successMsg}</Alert>}
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

        
          <Form.Group>
            <Form.Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={styles.input}
            >
              <option value="">Select Role</option>
              <option value="reader">reader</option>
              <option value="writer">writer</option>
              <option value="editor">editor</option>
              <option value="producer">producer</option>
            </Form.Select>
          </Form.Group>

    
          <Form.Group className={styles.inputGroup}>
            <i className="bi bi-envelope"></i>
            <Form.Control
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </Form.Group>

          
          <Form.Group className={styles.inputGroup}>
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

        
          <Form.Group className={styles.inputGroup}>
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
            <Button
              className={styles.signup}
              onClick={handleSignUp}
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
            <Button
              className={styles.signin}
              onClick={() => navigate("/editorLogin")}
            >
              Already have an account?
            </Button>
          </div>
        </Col>

       
        <Col
          xs={12}
          md={6}
          className={`${styles.image} d-flex justify-content-center align-items-center`}
        >
          <img src={illustration} alt="Illustration" />
        </Col>
      </Row>
    </Container>
  );
};

export default WriterSignUp;
