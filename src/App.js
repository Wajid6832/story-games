// Writer/Editor Components
// import WriterHome from "./components/Pages/WriterHome";
// import EditorLanding from "./components/common/landing/EditorLanding";
// import Home from "./components/common/home/Home";
// import Bookpage from "./components/Pages/Bookpages/Bookpage";
// import React from "react";
// import { Login } from "./features/auth/Login";
// import { Products } from "./features/product/Product";
// import Home from "./components/Common/Landing/Reader-Home";
import "./App.css";
import ReaderHome from "./Common/Landing/Reader-Home";
import ReadersLanding from "./components/Pages/ReaderSection1/LandingReader/ReadersLanding";
import CurrentNovels from "./components/Pages/ReaderSection1/CurrentNovels/CurrentNovels"
import TokenStore from "./components/Pages/ReaderSection1/TokenStore/TokenStore";
import BecomeWriter from "./components/Pages/ReaderSection1/becomeWriter/becomeWriter";
import ForgotPassword from "./components/Pages/ReaderSection1/ReaderForgotPassword/ForgotPassword";
import LinkBankAccount from "./components/Pages/ReaderSection1/LinkBankAccount/LinkBankAccount";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Landing  from "./components/Common/Landing/EditorLanding";


function App() {
  return (
    <div className="App">
      { <BrowserRouter>
      <Routes>
        {/* <Route path="/WriterHome" element={<WriterHome />} />
        <Route path="/Bookpage" element={<Bookpage />} /> */}
         {/* Writer & Editor Routes */} 
         {/* <Route path="/writer" element={<WriterHome />} />
          <Route path="/editor" element={<EditorLanding />} />
          <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<ReaderHome/>} />
        <Route path="/readinghome" element={<ReadersLanding/>} />
        <Route path="/CurrentNovels" element={<CurrentNovels/>} />
        <Route path="/becomeWriter" element={<BecomeWriter />} />
        <Route path="/tokenstore" element={<TokenStore />} />
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        <Route path="/LinkBankAccount" element={<LinkBankAccount/>}/>
        <Route path="/" element={<Landing/>} />
      </Routes>
      </BrowserRouter> }

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
