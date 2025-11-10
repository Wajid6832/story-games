import React from "react";
import styles from "./sidebar.module.css";

// ✅ Import all your images
import logo from "../../../assets/logo.png";
import home from "../../../assets/home.png";
import review from "../../../assets/review.png";
import applications from "../../../assets/applications.png";
import mail from "../../../assets/mail.png";
import favourites from "../../../assets/favourites.png";
import toggle from "../../../assets/toogle.png";
import support from "../../../assets/support.png";
import logout from "../../../assets/logout.png";

const ProducerSidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* 🔹 Top Section (6 Icons) */}
      <div className={styles.topSection}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <img src={home} alt="Home" className={styles.icon} />
        <img src={review} alt="Review" className={styles.icon} />
        <img src={applications} alt="Applications" className={styles.icon} />
        <img src={mail} alt="Mail" className={styles.icon} />
        <img src={favourites} alt="Favourites" className={styles.icon} />
      </div>

      {/* 🔹 Bottom Section (3 Icons) */}
      <div className={styles.bottomSection}>
        <img src={toggle} alt="Toggle" className={styles.iconTogle} />
        <img src={support} alt="Support" className={styles.icon} />
        <img src={logout} alt="Logout" className={styles.icon} />
      </div>
    </div>
  );
};

export default ProducerSidebar;

