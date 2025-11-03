<<<<<<< HEAD
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

  
  const cards = [1, 2, 3, 4, 5, 6, 7, 9];
  const card = [
    { id: 1, title: "Novel Name 1" },
    { id: 2, title: "Novel Name 2" },
    { id: 3, title: "Novel Name 3" },
  ];

 

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
     
       
        <hr className="divider" />
        <section className="section">
          <h5 className={style.sectionTitle}>Open Adverts</h5>
          <Row className={style.cardsRow}>
            {cards.map((item) => (
              <Col key={item} xs={6} sm={4} md={3} lg={2} className="mb-4">
                <div className={style.placeholderCard}>
                  <i
                    className="bi"
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
                    className="bi"
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
      {openModal && <CommonModal bodyClasses={componentIndex === 1 && style.secondStep} show={openModal}>{steps}</CommonModal>}
    </div>
  );
};
=======
import React, { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import style from "../../../components/Pages/WriterOnlyComponents/WriterHome.module.css";
import { CommonModal } from "../../Modal/Common-Modal/Modal";
import Modalsetup2 from "../../Modal/Common-Modal/Modalsetup2";
import Modalsetup1 from "../../Modal/Common-Modal/Modalsetup1";
import Modal3 from "../../Modal/Common-Modal/Modal3";
import defaultImage from "../../../assets/icon.png";
import { Link } from "react-router-dom";
import { fetchBooks } from "../../../features/auth/writerslice";

const WriterHome = () => {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.writer);
  
  const [openModal, setOpenModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [componentIndex, setcomponentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const steps = useMemo(() => {
    return componentIndex === 0 ? (
      <Modalsetup1
        onHide={() => {
          setOpenModal(false);
          setcomponentIndex(0);
        }}
        selectedBook={selectedBook}
        setcomponentIndex={setcomponentIndex}
      />
    ) : componentIndex === 1 ? (
      <Modalsetup2
        onHide={() => {
          setOpenModal(false);
          setcomponentIndex(0);
        }}
        setcomponentIndex={setcomponentIndex}
      />
    ) : componentIndex === 2 ? (
      <Modal3
        onHide={() => {
          setOpenModal(false);
          setcomponentIndex(0);
        }}
        selectedBook={selectedBook}
        setcomponentIndex={setcomponentIndex}
      />
    ) : null;
  }, [componentIndex, selectedBook]);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <div className="container-fluid">
      <section className="section">
        <h5 className={style.sectionTitle}>Open Adverts</h5>
        <Row className={style.cardsRow}>
          {books.slice(0, 10).map((book) => (
            <Col key={book.id} xs={4} sm={3} md={2} lg={2} xl={2} className="mb-3">
              <div 
                className={style.placeholderCard}
                onClick={() => {
                  setSelectedBook(book);
                  setOpenModal(true);
                }}
              >
                <img 
                  src={book.image || defaultImage} 
                  alt={book.title}
                  className={style.cardIcon}
                />
              </div>
            </Col>
          ))}
        </Row>
      </section>

      <section className="section">
        <h5 className={style.sectionTitle}>Current Applications</h5>
        <Row className={style.cardsRow}>
          {books.slice(11, 20).map((book) => (
            <Col key={book.id} xs={4} sm={3} md={2} lg={2} xl={2} className="mb-3">
              <div 
                className={style.placeholderCard}
                onClick={() => {
                  setSelectedBook(book);
                  setOpenModal(true);
                }}
              >
                <img 
                  src={book.image || defaultImage} 
                  alt={book.title}
                  className={style.cardIcon}
                />
              </div>
            </Col>
          ))}
        </Row>
      </section>

      <section className="section">
        <h5 className={style.sectionTitle}>Available Workrooms</h5>
        <Row className="g-3">
          {books.slice(0, 3).map((book) => (
            <Col key={book.id} xs={12} sm={6} md={4} lg={4} xl={4}>
              <div className={`${style.cardCustom} shadow-sm`}>
                <div className={style.imagePlaceholder}>
                  <img 
                    src={book.image || defaultImage} 
                    alt={book.title}
                    className={style.workroomImage}
                  />
                </div>
                <Card.Body className={style.cardBody}>
                  <Card.Title className="fw-bold h6">{book.title}</Card.Title>
                  <Link to="/workRoom" className={style.setlink}>
                    Enter Workroom
                  </Link>
                </Card.Body>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {openModal && (
        <CommonModal
          bodyClasses={componentIndex === 1 && style.secondStep}
          show={openModal}
        >
          {steps}
        </CommonModal>
      )}
    </div>
  );
};

>>>>>>> c55451acf288a496b5a7e2ee539b7c0807cc8eb8
export default WriterHome;