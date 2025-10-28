import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";

// ✅ Updated correct imports based on new structure
import ReaderHome from "./components/Common/Readers-Landing/Reader-Home";
import ReadersLanding from "./components/Common/Readers-Landing/ReadersLanding";
import CurrentNovels from "./components/CurrentNovels/CurrentNovels";
import TokenStore from "./components/TokenStore/TokenStore";
import BecomeWriter from "./components/Common/becomeWriter/becomeWriter";
// import WriterLanding from "./components/Common/Landing/WriterLanding";
import Sidebar from "./components/Sidebar/WriterSidebar.jsx";
// import WriterHome from "./components/Pages/WriterHome.jsx";
// import LandingPage from "./components/LandingPage.jsx";
// import ChatApp from "./components/Pages/ChatApp.jsx";
// import WorkRoomPage from "./components/WorkRoom/WorkRoomPage";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// ❌ Duplicate imports below (commented out to fix redeclaration)
/// import Home from "./components/Common/Landing/Reader-Home";
// import ReaderHome from "./components/Common/Landing/Reader-Home";
// import ReadersLanding from "./components/Common/Landing/ReadersLanding";
// import CurrentNovels from "./components/Common/Landing/CurrentNovels";
// import SupportFeedback from "./components/Common/Landing/SupportFeedback";
import PrivacyPolicy from "./components/StoryPrivacyPolicy/StoryPrivacyPolicyPage";
import SupportFeedback from "./components/Pages/ReaderSection2/SupportFeedBack/SupportFeedback.js";

function App() {
  return (
    <div className="App">
      {/* ✅ Main Routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReaderHome />} />
          <Route path="/readinghome" element={<ReadersLanding />} />
          <Route path="/currentnovels" element={<CurrentNovels />} />
          <Route path="/becomewriter" element={<BecomeWriter />} />
          <Route path="/supportfeedback" element={<SupportFeedback />} />
          <Route path="/tokenstore" element={<TokenStore />} />
       

     
          <Route path="/products" element={<Products />} />
          {/* <Route path="/ChatApp" element={<ChatApp />} /> */}
          <Route path="/" element={<Login />} />
          {/* <Route path="/" element={<ReaderHome />} /> */}
          {/* <Route path="/readinghome" element={<ReadersLanding />} /> */}
          {/* <Route path="/CurrentNovels" element={<CurrentNovels />} /> */}
          {/* <Route path="/SupportFeedback" element={<SupportFeedback />} /> */}
          {/* <Route path="/workroompage" element={<WorkRoomPage />} /> */}
          {/* <Route path="/landingpage" element={<LandingPage />} /> */}
          <Route path="/privacypolicypage" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
