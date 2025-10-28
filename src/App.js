
import ChatApp from "./components/Pages/WriterOnlyComponents/ChatApp/ChatApp"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
           <Route path="/" element={<ChatApp/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
  
export default App;


