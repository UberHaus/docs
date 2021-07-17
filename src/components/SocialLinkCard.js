import * as React from "react";
import styles from "./SocialLinkCard.module.css";

const SocialLinkCard = ({ name, icon, url }) => {
  return (
    <div className={styles.socialLinkCard}>
      <a href={url} className={styles.socialLinkAnchor} target='_blank'>
        {icon}
        <span className={styles.socialLinkName}>{name}</span>
      </a>
    </div>
  );
};

export default SocialLinkCard;
