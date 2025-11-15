import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditorLogin from "./components/Common/Signin/EditorLogin";
import ForgotPass from "./components/Common/Signin/ForgotPassword/ForgotPassword";
import WriterSignUp from "./Common/WriterSignUp/WriterSignUp";

import PrivacyPolicy from "./components/Pages/WriterOnlyComponents/StoryPrivacyPolicy/StoryPrivacyPolicyPage";
import TermsConditions from "./components/Pages/WriterOnlyComponents/StoryTermsCondition/StoryTermsConditionPage";
import LandingPage from "./Common/Landing/WriterLanding/WriterLandingPage";

// Role-Based Routes
import WriterRoutes from "./Routes/WriterRoutes";
import EditorRoutes from "./Routes/EditorRoutes";
import ReaderRoutes from "./Routes/ReaderRoutes";
import ProducerRoutes from "./Routes/ProducerRoutes";

// Common pages for ALL roles
import SupportFeedback from "./components/Pages/ReaderSection2/SupportFeedBack/SupportFeedback";
import ProfilePage from "./components/Pages/EditorOnlyComponents/EditorProfile/ProfilePage";
import ChatApp from "./components/Pages/WriterOnlyComponents/ChatApp/ChatApp";
import ProtectedRoute from "./layout/Protected";
import Layout from "./layout/Layout";
import FavoritesPage from "./components/Pages/WriterOnlyComponents/Favourite/AuthorCard";
import CurrentNovels from "./components/Pages/ReaderSection1/CurrentNovels/CurrentNovels";
import BecomeWriter from "./components/Pages/ReaderSection1/becomeWriter/becomeWriter";
import BookReader from "./components/Pages/WriterOnlyComponents/Characterpage/BookReader";
import LinkBankAccount from "./components/Pages/ReaderSection1/LinkBankAccount/LinkBankAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Unprotected Routes */}
        <Route path="/editorLogin" element={<EditorLogin />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/signup" element={<WriterSignUp />} />
        <Route path="/privacypolicypage" element={<PrivacyPolicy />} />
        <Route path="/termsconditionspage" element={<TermsConditions />} />
        <Route path="/landingpage" element={<LandingPage />} />
       

        {/* Shared pages (accessible for all roles) */}
        <Route
          element={
            <ProtectedRoute
              allowedRoles={["writer", "editor", "reader", "producer"]}
            />
          }
        >
          <Route element={<Layout />}>
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="/supportFeedback" element={<SupportFeedback />} />
            <Route path="/chatApp" element={<ChatApp />} />
            <Route path="/authorCard" element={<FavoritesPage/>} />
            <Route path="/currentNovels" element={<CurrentNovels />} />
            <Route path="/becomeWriter" element={<BecomeWriter />} />
            <Route path="/bookreader" element={<BookReader />} />
            <Route path="/LinkBankAccount" element={<LinkBankAccount />} />
          </Route>
        </Route>
      
        {/* Role-Based */}
        {WriterRoutes}
        {EditorRoutes}
        {ReaderRoutes}
        {ProducerRoutes}

        {/* Redirect unknown routes */}
        <Route path="*" element={<EditorLogin />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
