import React, { useState } from "react";
import { Container, Row, Col, Button, Nav, Form, Card } from "react-bootstrap";
import { FaCloudUploadAlt, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./application2.module.css";

const ApplicationPage2 = () => {
  const [activeTab, setActiveTab] = useState("Saved"); 
  const navigate = useNavigate();

  const renderCards = () => {
    return (
      <>
        {[1, 2, 3, 4].map((i) => (
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
                  This is your saved applications list. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>

                <div className={styles.btnRow}>
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

  //  Handle navigation between tabs
  const handleSelect = (selectedKey) => {
    setActiveTab(selectedKey);
    if (selectedKey === "Writers") navigate("/applicationpage1");
    if (selectedKey === "Editors") navigate("/applicationpage1");
    if (selectedKey === "Producers") navigate("/applicationpage1");
    if (selectedKey === "Saved") navigate("/applicationpage2"); 
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
              placeholder="Search Saved Applications"
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
            <Nav.Link eventKey="Applied">Applied</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {/* “Saved” stays active */}
            <Nav.Link eventKey="Saved">Saved</Nav.Link>
          </Nav.Item>
        </Nav>

        <Row className="mt-4">{renderCards()}</Row>
      </Container>
    </div>
  );
};

export default ApplicationPage2;

