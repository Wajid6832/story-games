
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";
import Home from "./components/Common/Landing/Reader-Home";
import ReaderHome from "./components/Common/Landing/Reader-Home";
import ReadersLanding from "./components/Common/Landing/ReadersLanding";
import CurrentNovels from "./components/Common/Landing/CurrentNovels";
import SupportFeedback from "./components/Common/Landing/SupportFeedback"; 

import Create from './component/Create'
import BookName from "../src/component/Loadingpage/Book";
// import Navbar from './component/Loadingpage/Navbar';
// import PageReducer from './component/Loadingpage/PageReducer'
// import NewChat from "./component/Loadingpage/NewChat";
import NewChat2 from './component/Loadingpage/NewChat2'
// import Book from "../src/component/Loadingpage/Book";

// import Book3 from './component/Loadingpage/Book3'
// import MyProfile from './component/Loadingpage/MyProfile'
const App = () => {
  return (

    <div>
      {/* <PageReducer /> */}
      {/* <Create /> */}
      {/* <Navbar /> */}

    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<ReaderHome/>} />
        <Route path="/readinghome" element={<ReadersLanding/>} />
        <Route path="/CurrentNovels" element={<CurrentNovels />} />
        <Route path="/SupportFeedback" element={<SupportFeedback />} /> 
      </Routes>
      </BrowserRouter> */}
      {/* <Book/> */}
      {/* <Book3 /> */}
      {/* <MyProfile /> */}
      {/* <NewChat /> */}
      <NewChat2 />

    </div> 
     </div>
   )
 }


export default App;


