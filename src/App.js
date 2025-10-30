

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Landing  from "./Common/Landing/EditorLanding";
import EditorLogin from "./components/Common/Signin/EditorLogin";
import EditorHome from "./components/Pages/EditorOnlyComponents/EditorHome";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";
import WriterHome from "./components/Pages/WriterHome";
import AuthorCard from "./components/Pages/WriterOnlyComponents/Favourite/AuthorCard"
import Bookpage from "./components/Pages/WriterOnlyComponents/Bookpages/Bookpage";
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
    <div>
       <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/editorlogin" element={<EditorLogin />} />
      <Route path="/EditorHome" element={<EditorHome/>} />

        {/* Protected / Role-based Layout */}
        <Route element={<Layout />}>
          <Route path="/writer" element={ROLE_COMPONENTS[user.role] || null} />
          <Route path="/authorCard" element={<AuthorCard />} />
          <Route path="/bookpage" element={<Bookpage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
