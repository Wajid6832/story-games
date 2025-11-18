import { Button } from "react-bootstrap";
import styles from "./Chat.module.css";
import main from "../../../assets/ChatImage.png"

const ChatModal = ({ onHide, openNewChat, openGroupChat }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={onHide}>&times;</button>

        <img src={main} alt="" className={styles.img} />
        <h4 className="text-center mb-3">Start a Chat</h4>

        <div className={styles.buttonGroup}>
          <Button variant="secondary" className={`${styles.btn1} py-2 px-3 px-md-5`} onClick={openNewChat}>
            Create Single Chat
          </Button>
          <Button variant="primary" className={`${styles.btn2} py-2 px-3 px-md-5`} onClick={openGroupChat}>
            Create Group Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
