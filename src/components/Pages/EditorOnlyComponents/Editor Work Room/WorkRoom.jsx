import React from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
  FiMessageCircle,
} from "react-icons/fi";
import styles from "./Workroom.module.css";

const WorkroomInterface = () => {
  const chapters = [
    { number: 1, date: "1 Oct 22" },
    { number: 2, date: "1 Oct 22" },
    { number: 3, date: "1 Oct 22" },
    { number: 4, date: "1 Oct 22" },
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <button className={styles.backButton}>
          <FiChevronLeft size={20} className={styles.icon} />
        </button>
        <h1 className={styles.headerTitle}>Workroom Name</h1>
      </header>

      {/* Character Card */}
      <div className={styles.characterCard}>
        <h2 className={styles.characterName}>Character 1 Name</h2>
        <div className={styles.characterGrid}>
          <div className={styles.characterSection}>
            <h3 className={styles.sectionTitle}>Personality Traits</h3>
            <p className={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
          <div className={styles.characterSection}>
            <h3 className={styles.sectionTitle}>About Character</h3>
            <p className={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
        </div>
      </div>

      {/* Completed Chapters */}
      <div className={styles.completedChapters}>
        <h2 className={styles.sectionHeading}>Completed Chapters</h2>
        <div className={styles.chaptersGrid}>
          {chapters.map((chapter) => (
            <div key={chapter.number} className={styles.chapterCard}>
              <span className={styles.chapterDate}>{chapter.date}</span>
              <div className={styles.chapterInfo}>
                <span className={styles.chapterTitle}>
                  Chapter {chapter.number}
                </span>
                <button className={styles.readButton}>
                  Read Chapter{" "}
                  <FiChevronRight size={14} className={styles.icon} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Chapter */}
      <div className={styles.upcomingChapter}>
        <h2 className={styles.sectionHeading}>Upcoming Chapter</h2>
        <div className={styles.upcomingGrid}>
          <div className={styles.characterSection}>
            <h3 className={styles.sectionTitle}>Where we left off:</h3>
            <p className={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h3 className={styles.sectionTitle}>
              Synopsis of this week's Story:
            </h3>
            <p className={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className={styles.characterSection}>
            <h3 className={styles.sectionTitle}>Starting point:</h3>
            <p className={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className={styles.actionButtons}>
          <button className={styles.primaryButton}>
            <FiPlus size={18} className={styles.icon} /> Add a New Chapter
          </button>
          <button className={styles.secondaryButton}>
            <FiMessageCircle size={18} className={styles.icon} /> Group Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkroomInterface;