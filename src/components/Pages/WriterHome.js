import React from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import style from "../../Modulecss/WriterHome.module.css";
import Sidebar from "../Sidebar/WriterSidebar";
const WriterHome = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7];
  const card = [
  { id: 1, title: "Novel Name" },
  { id: 2, title: "Novel Name" },
  { id: 3, title: "Novel Name" },
];
  return (
      <div className={style.merge}>
      <div >
         <Sidebar/>
      </div>
    <Container fluid className={style.homeContainer}>
      <div className={style.homeHeader}>
        <h4 className={style.homeTitle}>Home</h4>
        <div className={style.searchBar}>
          <input type="search" placeholder="Search" className={style.searchInput} />
        </div>
      </div>
      <hr className="divider" />
      <section className="section">
        <h5 className={style.sectionTitle}>Open Adverts</h5>
        <Row className={style.cardsRow}>
          {cards.map((item) => (
            <Col key={item} xs={6} sm={4} md={3} lg={2} className="mb-4">
              <div className={style.placeholderCard}>
                <i className="bi bi-image"></i>
              </div>
            </Col>
          ))}
        </Row>
      </section>
      <section className="section">
        <h5 className={style.sectionTitle}>Current Applications</h5>
        <Row className={style.cardsRow}>
          {cards.map((item) => (
            <Col key={item} xs={6} sm={4} md={3} lg={2} className="mb-4">
              <div className={style.placeholderCard}>
                <i className="bi bi-image"></i>
              </div>
            </Col>
          ))}
        </Row>
      </section>
      <section className="section">
        <h5 className={style.sectionTitle}>Available Workrooms</h5>
         <Row className={style.cardsRow}>
      {card.map((item) => (
        <Col key={item.id} xs={6} sm={4} md={3} lg={2} className="mb-4">
          <Card className={`${style.cardCustom} shadow-sm`}>
            <div className={style.imagePlaceholder}>
              <i className="bi bi-image"></i>
            </div>
            <Card.Body className="text-center">
              <Card.Title className="fw-bold">{item.title}</Card.Title>
              <a href="#" className={`${style.link} d-inline-block`}>
                Enter Workroom <i className="bi bi-chevron-right"></i>
              </a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      </section>
    </Container></div>
  );
};
export default WriterHome;






