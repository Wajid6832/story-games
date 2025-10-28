import React, { useMemo, useState } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import style from "./WriterHome.module.css";
import Sidebar from "../../Sidebar/WriterSidebar";
import { CommonModal } from "../../Modal/Common-Modal/Modal"
import Modalsetup2 from "../../Modal/Common-Modal/Modalsetup2";
import Modalsetup1 from "../../Modal/Common-Modal/Modalsetup1";
import Modal3 from "../../Modal/Common-Modal/Modal3";
import image from "../../../assets/icon.png"
import { Link } from "react-router-dom";

const WriterHome = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedWorkRoom, setSetselectedWorkRoom] = useState(null);
  const [componentIndex, setcomponentIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  
  const cards = [1, 2, 3, 4, 5, 6, 7, 9];
  const card = [
    { id: 1, title: "Novel Name 1" },
    { id: 2, title: "Novel Name 2" },
    { id: 3, title: "Novel Name 3" },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const steps = useMemo(() => {
    return componentIndex === 0 ?
      <Modalsetup1 onHide={() => {
        setOpenModal(false)
        setcomponentIndex(0);
      }} selectedWorkRoom={selectedWorkRoom}setcomponentIndex={setcomponentIndex} /> :
      componentIndex === 1 ? <Modalsetup2 onHide={() => {
        setOpenModal(false)
        setcomponentIndex(0);
      }} setcomponentIndex={setcomponentIndex}/> :
      componentIndex === 2 ? <Modal3 onHide={() => {
        setOpenModal(false)
        setcomponentIndex(0);
      }} selectedWorkRoom={selectedWorkRoom}setcomponentIndex={setcomponentIndex} /> : null
  }, [componentIndex])

  return (
    <div className={style.merge}>
      <div>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <Container fluid className={`${style.homeContainer} ${sidebarOpen ? style.sidebarOpen : style.sidebarClosed}`}>
        <div className={style.homeHeader}>
          <Link to="/"><h4 className={style.homeTitle}>Home</h4></Link>
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
                  <i
                    className="bi bi-image"
                    onClick={() => {
                      setSetselectedWorkRoom(item);
                      setOpenModal(true);
                    }}
                  >
                      <img src={image} alt=""/>
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
                  <i
                    className="bi bi-image"
                    onClick={() => {
                      setSetselectedWorkRoom(item);
                      setOpenModal(true);
                    }}
                  >
                                          <img src={image} alt=""/>
                  </i>
                </div>
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
          <i className="bi bi-image fs-1">
            <img src={image} alt=""/>
          </i>
        </div>
        <Card.Body className={style.cardBody}>
          <Card.Title className="fw-bold">{item.title}</Card.Title>
          <a href="#" className={style.setlink}>
            Enter Workroom
          </a>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

        </section>
      </Container>
      {openModal && <CommonModal bodyClasses={componentIndex === 1 && style.secondStep} show={openModal}>{steps}</CommonModal>}
    </div>
  );
};
export default WriterHome;