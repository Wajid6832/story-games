import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";

import WriterLanding from "./components/Common/Landing/WriterLanding";
import Sidebar from "./components/Sidebar/WriterSidebar.jsx";
import WriterHome from "./components/Pages/WriterHome.jsx";
import LandingPage from "./components/LandingPage.jsx";
import ChatApp from "./components/Pages/ChatApp.jsx";


import Home from "./components/Common/Landing/Reader-Home";
import ReaderHome from "./components/Common/Landing/Reader-Home";
import ReadersLanding from "./components/Common/Landing/ReadersLanding";
import CurrentNovels from "./components/Common/Landing/CurrentNovels";
import SupportFeedback from "./components/Common/Landing/SupportFeedback"; 


function App() {
  return (
    <div className="App">
       {/* <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />}/>
        <Route path="/" element={<Login />} />

        <Route path="/" element={<ReaderHome/>} />
        <Route path="/readinghome" element={<ReadersLanding/>} />
        <Route path="/CurrentNovels" element={<CurrentNovels />} />
        <Route path="/SupportFeedback" element={<SupportFeedback />} /> 
      </Routes>
      </BrowserRouter> */}

      {/* <WriterLanding/> */}
{/* <LandingPage/> */}
      <ChatApp />
    </div>
  );
}

export default App;