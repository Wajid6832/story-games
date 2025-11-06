import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { BsCloudUpload } from "react-icons/bs";
import styles from "./WorkRoom.module.css";
import { useNavigate } from "react-router-dom";

const WorkRoomPage = () => {
   const navigate = useNavigate();
  return (
    <div className={`d-flex ${styles.pageWrapper}`}>
     
      <div
        className={`${styles.sidebarContainer}`}
      >
        
      </div>

      <div className={`flex-grow-1 ${styles.mainContent}`}>
        <div className={`container ${styles.container}`}>
        
          <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap">
            <div className="d-flex align-items-center mb-2 mb-sm-0">
              <button
                className={`${styles.backBtn} me-2`}
                
              >
                <FaAngleLeft />
              </button>
              <h2 className={styles.title}>Workroom Name</h2>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={`container ${styles.container}`}>
      
          <div className={styles.characterBox}>
            <h3 className={styles.sectionTitle}>Character 1 Name</h3>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <h4>Personality Traits</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <h4>About Character</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.completedBox}>
            <h3 className={styles.sectionTitle}>Completed Chapters</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="col">
                  <div className={styles.chapterCard}>
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
              <div className="col-12 col-md-6">
                <h4>Where we left off:</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <h4>Starting point:</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
              </div>
            </div>

            <div className="row align-items-start g-3 mb-3">
              <div className="col-12 col-md-6">
                <h4>Synopsis of this week’s Story:</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
              </div>

              <div className="col-12 col-md-6 d-flex flex-wrap justify-content-md-end justify-content-start gap-2">
                <button className={`${styles.btn} ${styles.primary}`}>
                  <BsCloudUpload className={styles.icon} />
                  Add a New Chapter
                </button>
                <button onClick={()=>navigate("/chatApp")} className={`${styles.btn} ${styles.secondary}`}>
                  Group Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkRoomPage;
