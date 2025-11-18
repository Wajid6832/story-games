import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import styles from "./SubscriptionCard.module.css";

import frame1 from "../../../../assets/Readers-Assets/images/Frame1.png";
import frame2 from "../../../../assets/Readers-Assets/images/Frame2.png";
import frame3 from "../../../../assets/Readers-Assets/images/Frame3.png";
import frame4 from "../../../../assets/Readers-Assets/images/Frame4.png";

const images = {
  "Casual Reader": frame1,
  "Active Reader": frame2,
  "Excited Reader": frame3,
  "Binge Reader": frame4,
};

const SubscriptionCard = ({
  planName,
  price,
  features,
  isCurrent,
  onSelect,
  onDeselect,
}) => {
  const imageSrc = images[planName] || frame1;
  const buttonText = isCurrent ? "Deselect Option" : "Select Option";
  const buttonAction = isCurrent ? onDeselect : onSelect;

  return (
    <Card
      className={`${styles.card} ${
        isCurrent ? styles.currentCard : styles.defaultCard
      }`}
    >
      {isCurrent && <div className={styles.currentTag}>Current Subscription</div>}

      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.planName}>{planName}</Card.Title>

        <div className={styles.imageContainer}>
          <img src={imageSrc} alt={planName} className={styles.bookImage} />
        </div>

        <div className={styles.priceContainer}>
          <span
            className={isCurrent ? styles.currentPrice : styles.defaultPrice}
          >
            ${price}
          </span>
          <span className={styles.pricePeriod}>/month</span>
        </div>

        <Button
          variant={isCurrent ? "dark" : "outline-primary"}
          className={styles.button}
          onClick={buttonAction}
        >
          {buttonText}
        </Button>

        <ListGroup variant="flush" className={styles.featuresList}>
          {features.map((feature, i) => (
            <ListGroup.Item key={i} className={styles.featureItem}>
              <i className={`bi bi-check ${styles.checkIcon}`}></i>
              {feature}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default SubscriptionCard;
