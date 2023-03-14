import React from "react";
import styles from "./Contact.module.css";
import photo from "../media/contactphoto.jpg";
import Header from "../components/Header";
export default function Contact() {
  return (
    <div>
      <Header picture={photo}/>
      <div className={styles.contactContainer}>
        <h2 className={styles.contactText}>Get In Touch With Us!</h2>
        <div className={styles.inputTopContainer}>
          <input className={styles.smallInput} placeholder="First Name" />
          <input className={styles.smallInput} placeholder="Last Name"/>
        </div>
        <div className={styles.inputBottomContainer}>
          <input className={styles.largeInput} placeholder="Email" />
          <input className={styles.largeInput} />
        </div>
      </div>
    </div>
  );
}
