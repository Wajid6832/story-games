import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import styles from "./StoryPrivacyPolicyPage.module.css";

const PrivacyPolicy = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.curvedContainer}>
                <div className={styles.header}>
                    <button className={styles
                        .backButton}>
                        <FaAngleLeft />
                    </button>
                    <h1 className={styles.title}>Story Host</h1>
                    <div className={styles.subtitleWrapper}>
                    <h5 className={styles.subtitle}>Privacy Policy</h5>
                    <div className={styles.underline}></div>
                    </div> 
                </div>

                <div className={styles.content}>
                    <h4>Lorem Ipsum</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
                        velit esse molestie consequat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
                        velit esse molestie consequat.
                    </p>

                    <h4>Lorem Ipsum</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
                        velit esse molestie consequat.
                    </p>

                    <h4>Lorem Ipsum</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
                        velit esse molestie consequat.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
