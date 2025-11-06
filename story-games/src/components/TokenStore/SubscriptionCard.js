import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './SubscriptionCard.module.css';


import frame1 from '../../assets/Readers-Assets/images/Frame1.png';
import frame2 from '../../assets/Readers-Assets/images/Frame2.png';
import frame3 from '../../assets/Readers-Assets/images/Frame3.png';
import frame4 from '../../assets/Readers-Assets/images/Frame4.png';

const getImageSrc = (planName) => {
  switch (planName) {
    case 'Casual Reader':
      return frame1;
    case 'Active Reader':
      return frame2;
    case 'Excited Reader':
      return frame3;
    case 'Binge Reader':
      return frame4;
    default:
      return frame1;
  }
};

const SubscriptionCard = ({
  planName,
  price,
  features,
  isCurrent,
  onSelect,
  onDeselect,
}) => {
  const cardClasses = `${styles.card} ${
    isCurrent ? styles.currentCard : styles.defaultCard
  }`;
  const priceClasses = isCurrent ? styles.currentPrice : styles.defaultPrice;
  const buttonVariant = isCurrent ? 'dark' : 'outline-primary';
  const buttonText = isCurrent ? 'Deselect Option' : 'Select Option';
  const buttonAction = isCurrent ? onDeselect : onSelect;
  const imageSrc = getImageSrc(planName);

  return (
    <Card className={cardClasses}>
      {isCurrent && <div className={styles.currentTag}>Current Subscription</div>}

      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.planName}>{planName}</Card.Title>

        <div className={styles.imageContainer}>
          <img src={imageSrc} alt={planName} className={styles.bookImage} />
        </div>

        <div className={styles.priceContainer}>
          <span className={priceClasses}>${price}</span>
          <span className={styles.pricePeriod}>/month</span>
        </div>

        <Button
          variant={buttonVariant}
          className={styles.button}
          onClick={buttonAction}
        >
          {buttonText}
        </Button>

        <ListGroup variant="flush" className={styles.featuresList}>
          {features.map((feature, index) => (
            <ListGroup.Item key={index} className={styles.featureItem}>
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
