import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Editor Components
import Landing from "./Common/Landing/EditorLanding";
import EditorLogin from "./components/Common/Signin/EditorLogin";
import EditorHome from "./components/Pages/EditorOnlyComponents/EditorHome";

// Writer Components
import WriterHome from "./components/Pages/WriterOnlyComponents/WriterHome";
import AuthorCard from "./components/Pages/WriterOnlyComponents/Favourite/AuthorCard";
import Bookpage from "./components/Pages/WriterOnlyComponents/Bookpages/Bookpage";
import WriterMode from "./components/Pages/EditorOnlyComponents/WriterMode/WriterMode";

// Reader Components
import ReaderHome from "./Common/Landing/Reader-Home";
import ReadersLandingSection1 from "./components/Pages/ReaderSection1/LandingReader/ReadersLanding";
import ForgotPassword from "./components/Pages/ReaderSection1/ReaderForgotPassword/ForgotPassword";
import LinkBankAccount from "./components/Pages/ReaderSection1/LinkBankAccount/LinkBankAccount";
import BecomeWriter from "./components/Pages/ReaderSection1/becomeWriter/becomeWriter";
import TokenStore from "./components/Pages/ReaderSection1/TokenStore/TokenStore";
import CurrentNovels from "./components/Pages/ReaderSection1/CurrentNovels/CurrentNovels";
import ModalFlow from "./components/Pages/ReaderSection1/ModalFLow/SubscriptionModalFlow";
import SupportFeedback from "./components/Pages/ReaderSection2/SupportFeedBack/SupportFeedback";
import ReadersLanding from "./components/Pages/ReaderSection2/ReadersLanding/ReadersLanding";
import ReadersInfo from "./components/Pages/EditorOnlyComponents/ReadersClub/ReadersInfo";
import TermCondition1 from "./components/Pages/ReaderSection2/TermConditionPages/TermCondition1";

// Common
import Layout from "./layout/Layout";

function App() {
  const user = {
    role: "editor",
  };

  const ROLE_COMPONENTS = {
    writer: <WriterHome />,
    reader: <Bookpage />,
    editor: <EditorHome />,
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/editorlogin" element={<EditorLogin />} />
          <Route path="/EditorHome" element={<EditorHome />} />

          {/* Protected / Layout Routes */}
          <Route element={<Layout />}>
            {/* Role-based route */}
            <Route path="/role" element={ROLE_COMPONENTS[user.role] || null} />

            {/* Writer & Editor */}
            <Route path="/writerhome" element={<WriterHome />} />
            <Route path="/authorCard" element={<AuthorCard />} />
            <Route path="/bookpage" element={<Bookpage />} />

            {/* Reader Section 1 */}
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/LinkBankAccount" element={<LinkBankAccount />} />
            <Route path="/CurrentNovels" element={<CurrentNovels />} />
            <Route path="/becomeWriter" element={<BecomeWriter />} />
            <Route path="/tokenstore" element={<TokenStore />} />
            <Route path="/readinghome" element={<ReadersLandingSection1 />} />
            <Route path="/ModalFlow" element={<ModalFlow />} />

            {/* Reader Section 2 */}
            <Route path="/SupportFeedback" element={<SupportFeedback />} />
            <Route path="/ReadersLanding" element={<ReadersLanding />} />
            <Route path="/ReadersInfo" element={<ReadersInfo />} />
            <Route path="/TermCondition1" element={<TermCondition1 />} />

            {/* Editor Tools */}
            <Route path="/WriterMode" element={<WriterMode />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
