import React from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";

import WriterLanding from "./components/Common/Landing/WriterLanding";
import Sidebar from "./components/Sidebar/WriterSidebar.jsx";
import WriterHome from "./components/Pages/WriterHome.jsx";
import LandingPage from "./components/LandingPage.jsx";
import ChatApp from "./components/Pages/ChatApp.jsx";



import WorkRoomPage from "./components/WorkRoom/WorkRoomPage";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Login } from "./features/auth/Login";
// import { Products } from "./features/product/Product";

import Home from "./components/Common/Landing/Reader-Home";
import ReaderHome from "./components/Common/Landing/Reader-Home";
import ReadersLanding from "./components/Common/Landing/ReadersLanding";
import CurrentNovels from "./components/Common/Landing/CurrentNovels";
import SupportFeedback from "./components/Common/Landing/SupportFeedback"; 
import PrivacyPolicy from "./components/StoryPrivacyPolicy/StoryPrivacyPolicyPage";




function App() {
  return (
    <div className="App">
       {/* <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />}/>
        <Route path="/" element={<Login />} />

=======
     <BrowserRouter>
      <Routes> 
        <Route path="/products" element={<Products />} />
         <Route path="/" element={<Login />} />
        <Route path="/" element={<ReaderHome/>} />
        <Route path="/readinghome" element={<ReadersLanding/>} />
        <Route path="/CurrentNovels" element={<CurrentNovels />} />
        <Route path="/SupportFeedback" element={<SupportFeedback />} /> 
         <Route path="/workroompage" element={ <WorkRoomPage/>} /> 
          <Route path="/landingpage" element={<LandingPage/>} /> 
           <Route path="/privacypolicypage" element={<PrivacyPolicy/>} /> 
        
      </Routes>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fc8c8fe (conflicts handling and make chatbox responsive)
      </BrowserRouter> */}

      {/* <WriterLanding/> */}
{/* <LandingPage/> */}
      <ChatApp />
      
       {/* </BrowserRouter> */}
     
    </div>
  );
}

export default App;