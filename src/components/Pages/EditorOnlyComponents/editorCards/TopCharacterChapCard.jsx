import React from 'react'
import styles from "./TopCharacterChapCard.module.css"
const TopCharacterChapCard = ({ section }) => {
    return (
        <div className={styles.cardSection}>
            <div className={styles.card}>
                <p className={styles.bookName}>{section.bookName}</p>
                <h4 className={styles.characterName}>
                    {section.characterName || section.chapterName}
                </h4>
                <p className={styles.meta}>
                    {/* {section.playedBy
                        ? `Played & Written by ${section.writtenBy}`
                        : `Written by ${section.writtenBy}`} */}
                        plaued and written buy {section.writtenBy}
                </p>
            </div>
        </div>
    )
}


export default TopCharacterChapCard