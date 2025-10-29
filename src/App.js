
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Landing  from "./components/Common/Landing/EditorLanding";
import EditorLogin from "./components/Common/Signin/EditorLogin";
import EditorHome from "./components/Pages/EditorOnlyComponents/EditorHome";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
           <Route path="/" element={<Landing/>} />
           <Route path="/editorlogin" element={<EditorLogin/>} />
           <Route path="/editorhome" element={<EditorHome/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
