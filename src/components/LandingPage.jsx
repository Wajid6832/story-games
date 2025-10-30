import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./LandingPage.module.css";
import image from "../assets/LandingAssets/HeroImage1.png"

const LandingPage = () => {
  return (
    <div className={styles.landingWrapper}>
      <Container fluid className="px-5 py-5">
        {/* Hero Section */}
        <Row className="align-items-center">
          {/* Left Side - Text */}
          <Col md={6}>
            <h1 className="fw-bold mb-3">Story Host</h1>
            <p className="text-secondary fs-5">
              Lorem ipsum dolor sit amet
            </p>
            <p className="text-muted mb-4" style={{ maxWidth: "400px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>

            <div className="d-flex gap-3 mb-3">
              <Button variant="primary" className={styles.signUpBtn}>
                Sign Up
              </Button>
              <Button variant="outline-primary">Sign In</Button>
            </div>

            <a href="#" className={styles.guestLink}>
              Browse as Guest
            </a>
          </Col>

          {/* Right Side - Illustration */}
          <Col md={6} className="text-center">
            <img
              src={image}
              alt="Books Illustration"
              className={styles.heroImage}
            />
          </Col>
        </Row>

        {/* Top List Cards Section */}
        <div className="mt-5">
          <Row className="align-items-center">
            <Col xs={9}>
              <Row className="g-3">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Col key={item} xs={6} sm={4} md={2}>
                    <Card className={styles.placeholderCard}>
                      <i className="bi bi-image"></i>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xs={3} className="text-start text-md-center">
              <h6 className="fw-semibold mt-2">Top lists</h6>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
