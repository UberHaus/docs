import * as React from "react";
import styles from "./MemberDAOSection.module.css";

const MemberDAOSection = () => {
  return (
    <section>
      <div className={styles.memberFirstContainer}>
        <div className={styles.firstContentGrid}>
          <div className={styles.memberIllustrationContainer}>
            <img
              src='/img/Illustration_BecomeMember.jpeg'
              alt=''
              className={styles.memberllustration}
            />
          </div>
          <div className={styles.sectionOneFlexMemberCTA}>
            <h2 className={styles.memberCTAHeading}>Become a member DAO</h2>
            <p className={styles.memberCTACopy}>
              If you want to join UberHaus, there are several things you should
              do before submitting an official proposal to the DAO. Visit the
              UberHaus Forum and select “+ New Topic”.
              <br />
              <br />
              This is where you will want to showcase what your DAO can do for
              UberHaus.
            </p>
            <div className={styles.buttonsContainer}>
              <a
                href='https://forum.daohaus.club/c/uberhaus/58'
                className={styles.memberCTAButton}
              >
                Go to Forum ➔
              </a>
              <a href='/docs/welcome/' className={styles.memberSecondaryButton}>
                Learn More ➔
              </a>
            </div>
          </div>
        </div>
        <div className={styles.memberSecondContainer}>
          <div className={styles.secondContentGrid}>
            <div className={styles.sectionTwoflexMemberCTA}>
              <h2 className={styles.memberCTAHeading}>Governance Mining</h2>
              <p className={styles.memberCTACopy}>
                Governance mining is a fairly new concept in the DAO ecosystem,
                and it was made possible in UberHaus by allowing the DAO to
                control HAUS token issuance.
                <br />
                <br />
                Through participating in governance e.g. voting, proposing,
                debating, and showing up for monthly meetings, a DAO on UberHaus
                can receive more HAUS! Pretty cool right? If your DAO should
                leave UberHaus, they’ll leave with more Haus than they started
                with!
              </p>
              <a
                href='/docs/governance-mining'
                className={styles.memberCTAButton}
              >
                Haus Mining Rules ➔
              </a>
            </div>
            <div className={styles.governanceIllustrationContainer}>
              <img
                src='/img/Illustration_GovMining.jpeg'
                alt=''
                className={styles.governancellustration}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberDAOSection;
