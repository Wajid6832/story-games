
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// Writer/Editor Components
// import WriterHome from "./components/Pages/WriterHome";
import EditorLanding from "./Common/Landing/EditorLanding";
// import Home from "./components/common/home/Home";
// import Bookpage from "./components/Pages/Bookpages/Bookpage";
// Reader Components
// import ReaderHome from "./components/Common/Landing/Reader-Home";
// import ReadersLanding from "./components/Common/Landing/ReadersLanding";
// import CurrentNovels from "./components/Common/Landing/CurrentNovels";
// import SupportFeedback from "./components/Common/Landing/SupportFeedback";

import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Login } from "./features/auth/Login";
// import { Products } from "./features/product/Product";
// import CurrentNovels from "./components/Common/CurrentNovels/CurrentNovels";
// import TokenStore from "./components/TokenStore/TokenStore";
// import BecomeWriter from "./components/Common/becomeWriter/becomeWriter";
import ReaderHome from "./Common/Landing/Reader-Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/WriterHome" element={<WriterHome />} />
        <Route path="/Bookpage" element={<Bookpage />} /> */}

          {/* Writer & Editor Routes */}
          {/* <Route path="/writer" element={<WriterHome />} /> */}
          { <Route path="/" element={<EditorLanding />} /> }
          {/* <Route path="/home" element={<Home />} /> */}

          {/* Reader Routes */}
          {/* <Route path="/" element={<ReaderHome />} />
          
          <Route path="/currentnovels" element={<CurrentNovels />} />
          <Route path="/supportfeedback" element={<SupportFeedback />} />
        
        // {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<ReaderHome />} />
          <Route path="/readinghome" element={<ReaderHome/>} />
          {/* <Route path="/CurrentNovels" element={<CurrentNovels />} /> */}
          {/* <Route path="/becomewriter" element={<BecomeWriter />} />
          <Route path="/tokenstore" element={<TokenStore />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
  
export default App;



