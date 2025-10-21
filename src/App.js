import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";
import LandingPage from "./components/common/Landing/LandingPage";
import WriterHome from "./components/Pages/WriterHome";
import WriterSidebar from "./components/Sidebar/WriterSidebar"

function App() {
  return (
    <>
     <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Login />} />
      </Routes>
      </BrowserRouter> */}
      
      <LandingPage/>
        <WriterHome />
      
    </div>
    </>
   
  );
}

export default App;
