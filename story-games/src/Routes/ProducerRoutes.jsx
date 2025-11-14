import { Route } from "react-router-dom";
import ProtectedRoute from "../layout/Protected";
import Layout from "../layout/Layout";
import HomePage from "../components/Pages/ProducerOnlyComponents/HomePage/HomePage";
import CreateNovel from "../components/Pages/ProducerOnlyComponents/NovelForm/CreateNovel";
import CreateChapter from "../components/Pages/ProducerOnlyComponents/CreateChapter/CreateChapter";
import Application from "../components/Pages/ProducerOnlyComponents/Application/Application";
import ApplicationPage1 from "../components/Pages/ProducerOnlyComponents/ApplicationPage1/ApplicationPage1";
import ApplicationPage2 from "../components/Pages/ProducerOnlyComponents/ApplicationPage2/ApplicationPage2";
import PageReducer from "../components/Pages/ProducerOnlyComponents/Page Reducer/PageReducer";
import Create from "../components/Pages/ProducerOnlyComponents/Create/Create";
import ProfilePage from "../components/Pages/EditorOnlyComponents/EditorProfile/ProfilePage";
import ChatApp from "../components/Pages/WriterOnlyComponents/ChatApp/ChatApp";
import Bookpage from "../components/Pages/WriterOnlyComponents/Bookpages/Bookpage";

const ProducerRoutes=(
    <>
    <Route element={<ProtectedRoute allowedRoles={["producer"]} />}>
      <Route element={<Layout role="producer" />}>
        <Route path="/producerHome" element={<HomePage />} />
        <Route path="/createnovel" element={<CreateNovel />} />
        <Route path="/bookpage" element={<Bookpage />} />
        <Route path="/createChapter" element={<CreateChapter />} />
        <Route path="/applicationpage1" element={<ApplicationPage1 />} />
        <Route path="/applicationpage2" element={<ApplicationPage2 />} />
        <Route path="/create" element={<Create />} />
        <Route path="/pagereducer" element={<PageReducer />} />
        <Route path="/application" element={<Application />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/chatApp" element={<ChatApp />} />

    


      </Route>
    </Route>
    </>
  );
export default ProducerRoutes;
