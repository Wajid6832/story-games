import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
// import { Products } from "./features/product/Product";
import CharacterPage from "./components/CharacterPage/CharacterPage";
import CreateNovel from "./components/NovelForm/CreateNovel";
import HomePage from "./components/HomePage/HomePage";
import CreateChapter from "./components/CreateChapter/CreateChapter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CreateNovel/>} />  
        <Route path="/" element={<HomePage />} />
        <Route path="/create-novel" element={<CreateNovel />} />
        <Route path="/character" element={<CharacterPage />} />
        <Route path="/create-chapter" element={<CreateChapter />} />
      </Routes>
    </div>
  );
}

export default App;
