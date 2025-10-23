import React from "react";
import styles from "./EditorHome.module.css";
import EditorSidebar from "../sidebar/EditorSidebar";
import EditorHeader from "../header/EditorHeader";
import EditorHomeFacTopUp from "../../editorHomeComponents/editorHomeUpTopFavSectionsComponent/EditorHomeFacTopUp";

const EditorHome = () => {
  return (
    <div className={`${styles.editorHomeContainer} container-fluid`}>
      {/* Sidebar */}
      <div className={styles.sidebarSection}>
        <EditorSidebar />
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
