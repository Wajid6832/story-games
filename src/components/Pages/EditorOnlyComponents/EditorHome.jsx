import React, { useEffect, useState } from "react";
import EditorHeader from "./EditorHeader";
import EditorHomeFacTopUp from "./editorHomeUpTopFavSectionsComponent/EditorHomeFacTopUp";
// import EditorSidebar from "../../Common/Sidebar/EditorSidebar";
import styles from "./EditorHome.module.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../features/product/product.slice";
const EditorHome = () => {

  const { data, isLoading, isError, isSuccess, error } = useSelector((state) => state.product);
  //  console.log(data);
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  return (
    <div className={`${styles.editorHomeContainer} container-fluid`}>
      {/* Sidebar */}
      <div className={isOpenSidebar ? styles.sidebarSection : styles.sidebarClosed}>
        {/* <EditorSidebar handleSidebar={handleSidebar} /> */}

      </div>

      {/* Main content area */}
      <div className={styles.mainSection}>
        <div className={styles.header}>
          <EditorHeader />
        </div>

        <div className={styles.content}>
          <EditorHomeFacTopUp data={data.data} />
        </div>
      </div>
    </div>
  );
};

export default EditorHome;
