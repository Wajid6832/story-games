import React from "react";
import { useNavigate } from "react-router-dom"; 
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import image from "../../../assets/Landing-img.png";
import styles from "../../../Common/Landing/WriterLanding/Wrtiterlanding.module.css";

const LandingPage = () => {
  const navigate = useNavigate(); 
  const footer = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.landingWrapper}>
      <Container fluid className={`${styles.bg} px-3 px-md-4`}>
        <Row className="align-items-center flex-column flex-md-row">
          <Col md={6} className="d-flex flex-column justify-content-center order-2 order-md-1">
            <h1 className="fw-bold mb-2 fs-2">Story Host</h1>
            <div className={styles.line}>
              <p className="text-secondary fs-6 mb-0">
                Lorem ipsum dolor sit amet
              </p>
              <div className={styles.line2}></div>
            </div>
            <p className="text-muted mb-3" style={{ fontSize: "0.9rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>

            <div className="d-flex flex-wrap gap-2 mb-3">
              <Button
                variant="primary"
                className={styles.signUpBtn}
                onClick={() => navigate("/signup")} 
              >
                Sign Up
              </Button>

              <button
                className={styles.signinBtn}
                onClick={() => navigate("/editorLogin")}
              >
                Sign In
              </button>
            </div>

            <a href="#" className={styles.guestLink}>
              Browse as Guest
            </a>
          </Col>

          <Col md={6} className="text-center order-1 order-md-2 mb-3 mb-md-0">
            <img
              src={image}
              alt="Books Illustration"
              className={styles.heroImage}
            />
          </Col>
        </Row>

        <div className={styles.footer}>
          <Row className="align-items-center flex-column flex-md-row">
            <Col xs={12} md={9} className="mb-3 mb-md-0">
              <Row className="g-2 row-cols-2 row-cols-sm-3 row-cols-md-6">
                {footer.map((item) => (
                  <Col key={item}>
                    <Card className={styles.placeholderCard}>
                      <i className="bi bi-image"></i>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xs={12} md={3} className="text-center text-md-start">
              <h5 className="fw-semibold mt-2 mt-md-0">Top lists</h5>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
