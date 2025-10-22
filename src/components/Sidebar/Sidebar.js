import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { ListGroup, Button, Form } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";

// ✅ Import your local images
import logo from "../../assets/logo.png";
import applications from "../../assets/applications.png";
import favourites from "../../assets/favourites.png";
import profile from "../../assets/profile.png";
import message from "../../assets/message.png";
import mail from "../../assets/mail.png";
import review from "../../assets/review.png";
import support from "../../assets/support.png";
import logout from "../../assets/logout.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.sidebar} ${!isOpen ? styles.collapsed : ""}`}>
      {/* Top section with logo and toggle */}
      <div className={styles.topSection}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Logo" className={styles.logoIcon} />
          {isOpen && <h5 className={styles.logoText}>Story Host</h5>}
        </div>
        <BiMenu className={styles.menuIcon} onClick={toggleSidebar} />
      </div>

      {/* Menu Items */}
      <ListGroup variant="flush" className={styles.menu}>
        <ListGroup.Item className={styles.item}>
          <img src={applications} alt="Home" className={styles.icon} />
          {isOpen && <span>Home</span>}
        </ListGroup.Item>

        <ListGroup.Item className={styles.item}>
          <img src={profile} alt="Profile" className={styles.icon} />
          {isOpen && <span>Profile</span>}
        </ListGroup.Item>

        <ListGroup.Item className={styles.item}>
          <img src={review} alt="Review Responses" className={styles.icon} />
          {isOpen && <span>Review Responses</span>}
        </ListGroup.Item>

        <ListGroup.Item className={styles.item}>
          <img src={mail} alt="Open Applications" className={styles.icon} />
          {isOpen && <span>Open Applications</span>}
        </ListGroup.Item>

        <ListGroup.Item className={styles.item}>
          <img src={message} alt="Messages" className={styles.icon} />
          {isOpen && <span>Messages</span>}
        </ListGroup.Item>

        <ListGroup.Item className={styles.item}>
          <img src={favourites} alt="Favorites" className={styles.icon} />
          {isOpen && <span>Favorites</span>}
        </ListGroup.Item>
      </ListGroup>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <Form.Check
          type="switch"
          id="reader-mode"
          label={isOpen ? "Reader Mode OFF" : ""}
        />
        <Button variant="link" className={styles.supportBtn}>
          <img src={support} alt="Support" className={styles.iconSmall} />
          {isOpen && "Support"}
        </Button>
        <Button variant="link" className={styles.signOutBtn}>
          <img src={logout} alt="Logout" className={styles.iconSmall} />
          {isOpen && "Sign Out"}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
