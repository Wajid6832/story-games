import { Route } from "react-router-dom";
import ProtectedRoute from "../layout/Protected";
import Layout from "../layout/Layout";
import ReadersLanding from "../components/Pages/ReaderSection1/LandingReader/ReadersLanding";

 const ReaderRoutes=(
    <>
    <Route element={<ProtectedRoute allowedRoles={["reader"]} />}>
      <Route element={<Layout role="reader" />}>
        <Route path="/readerHome" element={<ReadersLanding />} />
      </Route>
    </Route>
    </>
  );
export default ReaderRoutes;
