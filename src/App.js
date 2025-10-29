<<<<<<< HEAD

<<<<<<< HEAD
import ChatApp from "./components/Pages/WriterOnlyComponents/ChatApp/ChatApp"
=======
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
>>>>>>> b9ea2fee96e278f8ebf004adb28cd04d32716008
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
<<<<<<< HEAD
           <Route path="/" element={<ChatApp/>} />
=======
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
>>>>>>> b9ea2fee96e278f8ebf004adb28cd04d32716008
      </Routes>
      </BrowserRouter>
    </div>
  );
}
  
export default App;


=======
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "bootstrap-icons/font/bootstrap-icons.css";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./features/auth/Login";
// import { Products } from "./features/product/Product";
import LandingPage from "./Common/Landing/WriterLanding/WriterLandingPage";
import WorkRoomPage from "./components/Pages/WriterOnlyComponents/WorkRoom/WorkRoomPage";
import PrivacyPolicy from "./components/Pages/WriterOnlyComponents/StoryPrivacyPolicy/StoryPrivacyPolicyPage";
import TermsConditions from "./components/Pages/WriterOnlyComponents/StoryTermsCondition/StoryTermsConditionPage";




function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes> 
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/workroompage" element={ <WorkRoomPage/>} /> 
        <Route path="/landingpage" element={<LandingPage/>} /> 
        <Route path="/privacypolicypage" element={<PrivacyPolicy/>} /> 
        <Route path="/termsconditions" element={<TermsConditions/>} /> 
        
      </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App;
>>>>>>> 8bb858a9542d4bb2af90c4ced725194ece2cce80
