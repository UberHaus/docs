import * as React from "react";
import styles from "./DetailsSection.module.css";

const HeroSection = () => {
  return (
    <header className={styles.mainHeroSectionContainer}>
      <div className={styles.heroContainer}>
        <h2 className={styles.heroCTAHeading}>Public Haus</h2>
        <h3 className={styles.heroCTAHeadingSmall}>
          The DAOhaus ecosystem protocol DAO
        </h3>
        <p>DAOhaus is a public good and you should help govern it.</p>
        <div className={styles.heroButtonsContainer}>
          <a
            href="https://join.daohaus.fun"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCTAButton}
          >
            Join
          </a>
          <a
            href="https://publichaus.club/docs/welcome"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroSecondaryButton}
          >
            Docs
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
