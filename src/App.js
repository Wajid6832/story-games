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
// import ReaderHome from "./Common/Landing/Reader-Home";
// import ReadersLanding from "./components/Pages/ReaderSection1/LandingReader/ReadersLanding";
// import CurrentNovels from "./components/Pages/ReaderSection1/CurrentNovels/CurrentNovels"
// import TokenStore from "./components/Pages/ReaderSection1/TokenStore/TokenStore";
// import BecomeWriter from "./components/Pages/ReaderSection1/becomeWriter/becomeWriter";
// import ForgotPassword from "./components/Pages/ReaderSection1/ReaderForgotPassword/ForgotPassword";
// import LinkBankAccount from "./components/Pages/ReaderSection1/LinkBankAccount/LinkBankAccount";

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
// import WriterHome from "./components/Pages/WriterOnlyComponents/WriterHome";
import AuthorCard from "./components/Pages/WriterOnlyComponents/Favourite/AuthorCard";
import Bookpage from "./components/Pages/WriterOnlyComponents/Bookpages/Bookpage";
import Layout from "./layout/Layout";
// import BookReader from "./components/Pages/writersection/Characterpage/BookReader";
// import EditorLanding from "./components/common/landing/EditorLanding";
// import Home from "./components/Common/Landing/Reader-Home";
// import ReaderHome from "./components/Common/Landing/Reader-Home";

function App() {
  const user = {
    role: "writer",
  };

  const ROLE_COMPONENTS = {
    // writer: <WriterHome />,
    reader: <Bookpage />,
    author: <></>,
    producer: <></>,
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/" element={<ReaderHome />} /> */}
          {/* <Route path="/readinghome" element={<ReadersLanding />} /> */}
          <Route path="/SupportFeedback" element={<SupportFeedback />} />
          <Route path="/info" element={<ReadersInfo />} />
          <Route path="/term1" element={<TermCondition1 />} />
          <Route path="/write" element={<WriterMode />} />

          {/* Reader Routes */}
          {/* <Route path="/" element={<ReaderHome />} /> */}
          {/* <Route path="/readinghome" element={<ReadersLanding />} />
          <Route path="/currentnovels" element={<CurrentNovels />} />
          <Route path="/supportfeedback" element={<SupportFeedback />} />
          <Route path="/becomewriter" element={<BecomeWriter />} />
          <Route path="/tokenstore" element={<TokenStore />} /> */}
          {/* Optional / commented routes */}
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/" element={<Login />} /> */}

          <Route element={<Layout />}>
            <Route path="/" element={ROLE_COMPONENTS[user.role] || null} />
            <Route path="/authorCard" element={<AuthorCard />} />
            <Route path="/bookpage" element={<Bookpage />} />
            {/* <Route path="/bookReader" element={<BookReader />} /> */}
            {/* <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
