import React from "react";
import style from "../../components/Sidebar/WriterSidebar.module.css";
import { Nav } from "react-bootstrap";
import { IoReorderThree, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  House,
  Person,
  Book,
  PencilSquare,
  Heart,
  Envelope,
  QuestionCircle,
  BoxArrowRight,
} from "react-bootstrap-icons";

const WriterSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && (
        <div 
          className={style.sidebarOverlay} 
          onClick={toggleSidebar}
        />
      )}
      
      <button 
        className={style.mobileToggle}
        onClick={toggleSidebar}
      >
        {isOpen ? <IoClose /> : <IoReorderThree />}
      </button>

      <div className={`${style.sidebar} ${isOpen ? style.open : style.closed}`}>
        <div className={style.sidebarTop}>
          <div className={style.sidebarBrand}>
            <span className={style.sidebarTitle}>Story Host</span>
            <div className={style.icon} onClick={toggleSidebar}>
              <IoReorderThree />
            </div>
          </div>

          <Nav className="flex-column mt-1">
            <Link to="/" className={style.sidebarLink} onClick={() => window.innerWidth <= 768 && toggleSidebar()}>
              <House className={style.me2} /> <span>Home</span>
            </Link>
            <Link to="#" className={style.sidebarLink} onClick={() => window.innerWidth <= 768 && toggleSidebar()}>
              <Person className={style.me2} /> <span>Profile</span>
            </Link>
            <Link to="/Bookpage" className={style.sidebarLink} onClick={() => window.innerWidth <= 768 && toggleSidebar()}>
              <Book className={style.me2} /> <span>Current Novels</span>
            </Link>
            <Link to="#" className={style.sidebarLink} onClick={() => window.innerWidth <= 768 && toggleSidebar()}>
              <PencilSquare className={style.me2} /> <span>Become an Editor</span>
            </Link>
            <Link to="#" className={style.sidebarLink} onClick={() => window.innerWidth <= 768 && toggleSidebar()}>
              <Heart className={style.me2} /> <span>Favorites</span>
            </Link>
            <Link to="#" className={style.sidebarLink} onClick={() => window.innerWidth <= 768 && toggleSidebar()}>
              <Envelope className={style.me2} /> <span>Messages</span>
            </Link>
          </Nav>
        </div>

        <div className={style.sidebarBottom}>
          <div className={style.readerMode}>
            <div className={style.switch}>
              <div className={style.switchCircle}></div>
            </div>
            <span>Reader Mode OFF</span>
          </div>
          <Nav className="flex-column">
            <Nav.Link href="#" className={style.sidebarLink} onClick={() => window.innerWidth <= 768 && toggleSidebar()}>
              <QuestionCircle className={style.me2} /> <span>Support</span>
            </Nav.Link>
            <Nav.Link href="#" className={style.sidebarLink} onClick={() => window.innerWidth <= 768 && toggleSidebar()}>
              <BoxArrowRight className={style.me2} /> <span>Sign Out</span>
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </>
  );
};

export default WriterSidebar;