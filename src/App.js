import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";

// ✅ Updated correct imports based on new structure
import ReaderHome from "./components/Common/Readers-Landing/Reader-Home";
import ReadersLanding from "./components/Common/Readers-Landing/ReadersLanding";
import CurrentNovels from "./components/CurrentNovels/CurrentNovels";
import SupportFeedback from "./components/SupportFeedBack/SupportFeedback";
import TokenStore from "./components/TokenStore/TokenStore";
import BecomeWriter from "./components/Common/becomeWriter/becomeWriter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/" element={<ReaderHome />} />
          <Route path="/readinghome" element={<ReadersLanding />} />
          <Route path="/currentnovels" element={<CurrentNovels />} />
          <Route path="/becomewriter" element={<BecomeWriter />} />
          <Route path="/supportfeedback" element={<SupportFeedback />} />
          <Route path="/tokenstore" element={<TokenStore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
