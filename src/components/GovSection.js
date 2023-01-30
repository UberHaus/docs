import * as React from "react";
import styles from "./GovSection.module.css";

const GovSection = () => {
  return (
    <section className={styles.govContainer}>
      <div className={styles.stack}>
        <h2
          style={{
            fontSize: "42px",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Overview
        </h2>
        <div className={styles.item1}>
          <div className={styles.item2}>
            <div className={styles.columnn}>
              <h2>
                Join
                <br />
                Public
                <br />
                Haus
              </h2>
              <img src="/img/PublicDoor.png" />
            </div>
            <div className={styles.columnn}>
              <div className={styles.box}>
                <h5>Sign the Manifesto</h5>
              </div>
              <div className={styles.box}>
                <h5>Stake HAUS</h5>
              </div>
              <div className={styles.box}>
                <div className={styles.token}>
                  <h5>PUB</h5>
                </div>
                <h5>
                  Get non-transferable PUB
                  <br />
                  <small>
                    <i>* Unstake Anytime</i>
                  </small>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div class={styles.item2}>
          <div className={styles.spacer}></div>
          <div className={styles.asideContainer}>
            <div className={[styles.aside, styles.aside1].join(" ")}>
              <div className={styles.item2}>
                <div className={styles.columnn}>
                  <h2>
                    Ascend
                    <br />
                    To
                    <br />
                    Champion
                  </h2>
                  <img src="/img/PublicAscend.png" />
                </div>
                <div className={styles.columnn}>
                  <div className={styles.box}>
                    <h5>Post your platform</h5>
                  </div>
                  <div className={styles.box}>
                    <h5>Get Verified by PublicHaus</h5>
                  </div>
                  <div className={styles.box}>
                    <h5>
                      <i>Gather</i> Delegation
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className={[styles.aside, styles.aside2].join(" ")}>
              <h5>Or Delegate to Champion</h5>
            </div>
          </div>
        </div>
        <div className={styles.item3}>
          <h2>
            Govern
            <br />
            DAOhaus
          </h2>
          <img
            width="240px"
            style={{ float: "right", marginBottom: "25px" }}
            src="/img/PublicFlywheel.png"
          />
          <img src="/img/PublicTable.png" />
        </div>
      </div>
    </section>
  );
};

export default GovSection;
