
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Login } from "./features/auth/Login";
// import { Products } from "./features/product/Product";

// Writer/Editor Components
import WriterHome from "./components/Pages/WriterHome";
// import EditorLanding from "./components/common/landing/EditorLanding";
// import Home from "./components/common/home/Home";
import Bookpage from "./components/Pages/Bookpages/Bookpage";
// Reader Components
// import ReaderHome from "./components/Common/Landing/Reader-Home";
// import ReadersLanding from "./components/Common/Landing/ReadersLanding";
// import CurrentNovels from "./components/Common/Landing/CurrentNovels";
// import SupportFeedback from "./components/Common/Landing/SupportFeedback";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Login />} />
        <Route path="/WriterHome" element={<WriterHome />} />
        <Route path="/Bookpage" element={<Bookpage />} />
     
          {/* Writer & Editor Routes */} 
         <Route path="/writer" element={<WriterHome />} />
          <Route path="/editor" element={<EditorLanding />} />
          <Route path="/home" element={<Home />} />

          {/* Reader Routes */}
          <Route path="/" element={<ReaderHome />} />
          <Route path="/readinghome" element={<ReadersLanding />} />
          <Route path="/currentnovels" element={<CurrentNovels />} />
          <Route path="/supportfeedback" element={<SupportFeedback />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
