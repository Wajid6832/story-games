import React from "react";
import style from "../../Module/WriterSidebar.module.css";
import { Nav } from "react-bootstrap";
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

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebarTop}>
        <div className={style.sidebarBrand}>
          <span className={style.sidebarTitle}>Story Host</span>
        </div>

        <Nav className="flex-column mt-1">
          <Nav.Link href="#" className={style.sidebarLink}>
            <House className="me-2" /> Home
          </Nav.Link>
          <Nav.Link href="#" className={style.sidebarLink}>
            <Person className="me-2" /> Profile
          </Nav.Link>
          <Nav.Link href="#" className={style.sidebarLink}>
            <Book className="me-2" /> Current Novels
          </Nav.Link>
          <Nav.Link href="#" className={style.sidebarLink}>
            <PencilSquare className="me-2" /> Become an Editor
          </Nav.Link>
          <Nav.Link href="#" className={style.sidebarLink}>
            <Heart className="me-2" /> Favorites
          </Nav.Link>
          <Nav.Link href="#" className={style.sidebarLink}>
            <Envelope className="me-2" /> Messages
          </Nav.Link>
        </Nav>
      </div>

      <div className={style.sidebarBottom}>
        <div className={style.readerMode}>
          <div className={style.switch}>
            <div className={style.switchCircle}></div>
          </div>
          <span>Reader Mode OFF</span>
        </div>

        <Nav className="flex-column mt-1">
          <Nav.Link href="#" className={style.sidebarLink}>
            <QuestionCircle className="me-2" /> Support
          </Nav.Link>
          <Nav.Link href="#" className={style.sidebarLink}>
            <BoxArrowRight className="me-2" /> Sign Out
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
