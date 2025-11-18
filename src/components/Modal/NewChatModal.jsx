import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "./NewChatModal.module.css";
import styles from "../../Module/NewChatModal.module.css";
import image from "../../assets/ModalAssets/image.png"

const NewChatModal = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      contentClassName={styles.modalContent}
    >
      <Modal.Body className="text-center">
        {/* Illustration Section */}
        <div className={styles.illustration}>
          <div className={styles.chatIcon}>
            {/* <i className="bi bi-chat-dots"></i> */}
            <img className={styles.chatImg} src={image} alt="" />
          </div>
          <div className={styles.userIcons}>
            <i className={`bi bi-person-circle ${styles.user1}`}></i>
            <i className={`bi bi-person-circle ${styles.user2}`}></i>
          </div>
        </div>

        {/* Heading */}
        <h4 className="fw-semibold mt-3 mb-4">New Chat</h4>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3">
          <Button variant="primary" className={styles.primaryBtn}>
            Create Single Chat
          </Button>
          <Button variant="outline-primary" className={styles.outlineBtn}>
            Create Group
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default NewChatModal;
