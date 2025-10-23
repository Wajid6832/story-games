
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";
import Home from "./components/Common/Landing/Reader-Home";
import ReaderHome from "./components/Common/Landing/Reader-Home";
import ReadersLanding from "./components/Common/Landing/ReadersLanding";
import CurrentNovels from "./components/Common/Landing/CurrentNovels";
import SupportFeedback from "./components/Common/Landing/SupportFeedback"; 


import React from 'react'
import Create from './component/Create'
// import PageReducer from './component/Loadingpage/PageReducer'
const App = () => {
  return (

    <div>
      {/* <PageReducer /> */}
      <Create />

    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<ReaderHome/>} />
        <Route path="/readinghome" element={<ReadersLanding/>} />
        <Route path="/CurrentNovels" element={<CurrentNovels />} />
        <Route path="/SupportFeedback" element={<SupportFeedback />} /> 
      </Routes>
      </BrowserRouter>

    </div>
    </div>
  )
}


export default App;
