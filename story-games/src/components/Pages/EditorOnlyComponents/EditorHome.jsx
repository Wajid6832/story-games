import React, { useSelector, useState } from "react";
import EditorHeader from "./EditorHeader";
import EditorHomeFacTopUp from "./editorHomeUpTopFavSectionsComponent/EditorHomeFacTopUp";




// import EditorSidebar from "../../Common/Sidebar/EditorSidebar";
import styles from "./EditorHome.module.css"
<<<<<<< HEAD
import {  useSelector } from "react-redux";

=======
>>>>>>> 2f9d142450ea61d4f63ad1135166ce5c76d2f82a
const EditorHome = () => {

  const { data, isLoading, isError, isSuccess, error } = useSelector((state) => state.product);
  //  console.log(data);
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  return (
    <div className={`${styles.editorHomeContainer} container-fluid`}>
      {/* Sidebar */}
      {/* <div className={ isOpenSidebar?styles.sidebarSection:styles.sidebarClosed}>
        <EditorSidebar handleSidebar={handleSidebar} />
      </div> */}

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
