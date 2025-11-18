import React from 'react'
import styles from "./EditorHeader.module.css";
const EditorHeader = () => {
    return (
        <header className={`${styles.header} container-fluid`}>
            <div className="row align-items-center justify-content-between">
                {/* Left Side — Home */}
                <div className="col-6 col-md-4 d-flex align-items-center">
                    <h3 className={styles.title}>Home</h3>
                </div>

                {/* Right Side — Search */}
                <div className="col-6 col-md-4 d-flex justify-content-end">
                    <div className={styles.searchBox}>
                        <input
                            type="text"
                            className={styles.searchInput}
                            placeholder="Search"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default EditorHeader