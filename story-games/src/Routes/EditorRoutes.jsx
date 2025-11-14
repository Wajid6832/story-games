import { Route } from "react-router-dom";
import ProtectedRoute from "../layout/Protected";
import Layout from "../layout/Layout";
import EditorHome from "../components/Pages/WriterOnlyComponents/WriterHome";

  const EditorRoutes=(
    <>
    <Route element={<ProtectedRoute allowedRoles={["editor"]} />}>
      <Route element={<Layout role="editor" />}>
        <Route path="/editorHome" element={<EditorHome />} />
      </Route>
    </Route>
    </>
  );
export default EditorRoutes;
