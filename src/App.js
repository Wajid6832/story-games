
// import Bookpage from "./components/Pages/Bookpages/Bookpage";
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Login } from "./features/auth/Login";
// import { Products } from "./features/product/Product";

// import WriterLanding from "./components/Common/Landing/WriterLanding";
// import Sidebar from "./components/Sidebar/WriterSidebar.jsx";
// import WriterHome from "./components/Pages/WriterHome.jsx";
// import LandingPage from "./components/LandingPage.jsx";
// import ChatApp from "./components/Pages/ChatApp.jsx";



// import WorkRoomPage from "./components/WorkRoom/WorkRoomPage";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

// import Home from "./components/Common/Landing/Reader-Home";
// import ReaderHome from "./components/Common/Landing/Reader-Home";
// import ReadersLanding from "./components/Common/Landing/ReadersLanding";
// import CurrentNovels from "./components/Common/CurrentNovels/CurrentNovels";
// import SupportFeedback from "./components/Common/Landing/SupportFeedback"; 
// import PrivacyPolicy from "./components/StoryPrivacyPolicy/StoryPrivacyPolicyPage";

// import TokenStore from "./components/TokenStore/TokenStore";
// import BecomeWriter from "./components/Common/becomeWriter/becomeWriter";




// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
        
//         <Route path="/Bookpage" element={<Bookpage />} />
     
//          <Route path="/writer" element={<WriterHome />} />
//           <Route path="/editor" element={<EditorLanding />} />
//           <Route path="/home" element={<Home />} />

//           <Route path="/" element={<ReaderHome />} />
          
//         <Route path="/" element={<ReaderHome/>} />
//         <Route path="/readinghome" element={<ReadersLanding/>} />
//         <Route path="/CurrentNovels" element={<CurrentNovels />} />
//         <Route path="/becomewriter" element={<BecomeWriter />} />
//         <Route path="/SupportFeedback" element={<SupportFeedback />} /> 
//          <Route path="/workroompage" element={ <WorkRoomPage/>} /> 
//           <Route path="/landingpage" element={<LandingPage/>} /> 
//            <Route path="/privacypolicypage" element={<PrivacyPolicy/>} /> 
//         <Route path="/tokenstore" element={<TokenStore />} />
//       </Routes>
      
//        </BrowserRouter>
     
//     </div>
//   );
// }
  
// export default App;







import ChatApp from "../src/components/Pages/ChatApp"


function App() {
  return (
    <div>
      <ChatApp/>
     
    </div>
  );
}
  
export default App;


