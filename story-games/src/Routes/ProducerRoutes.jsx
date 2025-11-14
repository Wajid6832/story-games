import { Route } from "react-router-dom";
import ProtectedRoute from "../layout/Protected";
import Layout from "../layout/Layout";
import HomePage from "../components/Pages/ProducerOnlyComponents/HomePage/HomePage";
import CreateNovel from "../components/Pages/ProducerOnlyComponents/NovelForm/CreateNovel";
import CharacterPage from "../components/Pages/ProducerOnlyComponents/CharacterPage/CharacterPage";
import CreateChapter from "../components/Pages/ProducerOnlyComponents/CreateChapter/CreateChapter";

const ProducerRoutes=(
    <>
    <Route element={<ProtectedRoute allowedRoles={["producer"]} />}>
      <Route element={<Layout role="producer" />}>
        <Route path="/producerHome" element={<HomePage />} />
        <Route path="/createnovel" element={<CreateNovel />} />
        <Route path="/characterpage" element={<CharacterPage />} />
        <Route path="/createChapter" element={<CreateChapter />} />
        <Route path="/createnovel" element={<CreateNovel />} />

      </Route>
    </Route>
    </>
  );
export default ProducerRoutes;
