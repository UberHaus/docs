import * as React from "react";
import styles from "./DetailsSection.module.css";

const DetailsSection = () => {
  return (
    <>
      <section className={styles.heroSectionContainer}>
        <div className={styles.heroContainer}>
          <h3>Curation</h3>
          <div className={styles.flexx}>
            <img width="50px" src={"/img/curation1.png"} />
            <h5>Members add nominations</h5>
          </div>
          <div className={styles.flexx}>
            <img width="50px" src={"/img/curation2.png"} />
            <h5>Members curate with PUB</h5>
          </div>
          <div className={styles.flexx}>
            <img width="50px" src={"/img/curation3.png"} />
            <h5>Aggregate signal builds proposal to the DAO</h5>
          </div>
          <div className={styles.flexx}>
            <img width="25px" src={"/img/curation4.png"} />
            <h5>Members vote to finalize</h5>
          </div>
        </div>
      </section>
      <section
        className={[styles.heroSectionContainer, styles.roadmap].join(" ")}
      >
        <div className={styles.heroContainer}>
          <h3>Roadmap</h3>
          <div className={styles.flexx}>
            <h5>End of January</h5>
            <div className={styles.box}>
              <h5>Congregation of Champions</h5>
            </div>
          </div>
          <div className={styles.flexx}>
            <h5>Begin February</h5>
            <div className={styles.box}>
              <h5>Strategize</h5>
            </div>
          </div>
          <div className={styles.flexx}>
            <h5>End of February</h5>
            <div className={styles.box}>
              <h5>Retroactive</h5>
            </div>
          </div>
          <div className={styles.flexx}>
            <h5>March</h5>
            <div className={styles.box}>
              <h5>Open Bazaar</h5>
            </div>
          </div>
        </div>
      </section>
      <section
        className={[styles.heroSectionContainer, styles.mechanisms].join(" ")}
      >
        <div className={styles.heroContainer}>
          <h3>Mechanisms</h3>
          <img width="600px" src={"/img/mechanisms.png"} />
        </div>
      </section>
    </>
  );
};

export default DetailsSection;
