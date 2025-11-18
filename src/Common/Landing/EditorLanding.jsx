import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./EditorLanding.module.css";

import Frame from "../../assets/Landing-img.png";

import { Link, useNavigate } from "react-router-dom";


const EditorLanding = () => {
  const navigate = useNavigate(); 

  const handleSignin = () => {
    navigate("/editorlogin"); 
  };

  return (
    <div className={styles.mainLandingDiv}>
      <div className={styles.landingSecondDiv}> 
        <div className={styles.ladingContentDiv}>
          <div className={styles.landignContent}>
            <div className={styles.contentUpper}>
              <div className={styles.content}>
                <div className={styles.heading}>
                  <p>STORY HOST</p>
                </div>

                <div className={styles.secondHeading}>
                  <p>Lorem ipsum dolor it amet</p>
                  <div className={styles.dashtLine}></div>
                </div>

                <div className={styles.text}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat
                  </p>
                </div>

                <div className={styles.butons}>
                  <div className={styles.btn}>
                    <div className={styles.signup}>
                      <button onClick={() => navigate("/signup")}>Signup</button>
                    </div>
                    <div className={styles.signin}>
                      <button onClick={handleSignin}>SignIN</button>
                    </div>
                  </div>
                </div>

                <div className={styles.browse}>
                  <p>Browse as guest</p>
                </div>
              </div>

              <div className={styles.image}>
                <img src={Frame} alt="Landing visual" />
              </div>
            </div>
          </div>

          <div className={styles.topListContainer}>
            <div className={styles.cardList}>
              <div className={styles.lowerSetctionCards}>
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <div className={styles.card} key={index}>
                      <img src="placeholder.png" alt="Placeholder" />
                    </div>
                  ))}
              </div>

              <div className={styles.topListLabel}>
                <Link>Top List</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorLanding;
