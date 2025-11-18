import { Route } from "react-router-dom";
import ProtectedRoute from "../layout/Protected";
import Layout from "../layout/Layout";
import ReadersLanding from "../components/Pages/ReaderSection1/LandingReader/ReadersLanding";
import Support from "../components/Pages/ReaderSection2/SupportFeedBack/SupportFeedback";
import TokenStore from "../components/TokenStore/TokenStore";
import CurrentNovels from "../components/Pages/ReaderSection1/CurrentNovels/CurrentNovels";
import LinkBankAccount from "../components/Pages/ReaderSection1/LinkBankAccount/LinkBankAccount";
import MemberProfile from "../components/Pages/ReaderSection3/MemberProfile/MemberProfile";
import RejectedNovelCard from "../components/Pages/ReaderSection3/ReaderModal/Chapter";
import ReadersModalFlow from "../components/Pages/ReaderSection3/ReaderModal/ReaderModalFlow";
import TokenModal from "../components/Pages/ReaderSection3/ReaderModal/TokenModal";
import FeaturedArtist from "../components/Pages/ReaderSection3/ReaderModal/FeaturedArtistsNovel";
import UploadedNovel from "../components/Pages/ReaderSection3/ReaderModal/UploadedNovel";
import Character from "../components/Pages/ReaderSection3/ReaderModal/Character";
import ProfilePage from "../components/Pages/EditorOnlyComponents/EditorProfile/ProfilePage";
import BecomeWriter from "../components/Pages/ReaderSection1/becomeWriter/becomeWriter";

const ReaderRoutes = (
  <>
    <Route element={<ProtectedRoute allowedRoles={["reader"]} />}>
      <Route element={<Layout role="reader" />}>
        <Route path="/readersLanding" element={<ReadersLanding />} />
         <Route path="/becomeWriter" element={<BecomeWriter />} />
        <Route path="/supportFeedback" element={<Support />} />
        <Route path="/tokenStore" element={<TokenStore />} />
        <Route path="/currentNovels" element={<CurrentNovels />} />
        <Route path="/LinkBankAccount" element={<LinkBankAccount />} />
        <Route path="/uploadedNovel" element={<UploadedNovel />} />
        <Route path="/memberprofile" element={<MemberProfile />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route
          path="/featuredArtistsNovel"
          element={<FeaturedArtist />}
        />
        <Route path="/character" element={<Character />} />
        <Route path="/chapter" element={<RejectedNovelCard />} />
        <Route path="/readerModalFlow" element={<ReadersModalFlow />} />
        <Route path="/tokenModal" element={<TokenModal />} />
      </Route>
    </Route>
  </>
);
export default ReaderRoutes;
