import React from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";
import WorkRoomPage from "./components/WorkRoom/WorkRoomPage";
import LandingPage from "./components/Landing/LandingPage";

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
      
       </BrowserRouter>
     
      
    </div>
  );
}
export default App;