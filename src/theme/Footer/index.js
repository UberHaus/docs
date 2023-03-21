/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// this component is swizzled -- code added by the PublicHaus team based on the original Facebook code

import React from "react";

import Link from "@docusaurus/Link";
import { useThemeConfig } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import SocialLinkCard from "../../components/SocialLinkCard";
import {
  FooterTwitterIcon,
  FooterDiscordIcon,
  FooterGitHubIcon,
  FooterSubstackIcon,
  FooterTelegramIcon,
} from "../../components/SocialIcons";

function FooterLink({ to, href, label, prependBaseUrlToHref, ...props }) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      {label}
    </Link>
  );
}

function Footer() {
  const { footer } = useThemeConfig();
  const { links = [], logo = {} } = footer || {};

  if (!footer) {
    return null;
  }

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContentContainer}>
        <div className={styles.logoSocialContainer}>
          <h4>PublicHAUS</h4>
          <div className={styles.socialLinksContainer}>
            <SocialLinkCard
              name="Twitter"
              icon={<FooterTwitterIcon />}
              url="https://twitter.com/nowdaoit"
            />
            <SocialLinkCard
              name="Discord"
              icon={<FooterDiscordIcon />}
              url="https://discord.gg/daohaus"
            />
            <SocialLinkCard
              name="GitHub"
              icon={<FooterGitHubIcon />}
              url="https://github.com/PublicHaus"
            />
            <SocialLinkCard
              name="Substack"
              icon={<FooterSubstackIcon />}
              url="https://daohaus.substack.com/"
            />
          </div>
        </div>
        {links && links.length > 0 && (
          <>
            {links.map((linkItem, i) => (
              <div key={i} className="col footer__col">
                {linkItem.title != null ? (
                  <h3 className={styles.footerNavTitle}>{linkItem.title}</h3>
                ) : null}
                {linkItem.items != null &&
                Array.isArray(linkItem.items) &&
                linkItem.items.length > 0 ? (
                  <ul className="footer__items">
                    {linkItem.items.map((item, key) =>
                      item.html ? (
                        <li
                          key={key}
                          className={styles.footerNavItem} // Developer provided the HTML, so assume it's safe.
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{
                            __html: item.html,
                          }}
                        />
                      ) : (
                        <li
                          key={item.href || item.to}
                          className={styles.footerNavItem}
                        >
                          <FooterLink {...item} />
                        </li>
                      )
                    )}
                  </ul>
                ) : null}
              </div>
            ))}
          </>
        )}
      </div>
      <div className={styles.copyrightContainer}>
        <span className={styles.copyrightText}>
          PublicHAUS {new Date().getFullYear()}
        </span>
        <span className={styles.copyrightText}></span>
      </div>
    </footer>
  );
}

export default Footer;
