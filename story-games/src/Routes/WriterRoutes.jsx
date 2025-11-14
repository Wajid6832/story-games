import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "../layout/Protected";
import Layout from "../layout/Layout";
import WriterHome from "../components/Pages/WriterOnlyComponents/WriterHome";
import Bookpage from "../components/Pages/WriterOnlyComponents/Bookpages/Bookpage";
import BecomeWriter from "../components/Pages/ReaderSection1/becomeWriter/becomeWriter";
import ChatApp from "../components/Pages/WriterOnlyComponents/ChatApp/ChatApp";
import WorkRoomPage from "../components/Pages/WriterOnlyComponents/WorkRoom/WorkRoomPage";
import ProfilePage from "../components/Pages/EditorOnlyComponents/EditorProfile/ProfilePage";
import SupportFeedback from "../components/Pages/ReaderSection2/SupportFeedBack/SupportFeedback";
import LinkBankAccount from "../components/Pages/ReaderSection1/LinkBankAccount/LinkBankAccount";
import FavoritesPage from "../components/Pages/WriterOnlyComponents/Favourite/AuthorCard";
import BookReader from "../components/Pages/WriterOnlyComponents/Characterpage/BookReader";

const WriterRoutes = (
  <>
    <Route element={<ProtectedRoute allowedRoles={["writer"]} />}>
      <Route element={<Layout role="writer" />}>
        <Route path="/writerHome" element={<WriterHome />} />
        <Route path="/bookpage" element={<Bookpage />} />
        <Route path="/becomeWriter" element={<BecomeWriter />} />
        <Route path="/authorCard" element={<FavoritesPage/>} />
        <Route path="/bookreader" element={<BookReader />} />
        <Route path="/chatApp" element={<ChatApp />} />
        <Route path="/workRoom" element={<WorkRoomPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/supportFeedback" element={<SupportFeedback />} />
        <Route path="/LinkBankAccount" element={<LinkBankAccount />} />
      </Route>
    </Route>
  </>
);

export default WriterRoutes;
