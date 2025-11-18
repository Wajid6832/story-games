import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Bookpages.module.css";
import BookReader from "../Characterpage/BookReader";

const Bookpage = () => {
  const [openReader, setOpenReader] = useState(false);

  const chapters = [
    { date: "1 Oct 24", title: "1.1.1. Chapter 1" },
    { date: "3 Oct 24", title: "1.1.2. Chapter 2" },
    { date: "5 Oct 24", title: "1.1.3. Chapter 3" },
    { date: "7 Oct 24", title: "1.1.4. Chapter 4" },
  ];

  if (openReader) {
    return <BookReader setOpenReader={setOpenReader} />;
  }

  return (
    <div className={`${styles.wrappper}"container py-5 `}>
      <div className={`${styles.characterSection} mb-5`}>
        <div
          className={`${styles.characterHeader} d-flex align-items-center justify-content-between flex-wrap`}
        >
          <h2 className={styles.characterName}>1.1. Character One</h2>
          <button onClick={(e) => {
                    e.preventDefault();
                    setOpenReader(true);
                  }} className={styles.perspectiveBtn}>
            Read from Character Perspective
          </button>
        </div>

        <p className={styles.author}>
          Played & Written by <span>Jon Doe</span>
        </p>

        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6">
            <div className={`${styles.traitSection} h-100`}>
              <h3 className={styles.traitTitle}>Personality Traits</h3>
              <p className={styles.traitText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className={`${styles.traitSection} h-100`}>
              <h3 className={styles.traitTitle}>About Character</h3>
              <p className={styles.traitText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </div>
          </div>
        </div>

        <hr className={styles.sectionDivider} />

        <div className="row g-3">
          {chapters.map((ch, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-3">
              <div className={`${styles.chapterCard} p-3`}>
                <p className={styles.chapterDate}>{ch.date}</p>
                <h4 className={styles.chapterTitle}>{ch.title}</h4>
                <button
                  type="button"
                  onClick={() => setOpenReader(true)}
                  className={styles.readLink}
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Read Chapter
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.characterSection} mb-5`}>
        <div
          className={`${styles.characterHeader} d-flex align-items-center justify-content-between flex-wrap`}
        >
          <h2 className={styles.characterName}>1.2. Character Two</h2>
          <button onClick={(e) => {
                    e.preventDefault();
                    setOpenReader(true);
                  }} className={styles.perspectiveBtn}>
            Read from Character Perspective
          </button>
        </div>

        <p className={styles.author}>
          Played & Written by <span>Jane Smith</span>
        </p>

        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6">
            <div className={`${styles.traitSection} h-100`}>
              <h3 className={styles.traitTitle}>Personality Traits</h3>
              <p className={styles.traitText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className={`${styles.traitSection} h-100`}>
              <h3 className={styles.traitTitle}>About Character</h3>
              <p className={styles.traitText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </div>
          </div>
        </div>

        <hr className={styles.sectionDivider} />

        <div className="row g-3">
          {chapters.map((ch, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-3">
              <div className={`${styles.chapterCard} p-3`}>
                <p className={styles.chapterDate}>{ch.date}</p>
                <h4 className={styles.chapterTitle}>{ch.title}</h4>
                <button
                  type="button"
                  onClick={() => setOpenReader(true)}
                  className={styles.readLink}
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Read Chapter
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookpage;