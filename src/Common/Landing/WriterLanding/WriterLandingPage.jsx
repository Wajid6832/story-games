import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import image from "../../../assets/1stimage.png"
import styles from "../../../Common/Landing/WriterLanding/Wrtiterlanding.module.css"
const LandingPage = () => {
    const footer=[
          1,2,3,4,5,6
    ]
  return (
    <>
     <div className={styles.landingWrapper}>
      <div className={styles.landingContainer}>
    <div className={styles.bg}>
        <Container fluid className="px-5 py-5">
        <Row className={styles.main}>
          <Col md={6}>
            <h1 className="fw-bold mb-3">Story Host</h1>
            <div className= {styles.line} >
                <p className="text-secondary fs-5 mb-0">
              Lorem ipsum dolor sit amet
            </p> <div className={styles.line2}></div>
            </div>
            <p className="text-muted mb-4" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <div className="d-flex gap-3 mb-3">
              <Button variant="primary" className={styles.signUpBtn}>
                Sign Up
              </Button>
              <button className={styles.signinBtn}>Sign In</button> <div></div>
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
          <Row className="align-items-center ">
            <Col xs={9}>
              <Row className="g-3">
                {footer.map((item) => (
                  <Col key={item} xs={6} sm={4} md={2}>
                    <Card className={styles.placeholderCard}>
                      <i className="bi bi-image"></i>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col  className="text-start">
              <h3 className="fw-semibold mt-2" >Top lists</h3>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    </div>
    </div>
    </>
  );
};
export default LandingPage;