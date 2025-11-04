import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import image from "../../../assets/Landing-img.png";
import styles from "../../../Common/Landing/WriterLanding/Wrtiterlanding.module.css";

const LandingPage = () => {
  const footer = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.landingWrapper}>
      <Container fluid className={`${styles.bg} px-4`}>
        <Row className={`${styles.main} align-items-center`}>
          <Col md={6} className="d-flex flex-column justify-content-center">
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

            <div className="d-flex flex-wrap gap-2 mb-2">
              <Button variant="primary" className={styles.signUpBtn}>
                Sign Up
              </Button>
              <button className={styles.signinBtn}>Sign In</button>
            </div>

            <a href="#" className={styles.guestLink}>
              Browse as Guest
            </a>
          </Col>

          <Col md={6} className="text-center">
            <img
              src={image}
              alt="Books Illustration"
              className={styles.heroImage}
            />
          </Col>
        </Row>

        <div className={styles.footer}>
          <Row className="align-items-center">
            <Col xs={9}>
              <Row className="g-2 justify-content-center">
                {footer.map((item) => (
                  <Col key={item} xs={4} sm={3} md={2}>
                    <Card className={styles.placeholderCard}>
                      <i className="bi bi-image"></i>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col className="text-start">
              <h5 className="fw-semibold mt-2">Top lists</h5>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
