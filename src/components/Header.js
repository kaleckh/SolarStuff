import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
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

        <div onClick={() => navigate("/login")} className={styles.headerPieces}>
          Login
        </div>
      </div>
    </header>
  );
}
