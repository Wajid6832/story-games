import React, { useState } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import style from "../Pages/WriterHome.module.css";
import Sidebar from "../Sidebar/WriterSidebar";
import { CommonModal } from "../common/Common-Modal/Modal";
import Modalsetup1 from "../common/Common-Modal/Modalsetup1";
const WriterHome = () => {
  const [openModal, setOpenModal] = useState(false);
  const [setselectedWorkRoom, setSetselectedWorkRoom] = useState(null);
  const [componentIndex, setcomponentIndex] = useState(0);
  const cards = [1, 2, 3, 4, 5, 6, 7, 9];
  const card = [
    { id: 1, title: "Novel Name 1" },
    { id: 2, title: "Novel Name 2" },
    { id: 3, title: "Novel Name 3" },
  ];
 
  return (
    <div className={style.merge}>
      <div>
        <Sidebar />
      </div>
      <Container fluid className={style.homeContainer}>
        <div className={style.homeHeader}>
          <h4 className={style.homeTitle}>Home</h4>
          <div className={style.searchBar}>
            <input
              type="search"
              placeholder="Search"
              className={style.searchInput}
            />
          </div>
        </div>
        <hr className="divider" />
        <section className="section">
          <h5 className={style.sectionTitle}>Open Adverts</h5>
          <Row className={style.cardsRow}>
            {cards.map((item) => (
              <Col key={item} xs={6} sm={4} md={3} lg={2} className="mb-4">
                <div className={style.placeholderCard}>
                  <i className="bi bi-image"  onClick={() => {
                        setSetselectedWorkRoom(item);
                        setOpenModal(true);
                      }}>
                      {openModal && (
  <CommonModal 
    show={openModal} 
    onHide={() => setOpenModal(false)}  
    setselectedWorkRoom={setselectedWorkRoom}
  >
    <Modalsetup1 onHide={() => setOpenModal(false)} />  
  </CommonModal>
)}
                  </i>
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
 <i className="bi bi-image"  onClick={() => {
                        setSetselectedWorkRoom(item);
                        setOpenModal(true);
                      }}>
                      {openModal && (
  <CommonModal 
    show={openModal} 
    onHide={() => setOpenModal(false)}  
    setselectedWorkRoom={setselectedWorkRoom}
  >
    <Modalsetup1 onHide={() => setOpenModal(false)} />  
  </CommonModal>
)}
                  </i>                </div>
              </Col>
            ))}
          </Row>
        </section>
        <section className="section">
          <h5 className={style.sectionTitle}>Available Workrooms</h5>
          <Row className={style.cardsRow}>
            {card.map((item) => (
              <Col key={item.id} xs={6} sm={4} md={3} lg={4} className="mb-4">
                <Card className={`${style.cardCustom} shadow-sm`}>
                  <div className={style.imagePlaceholder}>
                    <i className="bi bi-image"></i>
                  </div>
                  <Card.Body className={`${style.cardBody} text-center`}>
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    <a
                      href="#"
          
                    >
                      Enter Workroom <i className="bi bi-chevron-right"></i>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
   

    </div>
  );
};
export default WriterHome;
