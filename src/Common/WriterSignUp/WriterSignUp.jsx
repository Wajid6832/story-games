import React, { useState } from "react";
import illustration from "../../assets/Frame (2).png";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../features/auth/auth.slice";
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
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    // frontend validations
    if (!email || !password || !role) return setErrorMsg("Fill all fields");

    setErrorMsg("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const resultAction = await dispatch(
        signupUser({ email, password, role })
      );

      if (signupUser.fulfilled.match(resultAction)) {
        setSuccessMsg("User created successfully! Redirecting...");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setRole("");

        setTimeout(() => navigate("/editorLogin"), 2000);
      } else {
        setErrorMsg(resultAction.payload?.error || "Signup failed");
      }
    } catch (err) {
      setErrorMsg("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className={styles.mainLandingDiv}>
      <Row className={`justify-content-center ${styles.ladingContentDiv}`}>
        <Col
          xs={12}
          md={6}
          className={`${styles.content} d-flex flex-column gap-2`}
        >
          <div className={styles.heading}>
            <p>STORY HOST</p>
          </div>

          <div
            className={`${styles.secondHeading} d-flex align-items-center gap-2`}
          >
            <p>Create your account</p>
            <div className={styles.dashtLine}></div>
          </div>

          

          <Form.Group>
                {successMsg && (
            <Alert variant="success" className={styles.alertCustom}>
              {successMsg}
            </Alert>
          )}
          {errorMsg && (
            <Alert variant="danger" className={styles.alertCustom}>
              {errorMsg}
            </Alert>
          )}
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
              <i
                className={
                  showConfirmPassword ? "bi bi-eye" : "bi bi-eye-slash"
                }
              ></i>
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
