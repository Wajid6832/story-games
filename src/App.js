
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Products } from "./features/product/Product";
import { Login } from "./features/auth/Login";
import Book2 from "./components/Pages/ProducerOnlyComponents/Book2/Book2";
import Book3 from "./components/Pages/ProducerOnlyComponents/Book3/Book3";
import Book from "./components/Pages/ProducerOnlyComponents/Book/Book";
import NewChat from "./components/Pages/ProducerOnlyComponents/New Chat/NewChat";
import NewChat2 from "./components/Pages/ProducerOnlyComponents/New Chat2/NewChat2";
import PageReducer from "./components/Pages/ProducerOnlyComponents/Page Reducer/PageReducer";
import Create from "./components/Pages/ProducerOnlyComponents/Create/Create";





const App = () => {
  return (




    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/book" element={<Book />} />
          <Route path="/book2" element={<Book2 />} />
          <Route path="/book3" element={<Book3 />} />
          <Route path="/newchat" element={<NewChat />} />
          <Route path="/newchat2" element={<NewChat2 />} />
          <Route path="/pagereducer" element={<PageReducer />} />
          <Route path="/create" element={<Create />} />
         
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App;

