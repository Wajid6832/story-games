import React from "react";
import { FaAngleLeft, FaRegHeart } from "react-icons/fa";
import styles from "../../Pages/Bookpages/Bookpages.module.css";

const Bookpage = () => {
  const characters = [
    {
      id: 1,
      name: "1.1. Character One",
      author: "Jon Doe",
      chapters: [
        { date: "1 Oct 22", title: "1.1.1. Chapter 1" },
        { date: "1 Oct 22", title: "1.1.2. Chapter 2" },
        { date: "1 Oct 22", title: "1.1.3. Chapter 3" },
        { date: "1 Oct 22", title: "1.1.4. Chapter 4" },
      ],
    },
    {
      id: 2,
      name: "1.2. Character Two",
      author: "Jon Doe",
      chapters: [
        { date: "1 Oct 22", title: "1.2.1. Chapter 1" },
        { date: "1 Oct 22", title: "1.2.2. Chapter 2" },
        { date: "1 Oct 22", title: "1.2.3. Chapter 3" },
        { date: "1 Oct 22", title: "1.2.4. Chapter 4" },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backBtn}>
          <FaAngleLeft />
        </button>
        <h2 className={styles.title}>Book Name</h2>
        <div className={styles.iconRight}>
          <FaRegHeart />
        </div>
      </div>

      <div className={styles.divider}></div>

      {characters.map((char) => (
        <div key={char.id} className={styles.characterCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.charTitle}>{char.name}</h3>
            <button className={styles.readBtn}>Read from Character Perspective</button>
          </div>

          <p className={styles.byline}>
            Played & Written by <span>{char.author}</span>
          </p>

          <div className={styles.traitsRow}>
            <div className={styles.traitBox}>
              <h4>Personality Traits</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>
            <div className={styles.traitBox}>
              <h4>About Character</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>
          </div>

          <div className={styles.chapterList}>
            {char.chapters.map((ch, idx) => (
              <div key={idx} className={styles.chapterItem}>
                <p className={styles.date}>{ch.date}</p>
                <h5>{ch.title}</h5>
                <a href="#">Read Chapter </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookpage;
