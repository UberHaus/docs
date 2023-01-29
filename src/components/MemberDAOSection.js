import * as React from "react";
import styles from "./MemberDAOSection.module.css";

const MemberDAOSection = () => {
  return (
    <section>
      <div className={styles.memberFirstContainer}>
        <div className={styles.firstContentGrid}>
          <div className={styles.memberIllustrationContainer}>
            <img
              src="/img/JoinPublicHaus.png"
              alt=""
              className={styles.memberllustration}
            />
          </div>
          <div className={styles.sectionOneFlexMemberCTA}>
            <h2 className={styles.memberCTAHeading}>Become a member</h2>
            <p className={styles.memberCTACopy}>
              If you want to join PublicHaus, you will need to Stake HAUS to
              recieve HAUS Shares.
              <br />
              <br />
              You then ascend as champion or delegate to one.
            </p>
            <div className={styles.buttonsContainer}>
              <a
                href="https://forum.daohaus.club/"
                className={styles.memberCTAButton}
              >
                Go to Forum ➔
              </a>
              <a href="/docs/welcome/" className={styles.memberSecondaryButton}>
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
                and it was made possible in PublicHaus by allowing the DAO to
                control HAUS token issuance and retroactive rewards.
                <br />
                <br />
                Through participating in governance as a delegate e.g. voting,
                proposing, debating, and showing up for meetings and rituals, a
                delegate in PublicHaus can receive more HAUS!
              </p>
              <a
                href="/docs/governance-mining"
                className={styles.memberCTAButton}
              >
                Haus Mining Rules ➔
              </a>
            </div>
            <div className={styles.governanceIllustrationContainer}>
              <img
                src="/img/Illustration_GovMining.jpeg"
                alt=""
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
