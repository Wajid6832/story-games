import React, { useState } from "react";
import style from "../../components/Sidebar/WriterSidebar.module.css";
import { Nav } from "react-bootstrap";
import { IoReorderThree, IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearState } from "../../features/auth/auth.slice";
import image from "../../assets/profile.png";
import image2 from "../../../../story-games/src/assets/review.png";
import image3 from "../../../../story-games/src/assets/applications.png";
import editor from "../../assets/editor.png";
import toggleIcon from "../../assets/toogle.png";
import { useEffect } from "react";
import {
  House,
  Book,
  Heart,
  Envelope,
  QuestionCircle,
  BoxArrowRight,
} from "react-bootstrap-icons";

const WriterSidebar = ({ isOpen, toggleSidebar }) => {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.auth);
  const role = data?.role || "writer";

  const [isReaderMode, setIsReaderMode] = useState(false);
  const toggleReaderMode = () => setIsReaderMode((prev) => !prev);

  const handleSignOut = () => {
    dispatch(clearState());
    localStorage.clear();
    navigate("/editorLogin", { replace: true });
  };

  return (
    <>
      {isOpen && <div className={style.sidebarOverlay} onClick={toggleSidebar} />}
      <button className={style.mobileToggle} onClick={toggleSidebar}>
        {isOpen ? <IoClose /> : <IoReorderThree />}
      </button>

      <div className={`${style.sidebar} ${isOpen ? style.open : style.closed}`}>
        <div className={style.sidebarTop}>
          <div className={style.sidebarBrand}>
            <span className={style.sidebarTitle}>Story Host</span>
            <div className={style.desktopIcon} onClick={toggleSidebar}>
              <IoReorderThree />
            </div>
          </div>

          <Nav className="flex-column mt-1">
            {role === "writer" && (
              <>
                <Link to="/writerHome" className={style.sidebarLink} onClick={toggleSidebar}>
                  <House className={style.me2} /> <span>Home</span>
                </Link>
                <Link to="/ProfilePage" className={style.sidebarLink} onClick={toggleSidebar}>
                  <img src={image} alt="" /> &nbsp;&nbsp;<span>Profile</span>
                </Link>
                <Link to="/bookpage" className={style.sidebarLink} onClick={toggleSidebar}>
                  <Book className={style.me2} /> <span>Current Novels</span>
                </Link>
                <Link to="/editorLogin" className={style.sidebarLink} onClick={toggleSidebar}>
                  <img src={editor} alt="" />&nbsp;&nbsp; <span>Become an Editor</span>
                </Link>
                <Link to="/authorCard" className={style.sidebarLink} onClick={toggleSidebar}>
                  <Heart className={style.me2} /> <span>Favorites</span>
                </Link>
                <Link to="#" className={style.sidebarLink} onClick={toggleSidebar}>
                  <Envelope className={style.me2} /> <span>Messages</span>
                </Link>
              </>
            )}

            {role === "editor" && (
              <>
                <Link to="/editorHome" className={style.sidebarLink} onClick={toggleSidebar}>
                  <House className={style.me2} /> <span>Dashboard</span>
                </Link>
                <Link to="/bookpage" className={style.sidebarLink} onClick={toggleSidebar}>
                  <Book className={style.me2} /> <span>Current Novels</span>
                </Link>
              </>
            )}


            {role === "producer" && (
              <>
                <Link to="/producerHome" className={style.sidebarLink} onClick={toggleSidebar}>
                  <House className={style.me2} /> <span>Home</span>
                </Link>
                <Link to="/profilePage" className={style.sidebarLink} onClick={toggleSidebar}>
                  <img src={image} alt="" /> &nbsp;&nbsp;<span>Profile</span>
                </Link>
                <Link to="/characterpage" className={style.sidebarLink} onClick={toggleSidebar}>
                  <img src={image2} alt="" /> &nbsp;&nbsp;<span>Review Responses</span>
                </Link>
                <Link to="/" className={style.sidebarLink} onClick={toggleSidebar}>
                  <img src={image3} alt="" /> &nbsp;&nbsp;<span>Open Application</span>
                </Link>
                <Link to="/chatApp" className={style.sidebarLink} onClick={toggleSidebar}>
                  <Envelope className={style.me2} /> <span>Messages</span>
                </Link>
                <Link to="/favorites" className={style.sidebarLink} onClick={toggleSidebar}>
                  <Heart className={style.me2} /> <span>Favorites</span>
                </Link>
              </>
            )}

            {role === "reader" && (
              <>
                <Link to="/readersLanding" className={style.sidebarLink} onClick={toggleSidebar}>
                  <House className={style.me2} /> <span>Reader Home</span>
                </Link>
                <Link to="/chatApp" className={style.sidebarLink} onClick={toggleSidebar}>
                  <Envelope className={style.me2} /> <span>Messages</span>
                </Link>
              </>
            )}
            {role === "producer" && (
              <>
                <Link to="/producerHome" className={style.sidebarLink} onClick={toggleSidebar}>
                  <House className={style.me2} /> <span>Home</span>
                </Link>
                <Link to="/profilePage" className={style.sidebarLink} onClick={toggleSidebar}>
                  <img src={image} alt="" /> &nbsp;&nbsp;<span>Profile</span>
                </Link>
                <Link to="/characterpage" className={style.sidebarLink} onClick={toggleSidebar}>
                  <img src={image2} alt="" /> &nbsp;&nbsp;<span>Review Responses</span>
                </Link>
                <Link to="/create-novel" className={style.sidebarLink} onClick={toggleSidebar}>
                  <img src={image3} alt="" /> &nbsp;&nbsp;<span>Open Application</span>
                </Link>
                <Link to="/chatApp" className={style.sidebarLink} onClick={toggleSidebar}>
                  <Envelope className={style.me2} /> <span>Messages</span>
                </Link>
                <Link to="/favorites" className={style.sidebarLink} onClick={toggleSidebar}>
                  <Heart className={style.me2} /> <span>Favorites</span>
                </Link>
              </>
            )}
          </Nav>
        </div>

        <div className={style.sidebarBottom}>
          <Nav className="flex-column">
            <Nav.Link href="#" className={style.sidebarLink} onClick={toggleReaderMode}>
              <img
                src={toggleIcon}
                alt="Toggle"
                className={`${style.toggleIcon} ${isReaderMode ? style.on : style.off}`}
              />
              <span>Reader Mode {isReaderMode ? "ON" : "OFF"}</span>
            </Nav.Link>
            <Nav.Link href="/supportFeedback" className={style.sidebarLink}>
              <QuestionCircle className={style.me2} /> <span>Support</span>
            </Nav.Link>

            <Nav.Link href="#" className={style.sidebarLink}>
              <BoxArrowRight className={style.me2} />
              <span onClick={handleSignOut}>Sign Out</span>
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </>
  );
};

export default WriterSidebar;
