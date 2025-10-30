import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
// import { Products } from "./features/product/Product";
import CharacterPage from "./components/CharacterPage/CharacterPage";
import CreateNovel from "./components/NovelForm/CreateNovel";
import HomePage from "./components/HomePage/HomePage";
import CreateChapter from "./components/CreateChapter/CreateChapter";

function App() {
  const user = {
    role: "writer",
  };

  const ROLE_COMPONENTS = {
    // writer: <WriterHome />,
    reader: <Bookpage />,
    author: <></>,
    producer: <></>,
  };

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<CreateNovel/>} />  
        <Route path="/" element={<HomePage />} />
        <Route path="/create-novel" element={<CreateNovel />} />
        <Route path="/character" element={<CharacterPage />} />
        <Route path="/create-chapter" element={<CreateChapter />} />
      </Routes>

      <BrowserRouter>
        <Routes>
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/" element={<ReaderHome />} /> */}
          {/* <Route path="/readinghome" element={<ReadersLanding />} /> */}
          <Route path="/SupportFeedback" element={<SupportFeedback />} />
          <Route path="/info" element={<ReadersInfo/>} />
          <Route path="/term1" element={<TermCondition1 />} />
          <Route path="/write" element={<WriterMode />} />

      
    
           <Route path="/" element={<Landing/>} />
           <Route path="/editorlogin" element={<EditorLogin/>} />
           <Route path="/editorhome" element={<EditorHome/>} />
        <Routes/>
          {/* Writer & Editor Routes */}
          {/* <Route path="/writer" element={<WriterHome />} />
          <Route path="/editor" element={<EditorLanding />} />
          <Route path="/home" element={<Home />} /> */}
          {/* Reader Routes */}
          {/* <Route path="/" element={<ReaderHome />} /> */}
          {/* <Route path="/readinghome" element={<ReadersLanding />} />
          <Route path="/currentnovels" element={<CurrentNovels />} />
          <Route path="/supportfeedback" element={<SupportFeedback />} />
          <Route path="/becomewriter" element={<BecomeWriter />} />
          <Route path="/tokenstore" element={<TokenStore />} /> */}
          {/* Optional / commented routes */}
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/" element={<Login />} /> */}

          <Route element={<Layout />}>
            <Route path="/" element={ROLE_COMPONENTS[user.role] || null} />
            <Route path="/authorCard" element={<AuthorCard />} />
            <Route path="/bookpage" element={<Bookpage />} />
            {/* <Route path="/bookReader" element={<BookReader />} /> */}
            {/* <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
