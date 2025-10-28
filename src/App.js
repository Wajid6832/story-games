
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Landing  from "./components/Common/Landing/EditorLanding";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
           <Route path="/" element={<Landing/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
