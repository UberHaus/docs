import * as React from "react";
import styles from "./DetailsSection.module.css";

const HeroSection = () => {
  return (
    <header className={styles.heroSectionContainer}>
      <div className={styles.heroContainer}>
        <h2 className={styles.heroCTAHeading}>Introducing Public HAUS</h2>
        <h3 className={styles.heroCTAHeadingSmall}>
          The DAOhaus ecosystem protocol DAO
        </h3>
        <p>DAOhaus is a public good and you should help govern it.</p>
        <p>:)</p>
      </div>
    </header>
  );
};

export default HeroSection;
