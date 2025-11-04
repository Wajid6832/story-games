import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./CharacterPage.module.css";
import squares from "../../../../assets/squares.png";
import favourite from "../../../../assets/favourite.png";
import playIcon from "../../../../assets/play.png";
import stopIcon from "../../../../assets/stop.png";
import { CiImageOn } from "react-icons/ci";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const CharacterPage = () => {
  return (

    <div className={styles.characterPage}>
      <div className={styles.header}>
        <div className={styles.leftSection}>
          <Button variant="light" className={styles.backButton}>
            <img src={squares} alt="Back" className={styles.backIcon} />
          </Button>
          <h2 className={styles.bookTitle}>Book Name • 1.1 Character One</h2>
        </div>

        <div className={styles.rightSection}>
          <Button variant="primary" className={styles.awardButton}>
            🪙 Award Good Read Token
          </Button>
          <img src={favourite} alt="Heart" className={styles.heartIcon} />
        </div>
      </div>

      <Container fluid className={styles.pageContainer}>
        <Row>

          <Col md={6} className={styles.page}>
            <h5 className={styles.chapterTitle}>1.1.1. Chapter 1</h5>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.

            </p>

            <p className={styles.text}>
              Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.
              aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

            </p>
            <p className={styles.pageNumber}>Page 1 of 20</p>
          </Col>

          <Col md={6} className={styles.page}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.
              aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
              <br></br>  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>

            <div className={styles.imageBox}>
              <div className={styles.iconBox}>
                <CiImageOn className={styles.imageIcon} />
              </div>
              <p className={styles.caption}>
                <em>Lorem Ipsum, dor sit amet</em>
              </p>
            </div>

            <div className={styles.soundButtons}>
              <Button variant="primary"  >
                <img src={playIcon} alt="Play" className={styles.soundIcon} />
                Play sound effects
              </Button>
              <Button variant="secondary">
                <img src={stopIcon} alt="Stop" className={styles.soundIcon} />
                Stop sound effects
              </Button>
            </div>

            <p className={styles.text}>
              Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <p className={styles.pageNumber}>Page 2 of 20</p>

            <div className={styles.pageNav}>
              <Button variant="light">
                <IoIosArrowDropleft />
              </Button>
              <Button variant="primary">
                <IoIosArrowDroprightCircle />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

  );
};

export default CharacterPage;
