import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";
import WriterHome  from "./components/Pages/WriterHome";
import EditorLanding from "./components/common/landing/EditorLanding";
import Home from "./components/common/home/Home";


function App() {
  return (
    <>
     <div >
      <BrowserRouter>
      <Routes>
        {/* <Route path="/products" element={<Products />} />
        <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<WriterHome />} />
        <Route path="/" element={<EditorLanding/>} />
        <Route path="/home" element={<Home/>} />
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
