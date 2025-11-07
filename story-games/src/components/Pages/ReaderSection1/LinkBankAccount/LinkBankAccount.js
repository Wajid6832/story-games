import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import illustration from "../../../../assets/Readers-Assets/images/link-account.png"; 
import styles from "./LinkBankAccount.module.css";

const LinkBankAccount = () => {
  const [selected, setSelected] = useState(0);

  const accounts = [
    { id: 1, name: "Account Name", balance: "$2000.00" },
    { id: 2, name: "Account Name", balance: "$2000.00" },
    { id: 3, name: "Account Name", balance: "$2000.00" },
  ];

  return (
    <div className="d-flex bg-light vh-100">
      <Container
        fluid
        className={`${styles.mainContent} readers-main p-4 overflow-auto`}
      >
        <div className="d-flex align-items-center mb-4 border-bottom pb-3 flex-wrap">
          <h4 className="fw-bold mb-0">Link Bank Account</h4>
        </div>

        <p className="fw-semibold mb-4">
          Which Bank Account do you want to link with Story Host?
        </p>

        <Row className="g-4">
          {accounts.map((acc, index) => (
            <Col key={acc.id} lg={3} md={6} sm={12}>
              <Card
                className={`${styles.accountCard} ${
                  selected === index ? styles.activeCard : ""
                }`}
                onClick={() => setSelected(index)}
              >
                <Card.Body>
                  <h6 className="fw-semibold mb-1">{acc.name}</h6>
                  <p className="text-muted mb-0">{acc.balance}</p>
                </Card.Body>
              </Card>

              <div className="text-center mt-3">
                {selected === index ? (
                  <Button
                    variant="outline-primary"
                    className={styles.unlinkBtn}
                    onClick={() => setSelected(null)}
                  >
                    <i className="bi bi-link-45deg me-1"></i>Unlink
                  </Button>
                ) : (
                  <Button
                    variant="outline-primary"
                    className={styles.linkBtn}
                    onClick={() => setSelected(index)}
                  >
                    <i className="bi bi-link-45deg me-1"></i>Link
                  </Button>
                )}
              </div>
            </Col>
          ))}

          <Col
            lg={3}
            md={12}
            className={`d-none d-lg-flex justify-content-center align-items-end ${styles.illustrationCol}`}
          >
            <img
              src={illustration}
              alt="Illustration"
              className={`${styles.illustrationImg} img-fluid`}
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LinkBankAccount;
