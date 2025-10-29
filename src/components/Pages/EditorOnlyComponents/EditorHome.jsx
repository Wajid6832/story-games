import React, { useState } from "react";
import EditorHeader from "./EditorHeader";
import EditorHomeFacTopUp from "./editorHomeUpTopFavSectionsComponent/EditorHomeFacTopUp";

const EditorHome = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  return (
    <div>
      <EditorHeader />
      <EditorHomeFacTopUp />
    </div>
  );
};

export default EditorHome;
