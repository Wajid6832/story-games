import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";

export const CommonModal = (props) => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .modal-content {
        border: none !important;
        box-shadow: none !important;
        background: transparent !important;
      }
      .modal-dialog {
        box-shadow: none !important;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Body
        className={props.bodyClasses}
        style={{
          border: "none",
          boxShadow: "none",
          background: "transparent",
        }}
      >
        {props.children}
      </Modal.Body>
    </Modal>
  );
};
