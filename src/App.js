// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// import CharacterPage from "./components/CharacterPage/CharacterPage";

// function App() {
//   return (
//     <div className="d-flex" style={{ minHeight: "100vh" }}>
      
//       <div className="flex-grow-1 overflow-auto">
//         <CharacterPage />
//       </div>
//     </div>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { Products } from "./features/product/Product";
import ReaderHome from "./components/Common/Landing/Reader-Home";
import ReadersLanding from "./components/Common/Landing/ReadersLanding";
import CurrentNovels from "./components/Common/Landing/CurrentNovels";
import SupportFeedback from "./components/Common/Landing/SupportFeedback"; 
import CharacterPage from "./components/CharacterPage/CharacterPage";
import ProducerSidebar from "./components/CharacterPage/ProducerSidebar/sidebar";
import CreateNovel from "./components/NovelForm/CreateNovel";
import HomePage from "./components/HomePage/HomePage";
import CreateChapter from "./components/CreateChapter/CreateChapter";




function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/" element={<ReaderHome/>} />
        <Route path="/readinghome" element={<ReadersLanding/>} />
        <Route path="/CurrentNovels" element={<CurrentNovels />} />
        <Route path="/SupportFeedback" element={<SupportFeedback />} />  */}
{/*         
      </BrowserRouter> */}
      {/* <CharacterPage/>  */}
      <CreateNovel/>
     
      {/* <CreateChapter/> */}
      {/* </Routes> */}



      {/* <Routes>
        <Route path= "/" element={<HomePage/>} />
          <Route path="/create-novel" element={<CreateNovel />} />
      </Routes> */}
    </div>
  );
}
export default App;
