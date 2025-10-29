// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// Writer/Editor Components
// import WriterHome from "./components/Pages/WriterHome";
// import EditorLanding from "./Common/Landing/EditorLanding";
// import Home from "./components/common/home/Home";
// import Bookpage from "./components/Pages/Bookpages/Bookpage";
// Reader Components
// import ReaderHome from "./components/Common/Landing/Reader-Home";
// import ReadersLanding from "./components/Common/Landing/ReadersLanding";
// import CurrentNovels from "./components/Common/Landing/CurrentNovels";
// import SupportFeedback from "./components/Common/Landing/SupportFeedback";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Login } from "./features/auth/Login";
// import { Products } from "./features/product/Product";
// import WriterLanding from "./components/Common/Landing/WriterLanding";
// import Sidebar from "./components/Sidebar/WriterSidebar.jsx";
// import WriterHome from "./components/Pages/WriterHome.jsx";
// import LandingPage from "./components/LandingPage.jsx";
import ChatApp from "./components/Pages/ChatApp.jsx";



function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Login />} />
      </Routes>
      </BrowserRouter> */}

      {/* <WriterLanding/> */}
{/* <LandingPage/> */}
      <ChatApp />
    </div>
  );
}

export default App;









// import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// // import NewChatModal from "./NewChatModal";
// import NewChatModal from "./components/Modal/NewChatModal";

// const ChatPage = () => {
//   const [show, setShow] = useState(false);

//   return (
//     <div className="p-5 text-center">
//       <Button variant="primary" onClick={() => setShow(true)}>
//         Open New Chat Modal
//       </Button>

//       <NewChatModal show={show} handleClose={() => setShow(false)} />
//     </div>
//   );
// };

// export default ChatPage;
