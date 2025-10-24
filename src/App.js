
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { Login } from "./features/auth/Login";
// import { Products } from "./features/product/Product";

// Writer/Editor Components
import WriterHome from "./components/Pages/WriterHome";
// import EditorLanding from "./components/common/landing/EditorLanding";
// import Home from "./components/Pages/";
import Bookpage from "./components/Pages/Bookpages/Bookpage";
// Reader Components
// import ReaderHome from "./components/Common/Landing/Reader-Home";
// import ReadersLanding from "./components/Common/Landing/ReadersLanding";
// import CurrentNovels from "./components/Common/Landing/CurrentNovels";
// import SupportFeedback from "./components/Common/Landing/SupportFeedback";
// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Login } from "./features/auth/Login";
// import { Products } from "./features/product/Product";
// import Home from "./components/Common/Landing/Reader-Home";
// import ReaderHome from "./components/Common/Landing/Reader-Home";
// import ReadersLanding from "./components/Common/Landing/ReadersLanding";
import CurrentNovels from "./components/Common/CurrentNovels/CurrentNovels";
// import SupportFeedback from "./components/Common/Landing/SupportFeedback"; 
import EditorHome from "./components/Common/home/EditorHome";
// import EditorLanding from "./components/Common/Landing/EditorLanding";
import TokenStore from "./components/TokenStore/TokenStore";
import EditorLanding from "./Common/Landing/EditorLanding";
// import BecomeWriter from "./components/Common/becomeWriter/becomeWriter";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<EditorLanding/>} /> 
        <Route path="/EditorHome" element={<EditorHome />} />
        <Route path="/WriterHome" element={<WriterHome />} />
        <Route path="/Bookpage" element={<Bookpage />} />
     
          {/* Writer & Editor Routes */} 
         <Route path="/writer" element={<WriterHome />} />
          {/* <Route path="/editor" element={<EditorLanding />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}

          {/* Reader Routes */}
          {/* <Route path="/" element={<ReaderHome />} /> */}
          {/* <Route path="/readinghome" element={<ReadersLanding />} /> */}
          <Route path="/currentnovels" element={<CurrentNovels />} />
          {/* <Route path="/supportfeedback" element={<SupportFeedback />} /> */}
        
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/" element={<ReaderHome/>} /> */}
        {/* <Route path="/readinghome" element={<ReadersLanding/>} /> */}
        <Route path="/CurrentNovels" element={<CurrentNovels />} />
        {/* <Route path="/becomewriter" element={<BecomeWriter />} /> */}
        {/* <Route path="/SupportFeedback" element={<SupportFeedback />} />  */}
        {/* <Route path="/editorlanding" element={<EditorLanding/>} />  */}
        <Route path="/tokenstore" element={<TokenStore />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
