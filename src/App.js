
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Products } from "./features/product/Product";
// import { Login } from "./features/auth/Login";
// import "./App.css";

// import WriterHome from "./components/Pages/WriterOnlyComponents/WriterHome";
// import AuthorCard from "./components/Pages/WriterOnlyComponents/Favourite/AuthorCard"
// import Bookpage from "./components/Pages/WriterOnlyComponents/Bookpages/Bookpage";
// import Layout from "./layout/Layout";
// import BookReader from "./components/Pages/writersection/Characterpage/BookReader";
// import EditorLanding from "./components/common/landing/EditorLanding";
// import Home from "./components/Common/Landing/Reader-Home";
// import ReaderHome from "./components/Common/Landing/Reader-Home";
// Writer/Editor Components
// import WriterHome from "./components/Pages/WriterHome";
// import EditorLanding from "./components/common/landing/EditorLanding";
// import Home from "./components/common/home/Home";
// import Bookpage from "./components/Pages/Bookpages/Bookpage";
// import React from "react";
// import { Login } from "./features/auth/Login";
// import { Products } from "./features/product/Product";
// import Home from "./components/Common/Landing/Reader-Home";
// import ReaderHome from "./Common/Landing/Reader-Home";
// import ReadersLanding from "./components/Pages/ReaderSection1/LandingReader/ReadersLanding";
// import CurrentNovels from "./components/Pages/ReaderSection1/CurrentNovels/CurrentNovels"
// import TokenStore from "./components/Pages/ReaderSection1/TokenStore/TokenStore";
// import BecomeWriter from "./components/Pages/ReaderSection1/becomeWriter/becomeWriter";
// import ForgotPassword from "./components/Pages/ReaderSection1/ReaderForgotPassword/ForgotPassword";
// import LinkBankAccount from "./components/Pages/ReaderSection1/LinkBankAccount/LinkBankAccount";


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Landing  from "./Common/Landing/EditorLanding";
import EditorLogin from "./components/Common/Signin/EditorLogin";
import EditorHome from "./components/Pages/EditorOnlyComponents/EditorHome";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";
import WriterHome from "./components/Pages/WriterHome";
import AuthorCard from "./components/Pages/WriterOnlyComponents/Favourite/AuthorCard"
import Bookpage from "./components/Pages/WriterOnlyComponents/Bookpages/Bookpage";

//Producer Components
import Book2 from "./components/Pages/ProducerOnlyComponents/Book2/Book2";
import Book3 from "./components/Pages/ProducerOnlyComponents/Book3/Book3";
import Book from "./components/Pages/ProducerOnlyComponents/Book/Book";
import NewChat from "./components/Pages/ProducerOnlyComponents/New Chat/NewChat";
import NewChat2 from "./components/Pages/ProducerOnlyComponents/New Chat2/NewChat2";
import PageReducer from "./components/Pages/ProducerOnlyComponents/Page Reducer/PageReducer";
import Create from "./components/Pages/ProducerOnlyComponents/Create/Create";

// Layout
import Layout from "./layout/Layout";


function App() {

  const user = {
    role: 'editor',
  }

  const ROLE_COMPONENTS = {
    writer: <WriterHome/>,
    reader: <Bookpage/>,
    producer: <></>,
};
  return (
          
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Editor / Landing Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/editorlogin" element={<EditorLogin />} />
          <Route path="/editorhome" element={<EditorHome />} />

        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/editorlogin" element={<EditorLogin />} />
      <Route path="/EditorHome" element={<EditorHome/>} />

        {/* Protected / Role-based Layout */}
        <Route element={<Layout />}>
          <Route path="/writer" element={ROLE_COMPONENTS[user.role] || null} />
          <Route path="/authorCard" element={<AuthorCard />} />
          <Route path="/bookpage" element={<Bookpage />} />

          {/* Producer Routes */}
          <Route path="/products" element={<Products />} />
           <Route path="/login" element={<Login />} />
           <Route path="/book" element={<Book />} />
           <Route path="/book2" element={<Book2 />} />
           <Route path="/book3" element={<Book3 />} />
           <Route path="/newchat" element={<NewChat />} />
           <Route path="/newchat2" element={<NewChat2 />} />
           <Route path="/pagereducer" element={<PageReducer />} />
           <Route path="/create" element={<Create />} />

          {/* Role-based Layout */}
            <Route path="/rolehome" element={ROLE_COMPONENTS[user.role] || null} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

