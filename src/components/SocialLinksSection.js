import * as React from "react";
import SocialLinkCard from "./SocialLinkCard";
import {
  TwitterIcon,
  DiscordIcon,
  GitHubIcon,
  SubstackIcon,
  TelegramIcon,
} from "./SocialIcons";
import styles from "./SocialLinksSection.module.css";

const SocialLinksSection = () => {
  return (
    <section className={styles.socialLinksContainer}>
      <div className={styles.flexSocialLinks}>
        <SocialLinkCard name='Twitter' icon={<TwitterIcon />} />
        <SocialLinkCard name='Discord' icon={<DiscordIcon />} />
        <SocialLinkCard name='GitHub' icon={<GitHubIcon />} />
        <SocialLinkCard name='Substack' icon={<SubstackIcon />} />
        <SocialLinkCard name='Telegram' icon={<TelegramIcon />} />
      </div>
    </section>
  );
};

export default SocialLinksSection;
