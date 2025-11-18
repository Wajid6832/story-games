import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Children
import TokenStore from "../TokenStore/TokenStore";
import ReadersInfo from "../../ReaderSection2/ReadersClub/ReadersInfo";
import PaymentForm from "../PaymentForm";

// Styles
import styles from "./SubscriptionModalFlow.module.css";

const SubscriptionModalFlow = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const goToInfo = () => setStep(2);
  const goToPayment = () => setStep(3);
  const onHide = () => {
    setStep(1);
    navigate("/");
  };

  return (
    <Modal
      show={true}
      centered
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      contentClassName={styles.whiteModal}
      dialogClassName={styles.modalDialog}
    >
      {/* Close Button */}
      <button className={styles.closeBtn} onClick={onHide} aria-label="Close">
        ✕
      </button>

      {/* Flow Steps */}
      <div
        className={styles.flowWrapper}
        style={{ transform: `translateX(-${(step - 1) * 100}%)` }}
      >
        <div className={styles.flowStep}>
          <TokenStore goToNextStep={goToInfo} />
        </div>
        <div className={styles.flowStep}>
          <ReadersInfo onComplete={goToPayment} />
        </div>
        <div className={styles.flowStep}>
          <PaymentForm />
        </div>
      </div>

      {/* Step Dots */}
      <div className={styles.dotsWrap}>
        {[1, 2, 3].map((s) => (
          <span
            key={s}
            className={`${styles.dot} ${step === s ? styles.active : ""}`}
          />
        ))}
      </div>
    </Modal>
  );
};

export default SubscriptionModalFlow;
