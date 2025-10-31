import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

// Common / Editor Components
import Landing from "./components/Common/Landing/EditorLanding";
import EditorLogin from "./components/Common/Signin/EditorLogin";
import EditorLanding from "./Common/Landing/EditorLanding";

// Reader Components
import ReaderHome from "./Common/Landing/Reader-Home";
import SupportFeedback from "./components/Pages/ReaderSection2/SupportFeedBack/SupportFeedback";
import ReadersLanding from "./components/Pages/ReaderSection2/ReadersLanding/ReadersLanding";
import ReadersInfo from "./components/Pages/EditorOnlyComponents/ReadersClub/ReadersInfo";
import TermCondition1 from "./components/Pages/ReaderSection2/TermConditionPages/TermCondition1";

// Writer Components
import WriterMode from "./components/Pages/EditorOnlyComponents/WriterMode/WriterMode";
import AuthorCard from "./components/Pages/WriterOnlyComponents/Favourite/AuthorCard";
import Bookpage from "./components/Pages/WriterOnlyComponents/Bookpages/Bookpage";

// Producer Components
import HomePage from "./components/Pages/ProducerOnlyComponents/HomePage/HomePage";

import CharacterPage from "./components/Pages/ProducerOnlyComponents/CharacterPage/CharacterPage";
import CreateChapter from "./components/Pages/ProducerOnlyComponents/CreateChapter/CreateChapter";
import CreateNovel from "./components/Pages/ProducerOnlyComponents/NovelForm/CreateNovel";


// Layout
import Layout from "./layout/Layout";

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
          <Route path="/editorhome" element={<EditorLanding/>} />

          {/* Reader Routes */}
          <Route path="/readinghome" element={<ReadersLanding />} />
          <Route path="/supportfeedback" element={<SupportFeedback />} />
          <Route path="/info" element={<ReadersInfo />} />
          <Route path="/term1" element={<TermCondition1 />} />

          {/* Writer Routes */}
          <Route path="/write" element={<WriterMode />} />
          <Route path="/authorCard" element={<AuthorCard />} />
          <Route path="/bookpage" element={<Bookpage />} />

          {/*Producer Routes*/}
          <Route path="/producerhome" element={<HomePage />} />
          <Route path="/CharacterPage" element={<CharacterPage />} />
          <Route path="/CreateChapter" element={<CreateChapter />} />
          <Route path="/NovelForm" element={<CreateNovel />} />

          {/* Role-based Layout */}
          <Route element={<Layout />}>
            <Route path="/rolehome" element={ROLE_COMPONENTS[user.role] || null} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
