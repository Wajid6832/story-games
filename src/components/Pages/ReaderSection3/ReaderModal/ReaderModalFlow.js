import React, { useState } from "react";
import TokenStore from "../../ReaderSection3/ReaderModal/TokenModal";
import ReadersInfo from "../../ReaderSection2/ReadersClub/ReadersInfo";
import PaymentForm from "../../ReaderSection3/Paymentform/PaymentForm";

const ReadersModalFlow = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const totalSteps = 3;

  const goToNextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps - 1));

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return <TokenStore onSelectPlan={goToNextStep} onClose={onClose} />;
      case 1:
        return <ReadersInfo onProceed={goToNextStep} onClose={onClose} />;
      case 2:
        return <PaymentForm onClose={onClose} />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
         justifyContent: "space-between",
      }}
    >
      {/* Step Content */}
      <div style={{ flex: 1, overflowY: "auto" }}>{renderStepContent()}</div>

      {/* 3 Clickable Lines (Step Indicators) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          position: "absolute",
          bottom: 30,
          width: "100%",
           marginBottom: "20px",
        }}
      >
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            onClick={() => setStep(index)}
            style={{
              width: "60px",
              height: "5px",
              borderRadius: "3px",
              background: step === index ? "#6f8bdf" : "#d3d3d3",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ReadersModalFlow;
