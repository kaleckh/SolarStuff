import React, { useState } from "react";
import styles from "./Faq.module.css";

export const Faq = (props) => {
  const [useToggle, setToggle] = useState(false);
  return (
    <div className={styles.questionsContainer}>
      <div className={styles.faqTitle}>{props.question}</div>
      {useToggle ? (
        <div className={styles.answerContainer}>
          <div>{props.answer}</div>
          <div className={styles.close} onClick={() => {setToggle(false)}}>Close</div>
        </div>
      ) : (
        <div className={styles.close}
          onClick={() => {
            setToggle(true);
          }}
        >
          Read Me
        </div>
      )}
    </div>
  );
};
