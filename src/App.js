import "bootstrap/dist/css/bootstrap.min.css";
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
import WorkRoom from "./components/Pages/WriterOnlyComponents/WorkRoom/WorkRoomPage"
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
            <Route path="/workRoom" element={<WorkRoom/>}/>
          </Route>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["editor"]} />}>
          <Route element={<Layout role="editor" />}>
            <Route path="/editorHome" element={<Bookpage />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["reader"]} />}>
          <Route element={<Layout role="reader" />}>
            <Route path="/readerHome" element={<ReadersLanding />} />
            <Route path="/chatApp" element={<ChatApp />} />
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
