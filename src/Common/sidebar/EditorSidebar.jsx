import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import Menue from "../../assets/menu.png";
import Profile from "../../assets/profile.png";
import Novels from "../../assets/novels.png";
import Producer from "../../assets/producer.png";
import Application from "../../assets/applications.png";
import Favourites from "../../assets/favourites.png";
import Mail from "../../assets/mail.png";
import Support from "../../assets/support.png"

// import Logout from "../../assets/logout.png";
import styles from "./EditorSidebar.module.css";
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
const EditorSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return (
      <div>


        <div className={styles.shoeMenue}>
          <div className={styles.menue}>
            <button onClick={handleOpen}>
              <img src={Menue} alt="menu" />
            </button>
          </div>
          <div className={styles.shoeManueLinks}>
            {[Profile, Novels, Producer, Application, Favourites, Mail].map((icon, index) => (
              <NavLink key={index} className={styles.navlinks}>
                <div className={styles.links}>
                  <div className={styles.imgLinks}>
                    <img src={icon} alt="icon" />
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  }


  if (isOpen) {

    return (
      <div className={styles.sidebarContainer}>
        <div className={styles.upperContainer}>
          <div className={styles.storyhostManue}>
            <div className={styles.sotryBook}>
              <div className={styles.img}>
                <img src={Logo} alt="logo" />
              </div>
              <div className={styles.storyText}>
                <p>Story Host</p>
              </div>
            </div>
            <div className={styles.menue}>
              <button onClick={handleOpen}>
                <img src={Menue} alt="menu" />
              </button>
            </div>
          </div>

          <div className={styles.linksList}>
            <NavLink className={styles.navlinks}>
              <div className={styles.links}>
                <div className={styles.imgLinks}>
                  <img src={Profile} alt="Profile" />
                </div>
                <div className={styles.linkText}>
                  <p>Profile</p>
                </div>
              </div>
            </NavLink>

            <NavLink className={styles.navlinks}>
              <div className={styles.links}>
                <div className={styles.imgLinks}>
                  <img src={Novels} alt="Current Novels" />
                </div>
                <div className={styles.linkText}>
                  <p>Current Novels</p>
                </div>
              </div>
            </NavLink>

            <NavLink className={styles.navlinks}>
              <div className={styles.links}>
                <div className={styles.imgLinks}>
                  <img src={Producer} alt="Become a Producer" />
                </div>
                <div className={styles.linkText}>
                  <p>Become a Producer</p>
                </div>
              </div>
            </NavLink>

            <NavLink className={styles.navlinks}>
              <div className={styles.links}>
                <div className={styles.imgLinks}>
                  <img src={Application} alt="Application" />
                </div>
                <div className={styles.linkText}>
                  <p>Open Application</p>
                </div>
              </div>
            </NavLink>

            <NavLink to="" className={styles.navlinks}>
              <div className={styles.links}>
                <div className={styles.imgLinks}>
                  <img src={Favourites} alt="Favorites" />
                </div>
                <div className={styles.linkText}>
                  <p>Favorites</p>
                </div>
              </div>
            </NavLink>

            <NavLink className={styles.navlinks}>
              <div className={styles.links}>
                <div className={styles.imgLinks}>
                  <img src={Mail} alt="Messages" />
                </div>
                <div className={styles.linkText}>
                  <p>Messages</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>

        <div className={styles.lowerContainer}>
          <div className={`${styles.commonLowercontent} ${styles.modeOnOf}`}>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="switchCheckDefault">
                Read mode off
              </label>
            </div>
          </div>
          <div className={`${styles.commonLowercontent} ${styles.suport}`}>
            <NavLink to="/">
              <img src={Support} alt="support" />
              <p>Support</p>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
};

export default EditorSidebar;
