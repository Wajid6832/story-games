import React, { useState } from "react";
import styles from "./EditorHome.module.css";

import EditorHeader from "./EditorHeader";
import EditorHomeFacTopUp from "./editorHomeUpTopFavSectionsComponent/EditorHomeFacTopUp";
import EditorSidebar from "../../../components/Sidebar/WriterSidebar";

const EditorHome = () => {
  const [isOpenSidebar,setIsOpenSidebar]=useState(true);

  const handleSidebar =()=>{
    setIsOpenSidebar((prev)=>!prev);
    console.log("handleSidebar :",isOpenSidebar);
  }

  return (
    <div className={`${styles.editorHomeContainer} container-fluid`}>
      {/* Sidebar */}
      <div className={ isOpenSidebar?styles.sidebarSection:styles.sidebarClosed}>
        <EditorSidebar handleSidebar={handleSidebar} />
      </div>

      {/* Main content area */}
      <div className={styles.mainSection}>
        <div className={styles.header}>
          <EditorHeader/>
        </div>

        <div className={styles.content}>
        <EditorHomeFacTopUp/>
        </div>
      </div>
    </div>
  );
};

export default EditorHome;
