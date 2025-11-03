import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
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
// import ReaderHome from "./Common/Landing/Reader-Home";
// import ReadersLanding from "./components/Pages/ReaderSection1/LandingReader/ReadersLanding";
// import CurrentNovels from "./components/Pages/ReaderSection1/CurrentNovels/CurrentNovels"
// import TokenStore from "./components/Pages/ReaderSection1/TokenStore/TokenStore";
// import BecomeWriter from "./components/Pages/ReaderSection1/becomeWriter/becomeWriter";
// import ForgotPassword from "./components/Pages/ReaderSection1/ReaderForgotPassword/ForgotPassword";
// import LinkBankAccount from "./components/Pages/ReaderSection1/LinkBankAccount/LinkBankAccount";

// Common / Editor Components
import Landing from "./Common/Landing/EditorLanding";
import EditorLogin from "./components/Common/Signin/EditorLogin";
import EditorHome from "./components/Pages/EditorOnlyComponents/EditorHome";

// Reader Components
import ReaderHome from "./Common/Landing/Reader-Home";
import SupportFeedback from "./components/Pages/ReaderSection2/SupportFeedBack/SupportFeedback";
import ReadersLanding from "./components/Pages/ReaderSection2/ReadersLanding/ReadersLanding";
import ReadersInfo from "./components/Pages/EditorOnlyComponents/ReadersClub/ReadersInfo";
import TermCondition1 from "./components/Pages/ReaderSection2/TermConditionPages/TermCondition1";

// Writer Components
import WriterMode from "./components/Pages/EditorOnlyComponents/WriterMode/WriterMode";
import WriterHome from "./components/Pages/WriterOnlyComponents/WriterHome";
import AuthorCard from "./components/Pages/WriterOnlyComponents/Favourite/AuthorCard";
import Bookpage from "./components/Pages/WriterOnlyComponents/Bookpages/Bookpage";

// Layout
import Layout from "./layout/Layout";
import ReadersLandingSection1 from "./components/Pages/ReaderSection1/LandingReader/ReadersLanding";
import ForgotPassword from "./components/Pages/ReaderSection1/ReaderForgotPassword/ForgotPassword";
import LinkBankAccount from "./components/Pages/ReaderSection1/LinkBankAccount/LinkBankAccount";
import BecomeWriter from "./components/Pages/ReaderSection1/becomeWriter/becomeWriter";
import TokenStore from "./components/Pages/ReaderSection1/TokenStore/TokenStore";
import CurrentNovels from "./components/Pages/ReaderSection1/CurrentNovels/CurrentNovels";
import ModalFlow from "./components/Pages/ReaderSection1/ModalFLow/SubscriptionModalFlow"
// import BookReader from "./components/Pages/writersection/Characterpage/BookReader";
// import EditorLanding from "./components/common/landing/EditorLanding";
// import Home from "./components/Common/Landing/Reader-Home";
// import ReaderHome from "./components/Common/Landing/Reader-Home";

function App() {
  const user = {
    role: "writer", // You can dynamically set this role later
  };

  const ROLE_COMPONENTS = {
    writer: <Bookpage />,
    reader: <ReaderHome />,
    author: <AuthorCard />,
    producer: <></>,
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Editor / Landing Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/editorlogin" element={<EditorLogin />} />
          <Route path="/editorhome" element={<EditorHome />} />

          {/* Reader Routes */}
          <Route path="/readinghome" element={<ReadersLanding />} />
          <Route path="/supportfeedback" element={<SupportFeedback />} />
          <Route path="/info" element={<ReadersInfo />} />
          <Route path="/term1" element={<TermCondition1 />} />

          {/* Writer Routes */}
          <Route path="/write" element={<WriterMode />} />
          <Route path="/authorCard" element={<AuthorCard />} />
          <Route path="/bookpage" element={<Bookpage />} />

          {/* Role-based Layout */}
          <Route element={<Layout />}>
            <Route path="/" element={ROLE_COMPONENTS[user.role] || null} />

            {/* nechy 5 routes readers k hein */}
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/LinkBankAccount" element={<LinkBankAccount />} />
            <Route path="/CurrentNovels" element={<CurrentNovels />} />
            <Route path="/becomeWriter" element={<BecomeWriter />} />
            <Route path="/tokenstore" element={<TokenStore />} />
            <Route path="/readinghome" element={<ReadersLandingSection1 />} />
            <Route path="/ModalFlow" element={<ModalFlow/>}/>
          </Route>

          {/* <Route path="/WriterHome" element={<WriterHome />} />
          <Route path="/Bookpage" element={<Bookpage />} /> */}
          {/* Writer & Editor Routes */}
          {/* <Route path="/writer" element={<WriterHome />} />
          <Route path="/editor" element={<EditorLanding />} />
          <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/" element={<ReaderHome/>} />
          <Route path="/" element={<Landing/>} /> */}

          {/* <Route path="/bookReader" element={<BookReader />} /> */}
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
