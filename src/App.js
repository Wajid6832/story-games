import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";
import WorkRoomPage from "./components/WorkRoom/WorkRoomPage";
import LandingPage from "./components/Landing/LandingPage";
import BookNamePage from "./components/BookName/BookNamePage";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Login />} />
      </Routes>
      </BrowserRouter> */}
      {/* <WorkRoomPage/> */}
      {/* <LandingPage/> */}
      <BookNamePage/>
    </div>
  );
}

export default App;
