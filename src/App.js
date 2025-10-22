import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";
import EditorLanding from "./components/common/landing/EditorLanding";
import Home from "./components/common/home/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/products" element={<Products />} />
        <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<EditorLanding/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
