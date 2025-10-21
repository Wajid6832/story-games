import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";
<<<<<<< HEAD
import ReadersLanding from "./components/Common/Readers-Landing/ReadersLanding";
import ReaderHome from "./components/Common/Readers-Landing/Reader-Home";
=======
import Home from "./components/Common/Landing/Reader-Home";
import ReaderHome from "./components/Common/Landing/Reader-Home";
import ReadersLanding from "./components/Common/Landing/ReadersLanding";
import CurrentNovels from "./components/Common/CurrentNovels/CurrentNovels";
import SupportFeedback from "./components/Common/Landing/SupportFeedback"; 
import TokenStore from "./components/TokenStore/TokenStore";
import BecomeWriter from "./components/Common/becomeWriter/becomeWriter";
>>>>>>> 564c62ef53cf9ead75a4ba1f7b9cfb705e58c5aa

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/" element={<Login />} /> */}
<<<<<<< HEAD
        <Route path="/" element={<ReaderHome />} />
        <Route path="/readinghome" element={<ReadersLanding />} />
=======
        <Route path="/" element={<ReaderHome/>} />
        <Route path="/readinghome" element={<ReadersLanding/>} />
        <Route path="/CurrentNovels" element={<CurrentNovels />} />
        <Route path="/becomewriter" element={<BecomeWriter />} />
        <Route path="/SupportFeedback" element={<SupportFeedback />} /> 
        <Route path="/tokenstore" element={<TokenStore />} />
>>>>>>> 564c62ef53cf9ead75a4ba1f7b9cfb705e58c5aa
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;