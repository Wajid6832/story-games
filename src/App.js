



import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./features/auth/Login";
// import { Products } from "./features/product/Product";
import LandingPage from "./Common/Landing/WriterLanding/WriterLandingPage";
import WorkRoomPage from "./components/Pages/WriterOnlyComponents/WorkRoom/WorkRoomPage";
import PrivacyPolicy from "./components/Pages/WriterOnlyComponents/StoryPrivacyPolicy/StoryPrivacyPolicyPage";
import TermsConditions from "./components/Pages/WriterOnlyComponents/StoryTermsCondition/StoryTermsConditionPage";
import { Products } from "./features/product/Product";


// Common / Editor Components

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
        {/* <Route path="/products" element={<Products />} /> */}
         {/* <Route path="/" element={<Login />} /> */}
        
        <Route path="/landingpage" element={<LandingPage/>} /> 
        <Route path="/privacypolicypage" element={<PrivacyPolicy/>} /> 
        <Route path="/termsconditions" element={<TermsConditions/>} /> 
                    
          
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/" element={<ReaderHome />} /> */}
          {/* <Route path="/readinghome" element={<ReadersLanding />} /> */}
          <Route path="/SupportFeedback" element={<SupportFeedback />} />
          {/* Editor / Landing Routes */}
          {/* <Route path="/" element={<Landing />} />
          <Route path="/editorlogin" element={<EditorLogin />} /> */}
          <Route path="/editorhome" element={<EditorHome />} />

          {/* Reader Routes */}
          <Route path="/readinghome" element={<ReadersLanding />} />
          <Route path="/supportfeedback" element={<SupportFeedback />} />

          <Route path="/info" element={<ReadersInfo />} />
          <Route path="/term1" element={<TermCondition1 />} />

          {/* Writer Routes */}
          <Route path="/write" element={<WriterMode />} />
           {/* <Route path="/" element={<Landing/>} />
           <Route path="/editorlogin" element={<EditorLogin/>} /> */}
           <Route path="/editorhome" element={<EditorHome/>} />
      

          <Route element={<Layout />}>
            <Route path="/" element={ROLE_COMPONENTS[user.role] || null} />
            <Route path="/authorCard" element={<AuthorCard />} />
            <Route path="/bookpage" element={<Bookpage />} />
            <Route path="/workroompage" element={ <WorkRoomPage/>} /> 
            {/* <Route path="/bookReader" element={<BookReader />} /> */}
            {/* <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} /> */}
          </Route>

      

          <Route path="/authorCard" element={<AuthorCard />} />
          <Route path="/bookpage" element={<Bookpage />} />

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


