
import React from "react";
import styles from "./Book2.module.css";
import img from '../../assets/img1/IMG.png'
import pic from '../../assets/img1/pic.png'
import Avatar from '../../assets/img1/Avatar.png'
import IMG1 from '../../assets/img1/IMG1.png'


import pic2 from '../../assets/img1/pic2.png'
const contacts = [
      { name: "Jane Cooper", avatar: img },
      { name: "Wade Warren", avatar: pic },
  { name: "Brooklyn Simmons", avatar: Avatar },
  { name: "Jenny Wilson", avatar: Avatar },
  { name: "Devon Lane", avatar: img },
  { name: "Marvin McKinney", avatar: pic2 },
   { name: "Dianne Russell", avatar: IMG1 },
];

const Book2 = () => {
  return (
    <div className={styles.container}>
      {contacts.map((contact, index) => (
        <div key={index} className={styles.item}>
          <img src={contact.avatar} alt={contact.name} className={styles.avatar} />
          <span className={styles.name}>{contact.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Book2;

