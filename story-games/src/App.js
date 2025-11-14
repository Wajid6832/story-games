import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditorLogin from "./components/Common/Signin/EditorLogin";
import ForgotPass from "./components/Common/Signin/ForgotPassword/ForgotPassword";
import WriterSignUp from "./Common/WriterSignUp/WriterSignUp";
import PrivacyPolicy from "./components/Pages/WriterOnlyComponents/StoryPrivacyPolicy/StoryPrivacyPolicyPage";
import TermsConditions from "./components/Pages/WriterOnlyComponents/StoryTermsCondition/StoryTermsConditionPage";
import LandingPage from "./Common/Landing/WriterLanding/WriterLandingPage";

import WriterRoutes from "./Routes/WriterRoutes";
import EditorRoutes from "./Routes/EditorRoutes";
import ReaderRoutes from "./Routes/ReaderRoutes";
import ProducerRoutes from "./Routes/ProducerRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/editorLogin" element={<EditorLogin />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/signup" element={<WriterSignUp />} />
        <Route path="/privacypolicypage" element={<PrivacyPolicy />} />
        <Route path="/termsconditionspage" element={<TermsConditions />} />
        <Route path="/landingpage" element={<LandingPage />} />

        <>
          {WriterRoutes}
          {EditorRoutes}
          {ReaderRoutes}
          {ProducerRoutes}
        </>

        <Route path="*" element={<EditorLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
