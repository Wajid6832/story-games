import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { BsCloudUpload } from "react-icons/bs";
import styles from "./BookNamePage.module.css";

const BookNamePage = () => {
    return (
        <div className={styles.container}>
        
            <div className={styles.header}>
                <button className={styles.backBtn}>
                    <FaAngleLeft />
                </button>
                <h2 className={styles.title}>Workroom Name</h2>
            </div>
            <div className={styles.divider}></div>

            
            <div className={styles.characterBox}>
                <h3 className={styles.sectionTitle}>Character 1 Name</h3>
                <div className={styles.characterContent}>
                    <div className={styles.traits}>
                        <h4>Personality Traits</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                            tation ullamcorper suscipit lobortis nisl ut.
                        </p>
                    </div>
                    <div className={styles.about}>
                        <h4>About Character</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                            tation ullamcorper suscipit lobortis nisl ut.
                        </p>
                    </div>
                </div>
            </div>

           
            <div className={styles.completedBox}>
                <h3 className={styles.sectionTitle}>Completed Chapters</h3>
                <div className={styles.chapterList}>
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num} className={styles.chapterCard}>
                              <p className={styles.date}>1 Oct 22</p>
                            <h4>Chapter {num}</h4>
                            <a href="#" className={styles.readLink}>
                                Read Chapter →
                            </a>
                        </div>
                    ))}
                </div>
            </div>



        
            <div className={styles.upcomingBox}>
                <h3 className={styles.sectionTitle}>Upcoming Chapter</h3>
                <div className={styles.upcomingContent}>
                    <div className={styles.section}>
                        <h4>Where we left off:</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                            tation ullamcorper suscipit lobortis nisl ut.
                        </p>
                    </div>
                    <div className={styles.section}>
                        <h4>Starting point:</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                            tation ullamcorper suscipit lobortis nisl ut.
                        </p>
                    </div>
                </div>

                <div className={styles.synopsisRow}>
                    <div className={styles.synopsisText}>
                        <h4>Synopsis of this week’s Story:</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                            dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                            suscipit lobortis nisl ut.
                        </p>
                    </div>

                    <div className={styles.synopsisButtons}>
                        <button className={`${styles.btn} ${styles.primary}`}>
                            <BsCloudUpload className={styles.icon} />
                            Add a New Chapter
                        </button>
                        <button className={`${styles.btn} ${styles.secondary}`}>Group Chat</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookNamePage;
