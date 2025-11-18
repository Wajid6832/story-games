import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import walletImg from "./wallet.png";
import styles from "./PaymentForm.module.css";

const PaymentForm = () => {
  const [cardType, setCardType] = useState("card1");
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment submitted successfully!");
  };

  if (!showForm) return null; // hide form when closed

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.paymentCard}>
        {/* Close Button Inside Card */}
        <div className={styles.closeBtn} onClick={() => setShowForm(false)}>
          ×
        </div>

        {/* Wallet Image */}
        <div className="text-center mb-3">
          <img src={walletImg} alt="Wallet" className={styles.walletImg} />
        </div>

        {/* Title */}
        <h4 className={styles.paymentTitle}>Payment information:</h4>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Card Number */}
          <div className={`${styles.inputGroup} mb-3`}>
            <i className="bi bi-credit-card-2-front"></i>
            <input type="text" placeholder="Enter Card Number" required />
          </div>

          {/* Cardholder Name */}
          <div className={`${styles.inputGroup} mb-3`}>
            <i className="bi bi-person"></i>
            <input type="text" placeholder="Enter Cardholder Name" required />
          </div>

          {/* Expiration and CVV */}
          <div className={styles.rowGroup}>
            <div className={styles.inputGroup}>
              <i className="bi bi-calendar"></i>
              <input type="text" placeholder="Enter Expiration Date" required />
            </div>
            <div className={styles.inputGroup}>
              <span className={styles.cvvText}>CVV</span>
              <input
                type="password"
                placeholder="Enter CVV Number"
                required
                className={styles.cvvInput}
              />
            </div>
          </div>

          {/* Card Type Radio */}
          <div className="d-flex justify-content-center align-items-center gap-5 mb-4 mt-3">
            <label>
              <input
                type="radio"
                name="cardType"
                value="card1"
                checked={cardType === "card1"}
                onChange={(e) => setCardType(e.target.value)}
              />
              <span className={styles.radioLabel}>Card 1</span>
              
            </label>
            <label>
              <input
                type="radio"
                name="cardType"
                value="card2"
                checked={cardType === "card2"}
                onChange={(e) => setCardType(e.target.value)}
              />
              <span className={styles.radioLabel}>Card 2</span>
            </label>
          </div>

          {/* Pay Button */}
          <div className="text-center">
            <button type="submit" className={styles.payBtn}>
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
