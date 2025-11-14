import { Route } from "react-router-dom";
import ProtectedRoute from "../layout/Protected";
import Layout from "../layout/Layout";
import HomePage from "../components/Pages/ProducerOnlyComponents/HomePage/HomePage";

const ProducerRoutes=(
    <>
    <Route element={<ProtectedRoute allowedRoles={["producer"]} />}>
      <Route element={<Layout role="producer" />}>
        <Route path="/producerHome" element={<HomePage />} />
      </Route>
    </Route>
    </>
  );
export default ProducerRoutes;
