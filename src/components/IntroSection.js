import * as React from "react";
import styles from "./IntroSection.module.css";

const IntroSection = () => {
  return (
    <section className={styles.introContainer}>
      <div className={styles.contentGrid}>
        <div className={styles.flexCTA}>
          <div className={styles.contentContainer}>
            <h2 className={styles.introCTAHeading}>
              A nation of community-centric organizations.
            </h2>
            <p className={styles.introCTACopy}>
              This network of DAOs, bound through a token, shall become a nation
              of community-centric organizations. No borders, no passports, only
              collaboration. This community of communities now owns the DaoHaus
              suite of products.
            </p>
            <a
              href='/docs/philosophy-&-vision.md'
              className={styles.introCTAButton}
            >
              Read Manifesto ➔
            </a>
          </div>
        </div>
        <div className={styles.communityIllustrationContainer}>
          <img
            src='/img/Illustration_Community_1.jpeg'
            alt=''
            className={styles.communityIllustration}
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
