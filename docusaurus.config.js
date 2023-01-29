/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "PublicHaus",
  tagline: "Your #1 Guide to PublicHaus",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "PublicHaus", // Usually your GitHub org/user name.
  projectName: "PublicHaus", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: "https://daohaus.club/images/daohaus-main.jpg",
    metadatas: [
      { name: "og:type", content: "website" },
      { name: "og:description", content: "PublicHaus" },
      { name: "og:title", content: "PublicHaus" },
      { name: "og:site_name", content: "PublicHaus" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@nowdaoit" },
      { name: "twitter:title", content: "DAOhaus" },
      {
        name: "twitter:description",
        content: "DAOhaus is a no code platform for Moloch DAOs.",
      },
      {
        name: "twitter:image",
        content: "https://daohaus.club/images/daohaus-main.jpg",
      },
    ],
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "PublicHaus DAO Logo",
        src: "img/publichaus-logo-extended-white.svg",
      },
      items: [
        {
          to: "https://twitter.com/nowdaoit",
          position: "left",
          className: "navbar__twitter",
        },
        {
          to: "https://discord.gg/daohaus",
          position: "left",
          className: "navbar__discord",
        },
        {
          to: "https://github.com/PublicHaus/docs",
          position: "left",
          className: "navbar__github",
        },
        {
          to: "https://daohaus.substack.com/",
          position: "left",
          className: "navbar__substack",
        },
        {
          to: "#",
          position: "left",
          className: "navbar__telegram",
        },

        {
          to: "/docs/philosophy-&-vision",
          label: "Manifesto",
          position: "right",
        },
        { to: "/docs/welcome/", label: "Docs", position: "right" },
        {
          to: "https://join.daohaus.fun",
          label: "Join ➔",
          position: "right",
          className: "navbar__launch__app",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "PublicHaus DAO Logo",
        src: "img/publichaus-logo-extended-white.svg",
      },
      links: [
        {
          title: "PublicHaus",
          items: [
            {
              label: "Manifesto",
              to: "docs/philosophy-&-vision",
              position: "right",
            },
            {
              label: "Become a Member",
              to: "docs/become-a-member",
              position: "right",
            },
            {
              label: "PublicHaus Members",
              to: "docs/publichaus-members",
              position: "right",
            },
            {
              label: "PublicHaus Shares",
              to: "docs/publichaus-shares",
              position: "right",
            },
            {
              label: "Community",
              to: "docs/community",
              position: "right",
            },
            {
              label: "Forum",
              to: "https://forum.daohaus.club/",
              position: "right",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "Governance Mining",
              to: "docs/governance-mining",
              position: "right",
            },
            {
              label: "Moloch V3",
              to: "docs/molochv3",
              position: "right",
            },
            {
              label: "Onboarding Flow",
              to: "docs/onboarding-flow",
              position: "right",
            },
            {
              label: "Proposal Flow",
              to: "docs/proposal-flow",
              position: "right",
            },
            {
              label: "Proposal Type",
              to: "docs/proposal-types",
              position: "right",
            },
            {
              label: "Dao Roles",
              to: "docs/dao-roles",
              position: "right",
            },
            {
              label: "Ratification Type",
              to: "docs/ratification-types",
              position: "right",
            },
            {
              label: "Roadmap",
              to: "docs/roadmap",
              position: "right",
            },
            {
              label: "Addresses And Link",
              to: "docs/addresses-links",
              position: "right",
            },
            {
              label: "Ratified Policies",
              to: "docs/ratified-policies",
              position: "right",
            },
            {
              label: "xDAI Setup",
              to: "docs/xdai-setup",
              position: "right",
            },
            {
              label: "Grants",
              to: "docs/grants",
              position: "right",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PublicHaus, DAO`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/PublicHaus/docs/blob/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
