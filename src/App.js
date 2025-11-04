import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ReaderHome from "./Common/Landing/Reader-Home";
import CurrentNovels from "./components/Pages/ReaderSection1/CurrentNovels/CurrentNovels"
import TokenStore from "./components/Pages/ReaderSection1/TokenStore/TokenStore";
import BecomeWriter from "./components/Pages/ReaderSection1/becomeWriter/becomeWriter";
import ForgotPassword from "./components/Pages/ReaderSection1/ReaderForgotPassword/ForgotPassword";
import LinkBankAccount from "./components/Pages/ReaderSection1/LinkBankAccount/LinkBankAccount";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import WriterHome from "./components/Pages/WriterOnlyComponents/WriterHome";
import Bookpage from "./components/Pages/WriterOnlyComponents/Bookpages/Bookpage";
import AuthorCard from "./components/Pages/WriterOnlyComponents/Favourite/AuthorCard";
import ChatApp from "./components/Pages/WriterOnlyComponents/ChatApp/ChatApp";
import EditorLanding from "./Common/Landing/EditorLanding";
import EditorLogin from "./components/Common/Signin/EditorLogin";
import ReadersLanding from "./components/Pages/ReaderSection1/LandingReader/ReadersLanding";
import ProtectedRoute from "./layout/Protected";
import ProfilePage  from "./components/Pages/EditorOnlyComponents/Editor Profile/ProfilePage";
import SupportFeedback from "./components/Pages/ReaderSection2/SupportFeedBack/SupportFeedback"
import PrivacyPolicy from "./components/Pages/WriterOnlyComponents/StoryPrivacyPolicy/StoryPrivacyPolicyPage";
import TermsConditions from "./components/Pages/WriterOnlyComponents/StoryTermsCondition/StoryTermsConditionPage";
import WriterSignUp from "./Common/WriterSignUp/WriterSignUp";
import WorkRoomPage from "./components/Pages/WriterOnlyComponents/WorkRoom/WorkRoomPage";
import LandingPage from "./Common/Landing/WriterLanding/WriterLandingPage";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EditorLanding />} />
        <Route path="/editorLogin" element={<EditorLogin />} />

        <Route element={<ProtectedRoute allowedRoles={["writer"]} />}>
          <Route element={<Layout role="writer" />}>
            <Route path="/writerHome" element={<WriterHome />} />
            <Route path="/bookpage" element={<Bookpage />} />
            <Route path="/authorCard" element={<AuthorCard />} />
            <Route path="/chatApp" element={<ChatApp />} />
         
           
              
            <Route path="/profilePage" element={<ProfilePage/>}/>
            <Route path="/supportFeedback" element={<SupportFeedback/>}/>
          </Route>
        </Route>
      <Route path="/workroompage" element={<WorkRoomPage/>}/>
      <Route path="/signup" element={<WriterSignUp/>}/>
      <Route path="/privacypolicypage" element={<PrivacyPolicy/>}/>
      <Route path="/termsconditionspage" element={<TermsConditions/>}/>
      <Route path="/landingpage" element={<LandingPage/>}/>

        <Route element={<ProtectedRoute allowedRoles={["editor"]} />}>
          <Route element={<Layout role="editor" />}>
            <Route path="/editorHome" element={<Bookpage />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["reader"]} />}>
          <Route element={<Layout role="reader" />}>
            <Route path="/reader" element={<ReadersLanding />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["producer"]} />}>
          <Route element={<Layout role="producer" />}>
            <Route
              path="/producerHome"
              element={<h2>Welcome Producer!</h2>}
            />
          </Route>
        </Route>
         

      </Routes>
    </BrowserRouter>
  );
}


export default App;

