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
        <SocialLinkCard
          name='Twitter'
          icon={<TwitterIcon />}
          url='https://twitter.com'
        />
        <SocialLinkCard
          name='Discord'
          icon={<DiscordIcon />}
          url='https://discord.gg'
        />
        <SocialLinkCard
          name='GitHub'
          icon={<GitHubIcon />}
          url='https://github.com/UberHaus/docs'
        />
        <SocialLinkCard
          name='Substack'
          icon={<SubstackIcon />}
          url='https://github.com/UberHaus/docs'
        />
        <SocialLinkCard
          name='Telegram'
          icon={<TelegramIcon />}
          url='https://github.com/UberHaus/docs'
        />
      </div>
    </section>
  );
};

export default SocialLinksSection;
