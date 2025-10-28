import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import styles from "./StoryPrivacyPolicyPage.module.css";

const PrivacyPolicy = ({
  subtitle = "Privacy Policy",
  content = null
}) => {
  return (
    <div className={`d-flex justify-content-center align-items-center min-vh-100 bg-light py-4 px-3`}>
      <div className={`${styles.curvedContainer} bg-white px-4 px-md-5 py-5 position-relative`}>
        <div className={`${styles.titlesection} mb-4 position-relative`}>
          <div className="d-flex align-items-center mb-3">
            <button className={`${styles.backButton} me-2`}>
              <FaAngleLeft />
            </button>
            <h1 className={`${styles.title} mb-0`}>Story Host</h1>
          </div>

          <div className="d-flex align-items-center gap-2 mt-3">
            <h5 className={`${styles.subtitle} mb-0`}>{subtitle}</h5>
            <div className={styles.underline}></div>
          </div>
        </div>

        <div className={`${styles.content}`}>
          {content ? (
            content
          ) : (
            <>
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat.
              </p>

              <h4>Lorem Ipsum</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat.
              </p>

              <h4>Lorem Ipsum</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat.
              </p>
            </>
          )}
        </div>
        
      </div>
     
    </div>
  );
};

export default PrivacyPolicy;
