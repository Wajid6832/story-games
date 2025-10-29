import React, { useRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import styles from "./Sidebar.module.css";

import logo from"../../../../assets/Readers-Assets/items/Property 1=Variant3.png";
import homeIcon from "../../../../assets/Readers-Assets/icons/home.png";
import profileIcon from "../../../../assets/Readers-Assets/icons/profile.png";
import novelsIcon from "../../../../assets/Readers-Assets/icons/novels.png";
import writerIcon from "../../../../assets/Readers-Assets/icons/writer.png";
import storeIcon from "../../../../assets/Readers-Assets/icons/tokens.png";
import favIcon from "../../../../assets/Readers-Assets/icons/Property.png";

const SidebarLink = ({ icon, label, to, onClick, isOpen }) => (
  <Nav.Link
    as={NavLink}
    to={to || "#"}
    className={({ isActive }) =>
      `d-flex align-items-center px-3 py-2 mb-1 rounded ${
        isActive
          ? "bg-primary bg-opacity-10 text-primary fw-semibold active"
          : "text-secondary"
      } ${styles['nav-link']}`
    }
    onClick={onClick}
    style={{ cursor: "pointer" }}
  >
    <img src={icon} alt={label} className={`${styles['sidebar-icon']} me-2`} />
    {isOpen && <span>{label}</span>}
  </Nav.Link>
);


const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  const links = [
    { icon: homeIcon, label: "Home", to: "/" },
    { icon: profileIcon, label: "Profile", to: "/profile" },
    { icon: novelsIcon, label: "Current Novels", to: "/CurrentNovels" },
    { icon: writerIcon, label: "Become a Writer", to: "/becomewriter" },
    { icon: storeIcon, label: "Token Store", to: "/tokenstore" },
    { icon: favIcon, label: "Favorites", to: "/forgotPassword" },
  ];

  const footerLinks = [
    { icon: "bi-question-circle", label: "Support", to: "/SupportFeedback" },
    { icon: "bi-box-arrow-right", label: "Sign Out", to: "/LinkBankAccount" },
  ];

  const handleNavigate = (to) => {
    navigate(to);
    if (isMobile) toggleSidebar(); 
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopStateClass = !isMobile 
    ? (isOpen ? styles.expanded : styles.collapsed) 
    : ''; 
  
  const mobileClass = isMobile ? (isOpen ? styles.open : styles.closed) : '';

  const positionClass = "position-fixed h-100 start-0 top-0";

  const sidebarStyle = {
    zIndex: 1050, 
    transition: 'all 0.3s ease', 
    width: isMobile ? (isOpen ? '250px' : '0px') : (isOpen ? '260px' : '70px')
  };
  
  const isTextVisible = isOpen; 
  
  return (
    <>
      {isMobile && isOpen && (
        <div
          className="position-fixed w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 1040 }}
          onClick={toggleSidebar}
        />
      )}
      
      <div 
        ref={sidebarRef} 
        className={`${styles.sidebar} ${positionClass} ${desktopStateClass} ${mobileClass} bg-white border-end`}
        style={sidebarStyle}
      >
        <div className={`${styles['sidebar-content']} h-100 px-3 py-3 d-flex flex-column`} style={{ minWidth: '70px', transition: 'width 0.3s ease' }}>
          <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
            <h5 className="mb-0 d-flex align-items-center">
            
              <img src={logo} alt="Story Host Logo" className={`${styles['logo-icon']} me-2`} style={{ width: '24px', height: '24px' }}/>
          
              {isTextVisible && <span className={styles['sidebar-brand-text']}>Story Host</span>}
            </h5>
            <button
              className={`btn btn-light btn-sm shadow-sm ${styles['sidebar-toggle-btn']}`}
              onClick={toggleSidebar}
              style={{ borderRadius: "50%" }}
            >
              <i className="bi bi-list fs-5"></i>
            </button>
          </div>

          <Nav className="flex-column flex-grow-1">
            {links.map((link) => (
              <div key={link.label} onClick={() => handleNavigate(link.to)}>
              
                <SidebarLink
                  icon={link.icon}
                  label={link.label}
                  to={link.to}
                  isOpen={isTextVisible}
                />
              </div>
            ))}
          </Nav>

          <div className="mt-auto pt-3 border-top">
            {isTextVisible && (
              <div className={`form-check form-switch mb-2 d-flex align-items-center ${styles['reader-mode-switch']}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="readerModeSwitch"
                  defaultChecked
                />
                <label
                  className="form-check-label ms-2 small"
                  htmlFor="readerModeSwitch"
                >
                  Reader Mode ON
                </label>
              </div>
            )}
            
            {footerLinks.map((link) => (
              <Nav.Link
                as={NavLink}
                key={link.label}
                to={link.to}
                className={`${styles['nav-link']} d-flex align-items-center px-3 py-2 mb-1 rounded text-secondary`}
                onClick={() => handleNavigate(link.to)}
              >
                <i className={`${link.icon} fs-5 me-2`}></i>
                {isTextVisible && <span>{link.label}</span>}
              </Nav.Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;