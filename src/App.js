import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";
import WriterSidebar from "./components/Sidebar/WriterSidebar"
import Landingpage from "./components/common/Landing/LandingPage"
import WriterHome  from "./components/Pages/WriterHome";
function App() {
  return (
    <>
     <div >
      <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<WriterHome />} />
      </Routes>
      </BrowserRouter>
     {/* <BrowserRouter>
          <Routes>
            <Route path="/WriterHome" element={<WriterHome/>}/>
          </Routes>
      </BrowserRouter> */}
      {/* <WriterSidebar/> */}
      {/* <Landingpage/> */}
      
    </div>
    </>
   
  );
}

export default App;
