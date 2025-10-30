<<<<<<< HEAD


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Landing  from "./Common/Landing/EditorLanding";
=======
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

// Common / Editor Components
import Landing from "./components/Common/Landing/EditorLanding";
>>>>>>> 207b7be335a1bb130811916f4fb95bfa491e8e40
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
import AuthorCard from "./components/Pages/WriterOnlyComponents/Favourite/AuthorCard";
import Bookpage from "./components/Pages/WriterOnlyComponents/Bookpages/Bookpage";

// Layout
import Layout from "./layout/Layout";
<<<<<<< HEAD

=======
>>>>>>> 207b7be335a1bb130811916f4fb95bfa491e8e40

function App() {
  const user = {
<<<<<<< HEAD
    role: 'editor',
  }

  const ROLE_COMPONENTS = {
    writer: <WriterHome/>,
    reader: <Bookpage/>,
    editor: <EditorHome/>,
=======
    role: "writer", // You can dynamically set this role later
  };

  const ROLE_COMPONENTS = {
    writer: <Bookpage />,
    reader: <ReaderHome />,
    author: <AuthorCard />,
>>>>>>> 207b7be335a1bb130811916f4fb95bfa491e8e40
    producer: <></>,
  };

  return (
<<<<<<< HEAD
    <div>
       <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/editorlogin" element={<EditorLogin />} />
     

        {/* Protected / Role-based Layout */}
        <Route element={<Layout />}>
          <Route path="/writer" element={ROLE_COMPONENTS[user.role] || null} />
          <Route path="/authorCard" element={<AuthorCard />} />
          <Route path="/bookpage" element={<Bookpage />} />
             <Route path="/editorhome" element={<EditorHome />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
=======
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
            <Route path="/rolehome" element={ROLE_COMPONENTS[user.role] || null} />
          </Route>
        </Routes>
      </BrowserRouter>
>>>>>>> 207b7be335a1bb130811916f4fb95bfa491e8e40
    </div>
  );
}

export default App;
