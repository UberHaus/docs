import * as React from "react";
import styles from "./MemberDAOSection.module.css";

const MemberDAOSection = () => {
  return (
    <section className={styles.memberContainer}>
      <div className={styles.contentGrid}>
        <div className={styles.memberIllustrationContainer}>
          <img
            src='/img/Illustration_BecomeMember.jpeg'
            alt=''
            className={styles.memberllustration}
          />
        </div>
        <div className={styles.flexCTA}>
          <h2 className={styles.memberCTAHeading}>Become a member DAO</h2>
          <p className={styles.memberCTACopy}>
            If you want to join UberHaus, there are several things you should do
            before submitting an official proposal to the DAO. Visit the
            UberHaus Forum and select “+ New Topic”.
            <br />
            <br />
            This is where you will want to showcase what your DAO can do for
            UberHaus.
          </p>
          <a href='#' className={styles.memberCTAButton}>
            Go to Forum ➔
          </a>
        </div>
      </div>
    </section>
  );
};

export default MemberDAOSection;
