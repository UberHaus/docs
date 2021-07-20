import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import IntroSection from "../components/IntroSection";
import CommunitySection from "../components/CommunitySection";
import MemberDAOSection from "../components/MemberDAOSection";
import SocialLinksSection from "../components/SocialLinksSection";
import HeroSection from "../components/HeroSection";

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description='A HAUS for your DAO.'>
      {/* <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/welcome")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header> */}
      <main>
        {/* <HeroSection /> */}
        {/* <IntroSection /> */}
        {/* <CommunitySection /> */}
        {/* <SocialLinksSection /> */}
        <MemberDAOSection />
      </main>
    </Layout>
  );
}
