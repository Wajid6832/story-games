import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SubscriptionCard from "./SubscriptionCard";

const TokenStore = () => {
  const [currentPlan, setCurrentPlan] = useState(null);

  const plans = [
    {
      name: "Casual Reader",
      price: 2.5,
      features: [
        "Follow Story from 1 Character Perspective",
        "Receive 5 Good Read Tokens",
      ],
    },
    {
      name: "Active Reader",
      price: 12.5,
      features: [
        "Follow Story from 6 Characters Perspective",
        "Receive 25 Good Read Tokens",
      ],
    },
    {
      name: "Excited Reader",
      price: 25,
      features: [
        "Follow Story from 12 Characters Perspective",
        "Receive 50 Good Read Tokens",
      ],
    },
    {
      name: "Binge Reader",
      price: 50,
      features: [
        "Follow Story from 25 Characters Perspective",
        "Receive 100 Good Read Tokens",
      ],
    },
  ];

  return (
    <div className="d-flex">
      <div style={{ width: "100%" }}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
          <h4 className="fw-bold mb-0">Good Read Token Store</h4>
          <div className="d-flex align-items-center border rounded px-2">
            <i className="bi bi-search me-2"></i>
            <input
              type="text"
              placeholder="Search"
              className="border-0 outline-0"
              style={{ width: "180px" }}
            />
          </div>
        </div>

        {/* Plans */}
        <Container className="mt-5">
          <Row className="g-4 justify-content-center">
            {plans.map((plan) => (
              <Col key={plan.name} xs={12} sm={6} md={4} lg={3}>
                <SubscriptionCard
                  planName={plan.name}
                  price={plan.price}
                  features={plan.features}
                  isCurrent={currentPlan === plan.name}
                  onSelect={() => setCurrentPlan(plan.name)}
                  onDeselect={() => setCurrentPlan(null)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TokenStore;
