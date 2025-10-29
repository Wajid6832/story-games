import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";


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
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";
import ReaderHome from "./Common/Landing/Reader-Home";
import SupportFeedback from "./components/Pages/ReaderSection2/SupportFeedBack/SupportFeedback";
import ReadersLanding from "./components/Pages/ReaderSection2/ReadersLanding/ReadersLanding";
import ReadersInfo from "./components/Pages/EditorOnlyComponents/ReadersClub/ReadersInfo";
import TermCondition1 from "./components/Pages/ReaderSection2/TermConditionPages/TermCondition1";
import WriterMode from "./components/Pages/EditorOnlyComponents/WriterMode/WriterMode";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<ReaderHome />} />
          <Route path="/readinghome" element={<ReadersLanding />} />
          <Route path="/SupportFeedback" element={<SupportFeedback />} />
          <Route path="/info" element={<ReadersInfo />} />
          <Route path="/term1" element={<TermCondition1 />} />
          <Route path="/write" element={<WriterMode />} />
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

      </BrowserRouter>
    </div>
  );
}

export default App;
