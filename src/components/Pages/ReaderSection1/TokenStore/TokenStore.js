import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SubscriptionCard from "./SubscriptionCard";
import Sidebar from "../ReaderSidebar/Sidebar";

const TokenStore = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const [currentPlan, setCurrentPlan] = useState(null);

  const plans = [
    { name: "Casual Reader", price: 2.5, features: ["Follow Story from 1 Character Perspective", "Receive 5 Good Read Tokens"] },
    { name: "Active Reader", price: 12.5, features: ["Follow Story from 6 Characters Perspective", "Receive 25 Good Read Tokens"] },
    { name: "Excited Reader", price: 25, features: ["Follow Story from 12 Characters Perspective", "Receive 50 Good Read Tokens"] },
    { name: "Binge Reader", price: 50, features: ["Follow Story from 25 Characters Perspective", "Receive 100 Good Read Tokens"] },
  ];

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile); // Auto-manage sidebar on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contentMargin = isMobile ? "0px" : isSidebarOpen ? "260px" : "80px";

  return (
    <div className="d-flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div
        style={{
          marginLeft: contentMargin,
          width: "100%",
          transition: "margin-left 0.3s ease",
        }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
          <div className="d-flex align-items-center">
            {isMobile && (
              <button
                className="btn me-3 p-0 border-0"
                onClick={toggleSidebar}
                aria-label="Toggle Sidebar"
              >
                <i className="bi bi-list fs-4"></i>
              </button>
            )}
            <h4 className="fw-bold mb-0">Good Read Token Store</h4>
          </div>

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
            {plans.map(plan => (
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
