import React, { useState } from "react";
import { Container, Row, Col, Button, Nav, Form, Card } from "react-bootstrap";
import { FaCloudUploadAlt, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./application1.module.css";

const ApplicationPage1 = () => {
  const [activeTab, setActiveTab] = useState("Writers");
  const navigate = useNavigate();

  const renderCards = () => {
    return (
      <>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Col key={i} lg={6} md={12} className="mb-4">
            <Card className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.writerInfo}>
                  <strong>Writer Name</strong> • Role
                </span>
                <Button variant="link" className={styles.demoBtn}>
                  <FaCloudUploadAlt /> Demo Work
                </Button>
              </div>

              <Card.Body>
                <Card.Title className={styles.novelName}>Novel Name</Card.Title>
                <Card.Subtitle className={styles.subTitle}>
                  Character Summary
                </Card.Subtitle>
                <Card.Text className={styles.cardText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>

                <div className={styles.btnRow}>
                  <Button className={styles.saveBtn}>Save Candidate</Button>
                  <Button className={styles.acceptBtn}>Accept</Button>
                  <Button className={styles.rejectBtn}>Reject</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </>
    );
  };

  const handleSelect = (selectedKey) => {
    setActiveTab(selectedKey);
    if (selectedKey === "Saved") {
      navigate("/applicationpage2");
    }
  };

  return (
    <div className={styles.pageWrap}>
      <Container fluid>
        <div className={styles.header}>
          <h2 className={styles.pageTitle}>Applications</h2>
          <div className={styles.searchBar}>
            <FaSearch className={styles.searchIcon} />
            <Form.Control
              type="text"
              placeholder="Search"
              className={styles.searchInput}
            />
          </div>
        </div>

        <Nav
          variant="tabs"
          activeKey={activeTab}
          onSelect={handleSelect}
          className={styles.tabs}
        >
          <Nav.Item>
            <Nav.Link eventKey="Writers">Writers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Editors">Editors</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Producers">Producers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            
            <Nav.Link eventKey="Saved">Saved</Nav.Link>
          </Nav.Item>
        </Nav>

        <Row className="mt-4">{renderCards()}</Row>
      </Container>
    </div>
  );
};

export default ApplicationPage1;
