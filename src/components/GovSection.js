import * as React from "react";
import styles from "./GovSection.module.css";

const GovSection = () => {
  return (
    <section className={styles.govContainer}>
      <div className={styles.contentGrid}>
        <div className={styles.flexCTA}>
          <div className={styles.contentContainer}>
            <h2 className={styles.govCTAHeading}>
              Governance
            </h2>
            <p className={styles.govCTACopy2}>
              Coming Soon...
            </p>
            <a
              href='/docs/philosophy-&-vision'
              className={styles.govCTAButton}
            >
              Read More
            </a>
          </div>
        </div>
        <div className={styles.communityIllustrationContainer}>
          <img
            src='/img/Illustration_GovMining.jpeg'
            alt=''
            className={styles.communityIllustration}
          />
        </div>
      </div>
    </section>
  );
};

export default GovSection;
