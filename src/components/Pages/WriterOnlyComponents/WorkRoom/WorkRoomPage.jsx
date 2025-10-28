import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { BsCloudUpload } from "react-icons/bs";
import styles from "./WorkRoom.module.css";
import WriterSidebar from "../../../Sidebar/WriterSidebar";

const WorkRoomPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className={`${styles.pageWrapper} ${isSidebarOpen ? styles.shifted : ""}`}>
      <WriterSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className={`container ${styles.container}`}>
      
        <div className={`d-flex align-items-center flex-md-row flex-column mb-4`}>
          <button className={`${styles.backBtn} me-2 mb-2 mb-md-0`}>
            <FaAngleLeft />
          </button>
          <h2 className={styles.title}>Workroom Name</h2>
        </div>
      </div>

      <div className={styles.divider}></div>


      <div className={`container ${styles.container}`}>
        <div className={`${styles.characterBox} mb-4`}>
          <h3 className={styles.sectionTitle}>Character 1 Name</h3>
          <div className="row g-3">
            <div className="col-md-6">
              <h4>Personality Traits</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
            <div className="col-md-6">
              <h4>About Character</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
          </div>
        </div>


        <div className={`${styles.completedBox} mb-4`}>
          <h3 className={styles.sectionTitle}>Completed Chapters</h3>
          <div className="row g-3">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="col-6 col-md-3">
                <div className={`p-3 rounded`}>
                  <p className={styles.date}>1 Oct 22</p>
                  <h4>Chapter {num}</h4>
                  <a href="#" className={styles.readLink}>
                    Read Chapter →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className={styles.upcomingBox}>
          <h3 className={styles.sectionTitle}>Upcoming Chapter</h3>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <h4>Where we left off:</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
            <div className="col-md-6">
              <h4>Starting point:</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <h4>Synopsis of this week’s Story:</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>


            <div className="col-md-6 d-flex justify-content-md-end justify-content-start flex-wrap gap-4 mt-3 mt-md-0">
              <button className={`${styles.btn} ${styles.primary}`}>
                <BsCloudUpload className={styles.icon} />
                Add a New Chapter
              </button>
              <button className={`${styles.btn} ${styles.secondary}`}>
                Group Chat
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>


  );
};

export default WorkRoomPage;
