import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
 import walletImg from "../../../assets/Wallet.png";
// import "./PaymentForm.css";
const PaymentForm = () => {
  const [cardType, setCardType] = useState("card1");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment submitted successfully!");
  };
  return (
    <div className="payment-container d-flex justify-content-center align-items-center vh-100">
      <div className="payment-card shadow p-4 rounded-4 bg-white text-center"
       style={{ width: "430px" }}>
        {/* Wallet Icon */}
        <div className="wallet-icon mb-3">
      <img src={walletImg} alt="Wallet" style={{ width: "100px" }} />
        </div>
        <h4 className="fw-bold mb-4">Payment information:</h4>
        <form onSubmit={handleSubmit}>
          {/* Card Number */}
          <div className="input-group mb-3">
            <span className="input-group-text bg-light border-0">
              <i className="bi bi-credit-card-2-front"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Card Number"
              required
            />
          </div>
          {/* Cardholder Name */}
          <div className="input-group mb-3">
            <span className="input-group-text bg-light border-0">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Cardholder Name"
              required
            />
          </div>
              <div className="row mb-3">
  {/* Expiration Date */}
  <div className="col-6">
    <div className="input-group">
      <span
        className="input-group-text bg-light border-0"
        style={{ minWidth: "40px" }}
      >
        <i className="bi bi-calendar"></i>
      </span>
      <input
        type="text"
        className="form-control bg-light border-0"
        placeholder="Enter Expiration Date"
        required
        style={{
          minWidth: "0",
          flex: "1 1 auto",
          paddingLeft: "2px",
          overflow: "visible",
        }}
      />
    </div>
  </div>
  {/* CVV */}
  <div className="col-6">
    <div className="input-group">
      <span
        className="input-group-text bg-light border-0 fw-bold"
        style={{ minWidth: "50px" }}
      >
        CVV
      </span>
      <input
        type="password"
        className="form-control bg-light border-0"
        placeholder="Enter CVV Number"
        required
        style={{
          minWidth: "0",
          flex: "1 1 auto",
          paddingLeft: "2px",
          overflow: "visible",
        }}
      />
    </div>
  </div>
</div>
          {/* Card Type */}
          <div className="d-flex justify-content-center gap-4 mb-4">
              <label htmlFor="card1" className="ms-2">Card 1</label>
            <div>
              <input
                type="radio"
                id="card1"
                name="cardType"
                value="card1"
                checked={cardType === "card1"}
                onChange={(e) => setCardType(e.target.value)}
              />
            </div>
            <label htmlFor="card2" className="ms-2">Card 2</label>
            <div>
              <input
                type="radio"
                id="card2"
                name="cardType"
                value="card2"
                checked={cardType === "card2"}
                onChange={(e) => setCardType(e.target.value)}
              />
            </div>
          </div>
          {/* Pay Button */}
          <button type="submit" className="btn btn-primary px-5 py-2 rounded-3">
            Pay
          </button>
        </form>
        {/* Dots for progress */}
        <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
  <div
    className="bg-secondary rounded-pill"
    style={{ width: "40px", height: "4px" }}
  ></div>
  <div
    className="bg-secondary rounded-pill"
    style={{ width: "40px", height: "4px" }}
  ></div>
  <div
    className="bg-primary rounded-pill"
    style={{ width: "40px", height: "4px" }}
  ></div>
</div>
      </div>
    </div>
  );
};
export default PaymentForm;


