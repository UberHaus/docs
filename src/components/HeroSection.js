import * as React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <header className={styles.heroSectionContainer}>
      <div className={styles.heroTopContainer}>
        <h2 className={styles.heroCTAHeading}>The first DAO of DAOs</h2>
      </div>
      <div className={styles.heroBottomContainer}>
        <div className={styles.heroGrid}>
          <div className={styles.heroIllustrationContainer}>
            <img src='/img/Illustration-Hero.png' alt='' />
          </div>
          <div className={styles.heroCTAFlex}>
            <span>
              No borders, no passports, only collaboration. UberHAUS is a
              community of communities that govern the DAOhaus suite of
              products.
            </span>
            <div className={styles.heroButtonsContainer}>
              <a href='#' className={styles.heroCTAButton}>
                Launch App ➔
              </a>
              <a href='#' className={styles.heroSecondaryButton}>
                Learn More ➔
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
