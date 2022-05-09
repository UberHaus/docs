import * as React from "react";
import styles from "./GovSection.module.css";

const GovSection = () => {
  return (
    <section className={styles.govContainer}>
      <div className={styles.contentGrid}>
        <div className={styles.flexCTA}>
          <div className={styles.contentContainer}>
            <h2 className={styles.govCTAHeading}>
              A unique 2 body governance system.
            </h2>
            <p className={styles.govCTACopy2}>
              On chain governance managed by 2 bodies and 
              harnessing the power of the Daohaus protocol
            </p>
            <p className={styles.govCTACopy2}>
              Permissionless and inclusive without the 
              downfalls of coin voting.
            </p>
            <p className={styles.govCTACopy2}>
              <strong>Rathaus</strong> anyone can stake to 
              participate in governance over the prtocol. 
              On chian membership with gassless voting. 
              1x governance power for staking a minimum of 1 HAUS, 
              2x governance power for procviding liquidity 
              in any of our official pools
            </p>
            <p className={styles.govCTACopy2}>
              <strong>Bundeshaus</strong> Member DAOs can 
              participate in the DAO Federation. Membership is 
              fully on chain and permissioned through election. 
              The resposibilities include ratification 
              and execution of policies.
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
            src='/img/Illustration_Gov.png'
            alt=''
            className={styles.communityIllustration}
          />
        </div>
      </div>
    </section>
  );
};

export default GovSection;
