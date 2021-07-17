import * as React from "react";
import styles from "./SocialLinkCard.module.css";

const SocialLinkCard = ({ name, icon }) => {
  return (
    <div className={styles.socialLinkCard}>
      {icon}
      <span className={styles.socialLinkName}>{name}</span>
    </div>
  );
};

export default SocialLinkCard;
