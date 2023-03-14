import React from "react";
import styles from "./About.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function About() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.backgroundPhoto}>
          <Header />

          <div className={styles.flex}>
            <div className={styles.aboutContainer}>
              <div className={styles.mainText}>Our Mission</div>
              <div className={styles.aboutText}>
                Did you know that if you skipped the salesman when buying solar you would save 50% at least? Those guys double the cost of your system and take that as PROFIT
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondMain}>
        <div className={styles.leftContainer}>
          <h2 className={styles.aboutTitle}>About us</h2>
          <div className={styles.aboutParagraph}>
            We are just some people that wanna make the solar game fair. Go get three solar quotes and then come to us, we'll show you how much cheaper we really are 
          </div>
        </div>
        <div className={styles.rightContainer}>
          <h2 className={styles.aboutTitle}>The Real Cost Of Solar</h2>
          <div className={styles.aboutParagraph}>
            Look up what an average solar salesman makes a year(its 100k btw)
            and tell me whose pocket that money comes out of.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
