import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import logo from "../../../src/assets/Readers-Assets/items/Property 1=Variant3.png";
import homeIcon from "../../../src/assets/Readers-Assets/icons/home.png";
import profileIcon from "../../../src/assets/Readers-Assets/icons/profile.png";
import novelsIcon from "../../../src/assets/Readers-Assets/icons/novels.png";
import writerIcon from "../../../src/assets/Readers-Assets/icons/writer.png"
import storeIcon from "../../../src/assets/Readers-Assets/icons/tokens.png";
import favIcon from "../../../src/assets/Property.png";
import "./Sidebar.css";

const SidebarLink = ({ icon, label, to, onClick }) => (
  <Nav.Link
    as={NavLink}
    to={to || "#"}
    className={({ isActive }) =>
      `d-flex align-items-center px-3 py-2 mb-1 rounded ${
        isActive
          ? "bg-primary bg-opacity-10 text-primary fw-semibold active"
          : "text-secondary"
      }`
    }
    onClick={onClick}
    style={{ cursor: "pointer" }}
  >
    <img src={icon} alt={label} className="sidebar-icon me-2" />
    <span>{label}</span>
  </Nav.Link>
);

const StaticSidebarContent = ({ toggleSidebar }) => {
  const links = [
    { icon: homeIcon, label: "Home", to: "/" },
    { icon: profileIcon, label: "Profile", to: "/profile" },
    { icon: novelsIcon, label: "Current Novels", to: "/currentNovels" },
    { icon: writerIcon, label: "Become a Writer", to: "/BecomeWriter" },
    { icon: storeIcon, label: "Token Store", to: "/store" },
    { icon: favIcon, label: "Favorites", to: "/forgotPassword" },
  ];

  const footerLinks = [
    { icon: "bi bi-question-circle", label: "Support", to: "/SupportFeedback" },
    { icon: "bi bi-box-arrow-right", label: "Sign Out", to: "/LinkBankAccount" },
  ];

  return (
    <div className="h-100 px-3 py-3 d-flex flex-column sidebar-content">
      <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
        <h5 className="mb-0 d-flex align-items-center">
          <img src={logo} alt="Story Host Logo" className="logo-icon me-2" />
          Story Host
        </h5>
        <button
          className="btn btn-light btn-sm shadow-sm"
          onClick={toggleSidebar}
          style={{ borderRadius: "50%" }}
        >
          <i className="bi bi-list fs-5"></i>
        </button>
      </div>

      <Nav className="flex-column flex-grow-1">
        {links.map((link) => (
          <SidebarLink
            key={link.label}
            icon={link.icon}
            label={link.label}
            to={link.to}
            onClick={toggleSidebar}
          />
        ))}
      </Nav>

      <div className="mt-auto pt-3 border-top">
        <div className="form-check form-switch mb-2 d-flex align-items-center">
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
        {footerLinks.map((link) => (
          <Nav.Link
            as={NavLink}
            key={link.label}
            to={link.to}
            className="d-flex align-items-center px-3 py-2 mb-1 rounded text-secondary"
            onClick={toggleSidebar}
          >
            <i className={`${link.icon} fs-5 me-2`}></i>
            <span>{link.label}</span>
          </Nav.Link>
        ))}
      </div>
    </div>
  );
};

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobile &&
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        toggleSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen, isMobile, toggleSidebar]);

  const sidebarClass = isMobile
    ? isOpen
      ? "open"
      : ""
    : isOpen
    ? "expanded"
    : "collapsed";

  return (
    <>
      {isOpen && isMobile && (
        <div
          className="position-fixed w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 1040 }}
          onClick={toggleSidebar}
        />
      )}
      <div
        ref={sidebarRef}
        className={`sidebar bg-white border-end ${sidebarClass}`}
      >
        <StaticSidebarContent toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
};

export default Sidebar;
