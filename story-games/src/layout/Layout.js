import { Outlet } from "react-router-dom";
import WriterSidebar from "../components/Sidebar/WriterSidebar";
import style from "./layout.module.css";
// import Navbar from "../components/Navbar/Navbar";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const Layout = ({ role }) => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={style.layoutWrapper}>
      <WriterSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} role={role} />
      <Container
        fluid
        className={`${style.mainWrapper} ${sidebarOpen ? style.sidebarOpen : style.sidebarClosed}`}
      >
        {/* <Navbar /> */}
        <div className="page-content">
          <Outlet />
        </div>
      </Container>
    </div>
  );
};

export default Layout;
