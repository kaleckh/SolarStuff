import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import photo from "../media/logo.png";
export default function Header(props) {
  const navigate = useNavigate();

  return (
    <header className={styles.contactHeader}>
      <div className={styles.headerContainer}>
        <div></div>
        <div
          onClick={() => {
            navigate("/");
          }}
          className={styles.headerPieces}
        >
          Home
        </div>
        <div
          onClick={() => {
            navigate("/about");
          }}
          className={styles.headerPieces}
        >
          About
        </div>
        <div onClick={() => navigate("/diy")} className={styles.headerPieces}>
          Diy Kits
        </div>
      </div>
    </header>
  );
}
