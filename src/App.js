import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

// ✅ Import components
import Sidebar from "./components/Sidebar/Sidebar";
import NavbarTop from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-grow-1">
        <NavbarTop />
        <Home />
      </div>
    </div>
  );
}

export default App;

