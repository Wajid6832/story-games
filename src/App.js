
<<<<<<< HEAD
import ChatApp from "./components/Pages/WriterOnlyComponents/ChatApp/ChatApp"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
           <Route path="/" element={<ChatApp/>} />
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
