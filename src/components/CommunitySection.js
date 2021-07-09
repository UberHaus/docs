import * as React from "react";
import styles from "./CommunitySection.module.css";

const CommunitySection = () => {
  return (
    <section className={styles.communityContainer}>
      <div className={styles.threeGrid}>
        <div className={styles.contentFlex}>
          <h2 className={styles.communityCTAHeading}>Community meetings.</h2>
          <p>
            The UberHaus community is a vibrant and large community of DAOs,
            where currently there are +70 DAOs actively participating in
            UberHaus governance!
          </p>
          <p>
            We meet every{" "}
            <span>3rd Wednesday of the month at 11AM EST (16:00 UTC)</span> to
            share updates and discuss proposals. For your DAO to be eligible to
            receive rewards, your delegate can’t miss more than 1/3 of
            discussions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
