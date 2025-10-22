import React from "react";
import styles from "./Navbar.module.css";
import { Button, Form, InputGroup } from "react-bootstrap";

const NavbarTop = () => {
  return (
    <>
  
    <div className={styles.navbar}>
      <h5 className={styles.title}>Home</h5>

      <div className={styles.searchCreate}>
        <InputGroup className={styles.searchBar}>
          <InputGroup.Text>
            <i className="bi bi-search"></i>
          </InputGroup.Text>
          <Form.Control placeholder="Search" />
        </InputGroup>
        <Button className={styles.createBtn}>Create New Novel</Button>
      </div>
    
    </div>
      <hr className={styles.blueLine} />
  </>
  );
};

export default NavbarTop;
