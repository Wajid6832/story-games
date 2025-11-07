import { Outlet } from "react-router-dom";
import WriterSidebar from "../components/Sidebar/WriterSidebar";
import style from "./layout.module.css";
import Navbar from "../components/Navbar/Navbar";
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
        <Navbar />
        <div className="page-content">
          <Outlet />
        </div>
      </Container>
    </div>
  );
};

export default Layout;


// import { Outlet } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import { useState, useEffect } from "react";
// import style from "./layout.module.css";
// import Navbar from "../components/Navbar/Navbar";


// import WriterSidebar from "../components/Sidebar/WriterSidebar";
// import EditorSidebar from "../components/Sidebar/EditorSidebar";
// import ReaderSidebar from "../components/Sidebar/ReaderSidebar";
// import ProducerSidebar from "../components/Sidebar/ProducerSidebar";

// const Layout = ({ role }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   useEffect(() => {
//     const handleResize = () => {
//       setSidebarOpen(window.innerWidth > 768);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

 
//   const renderSidebar = () => {
//     switch (role) {
//       case "writer":
//         return <WriterSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />;
//       case "editor":
//         return <EditorSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />;
//       case "reader":
//         return <ReaderSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />;
//       case "producer":
//         return <ProducerSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className={style.layoutWrapper}>
     
//       {renderSidebar()}

      
//       <Container
//         fluid
//         className={`${style.mainWrapper} ${
//           sidebarOpen ? style.sidebarOpen : style.sidebarClosed
//         }`}
//       >
//         <Navbar />
//         <div className="page-content" style={{ overflowY: "auto", height: "100vh" }}>
//           <Outlet /> 
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Layout;
