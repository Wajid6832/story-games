import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";
import WriterHome from "./components/Pages/WriterOnlyComponents/WriterHome";
import AuthorCard from "./components/Pages/WriterOnlyComponents/Favourite/AuthorCard"
import Bookpage from "./components/Pages/WriterOnlyComponents/Bookpages/Bookpage";
import Layout from "./layout/Layout";
// import BookReader from "./components/Pages/writersection/Characterpage/BookReader";
// import EditorLanding from "./components/common/landing/EditorLanding";
// import Home from "./components/Common/Landing/Reader-Home";
// import ReaderHome from "./components/Common/Landing/Reader-Home";
// import ReadersLanding from "./components/Common/Landing/ReadersLanding";
// import CurrentNovels from "./components/Common/CurrentNovels/CurrentNovels";
// import SupportFeedback from "./components/Common/Landing/SupportFeedback";
// import BecomeWriter from "./components/Common/becomeWriter/becomeWriter";



function App() {

  const user = {
    role: 'writer',
  }

  const ROLE_COMPONENTS = {
    writer: <WriterHome/>,
    reader: <Bookpage/>,
    author: <></>,
    producer: <></>,
};
  return (
    <div>
      <BrowserRouter>

        <Routes>
          {/* Writer & Editor Routes */}
          {/* <Route path="/writer" element={<WriterHome />} />
          <Route path="/editor" element={<EditorLanding />} />
          <Route path="/home" element={<Home />} /> */}
          {/* Reader Routes */}
           {/* <Route path="/" element={<ReaderHome />} /> */}
          {/* <Route path="/readinghome" element={<ReadersLanding />} />
          <Route path="/currentnovels" element={<CurrentNovels />} />
          <Route path="/supportfeedback" element={<SupportFeedback />} />
          <Route path="/becomewriter" element={<BecomeWriter />} />
          <Route path="/tokenstore" element={<TokenStore />} /> */} 
          {/* Optional / commented routes */}
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/" element={<Login />} /> */}
          <Route element={<Layout />}>
            <Route path="/" element={ROLE_COMPONENTS[user.role] || null} />
            <Route path="/authorCard" element={<AuthorCard/>}/> 
            <Route path="/bookpage" element={<Bookpage />} />
            {/* <Route path="/bookReader" element={<BookReader />} /> */}
             {/* <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} /> */}
          </Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
