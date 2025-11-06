import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import ReaderHome from "./Common/Landing/Reader-Home";
import CurrentNovels from "./components/Pages/ReaderSection1/CurrentNovels/CurrentNovels"
import TokenStore from "./components/Pages/ReaderSection1/TokenStore/TokenStore";
import BecomeWriter from "./components/Pages/ReaderSection1/becomeWriter/becomeWriter";
import ForgotPassword from "./components/Pages/ReaderSection1/ReaderForgotPassword/ForgotPassword";
import LinkBankAccount from "./components/Pages/ReaderSection1/LinkBankAccount/LinkBankAccount";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import WriterHome from "./components/Pages/WriterOnlyComponents/WriterHome";
import Bookpage from "./components/Pages/WriterOnlyComponents/Bookpages/Bookpage";
import AuthorCard from "./components/Pages/WriterOnlyComponents/Favourite/AuthorCard";
import ChatApp from "./components/Pages/WriterOnlyComponents/ChatApp/ChatApp";
import EditorLanding from "./Common/Landing/EditorLanding";
import EditorLogin from "./components/Common/Signin/EditorLogin";
import ReadersLanding from "./components/Pages/ReaderSection1/LandingReader/ReadersLanding";
import ProtectedRoute from "./layout/Protected";
import WorkRoom from "./components/Pages/WriterOnlyComponents/WorkRoom/WorkRoomPage"
import ProfilePage  from "./components/Pages/EditorOnlyComponents/Editor Profile/ProfilePage";
import SupportFeedback from "./components/Pages/ReaderSection2/SupportFeedBack/SupportFeedback"
 
// producer component
import HomePage from "./components/Pages/ProducerOnlyComponents/HomePage/HomePage"
import Book from "./components/Pages/ProducerOnlyComponents/Book/Book";
import Book2 from "./components/Pages/ProducerOnlyComponents/Book2/Book2";
import Book3 from "./components/Pages/ProducerOnlyComponents/Book3/Book3";
import Create from "./components/Pages/ProducerOnlyComponents/Create/Create";
import NewChat from "./components/Pages/ProducerOnlyComponents/New Chat/NewChat";
import NewChat2 from "./components/Pages/ProducerOnlyComponents/New Chat2/NewChat2";
import PageReducer from "./components/Pages/ProducerOnlyComponents/Page Reducer/PageReducer"
import CreateNovel from "./components/Pages/ProducerOnlyComponents/NovelForm/CreateNovel";
import FavoritesPage from "./components/Pages/WriterOnlyComponents/Favourite/AuthorCard";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EditorLanding />} />
        <Route path="/editorLogin" element={<EditorLogin />} />
       
       {/* Write Routes */}
        <Route element={<ProtectedRoute allowedRoles={["writer"]} />}>
          <Route element={<Layout role="writer" />}>
            <Route path="/writerHome" element={<WriterHome />} />
            <Route path="/bookpage" element={<Bookpage />} />
            <Route path="/authorCard" element={<AuthorCard />} />
            <Route path="/chatApp" element={<ChatApp />} />
            <Route path="/workRoom" element={<WorkRoom/>}/>
            {/* <Route path="/profilePage" element={<ProfilePage/>}/> */}
            {/* <Route path="/supportFeedback" element={<SupportFeedback/>}/> */}
          </Route>
        </Route>

        {/* Editor Routes */}
        <Route element={<ProtectedRoute allowedRoles={["editor"]} />}>
          <Route element={<Layout role="editor" />}>
            <Route path="/editorHome" element={<Bookpage />} />
          </Route>
        </Route>
        
        {/* Reader Routes */}
        <Route element={<ProtectedRoute allowedRoles={["reader"]} />}>
          <Route element={<Layout role="reader" />}>
            <Route path="/reader" element={<ReadersLanding />} />
          </Route>
        </Route>

       {/* Producer Routes */}
        <Route element={<ProtectedRoute allowedRoles={["producer"]} />}>
          <Route element={<Layout role="producer" />}>
            <Route
              path="/producerHome" element={<HomePage/>}/>
               {/* <Route path="/profilePage" element={<ProfilePage/>}/> */}
               <Route path="/create-novel" element={<CreateNovel />}/>
              <Route path="/book" element={<Book />}/>
              <Route path="/book2" element={<Book2 />}/>
              <Route path="/book3" element={<Book3 />}/>
              <Route path="/pagereducer" element={<PageReducer />}/>
              <Route path="/create" element={<Create />} />
               <Route path="/newChat" element={<NewChat />}/>
               <Route path="newChat2" element={<NewChat2 />}/>
               <Route path="/favorites" element={<FavoritesPage />} />
               <Route path="/profilePage" element={<ProfilePage/>}/>
                <Route path="/supportFeedback" element={<SupportFeedback/>}/>
                <Route path="/workRoom" element={<WorkRoom />} />

          </Route>
        </Route>
         

      </Routes>
    </BrowserRouter>
  );
}


export default App;

