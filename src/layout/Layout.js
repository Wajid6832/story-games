import { Outlet } from "react-router-dom";
import WriterSidebar from "../components/Sidebar/WriterSidebar";
import style from "./layout.module.css"
import Navbar from "../components/Navbar/Navbar";
import { Container } from "react-bootstrap";
import { useState } from "react";

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
      const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className={style.layoutWrapper}>
      <WriterSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Container
        fluid
        className={`${style.mainWrapper} ${
          sidebarOpen ? style.sidebarOpen : style.sidebarClosed
        }`}
      >
        <Navbar />
        <div className="page-content">
          <Outlet />
        </div>
      </Container>
    </div>
  );
};

export default Layout;
