import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";
import EditorLanding from "./components/common/landing/EditorLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/products" element={<Products />} />
        <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<EditorLanding/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
