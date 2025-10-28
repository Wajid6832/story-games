
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Landing  from "./components/Common/Landing/EditorLanding";

// import Create from './component/Create'
// import BookName from "../src/component/Loadingpage/Book";
// import Navbar from './component/Loadingpage/Navbar';
// import PageReducer from './component/Loadingpage/PageReducer'
// import NewChat from "./component/Loadingpage/NewChat";
// import NewChat2 from './component/Loadingpage/NewChat2'
// import Book from "../src/component/Loadingpage/Book";
    import Book2 from '../src/component/Loadingpage/Book2'
// import Book3 from './component/Loadingpage/Book3'
// import MyProfile from './component/Loadingpage/MyProfile'
const App = () => {
  return (

    


    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<ReaderHome/>} />
        <Route path="/readinghome" element={<ReadersLanding/>} />
        <Route path="/CurrentNovels" element={<CurrentNovels />} />
        <Route path="/SupportFeedback" element={<SupportFeedback />} /> 
        <Route path="/" element={<Landing/>} />
      </Routes>
      </BrowserRouter> */}
      <Book2/>
      {/* <Book3 /> */}
      {/* <MyProfile /> */}
      {/* <NewChat /> */}
      {/* <NewChat2 /> */}
       {/* <PageReducer /> */}
      {/* <Create /> */}
      {/* <Navbar /> */}

    </div> 
   )
 }

export default App;

