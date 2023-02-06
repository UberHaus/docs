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
              label: "Community",
              to: "docs/community",
              position: "right",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "Becoming a Citizen",
              to: "docs/becoming-a-citizen",
              position: "right",
            },
            {
              label: "Ascending to Champion Status",
              to: "docs/ascending-to-champion",
              position: "right",
            },
            {
              label: "Sponsoring a Champion",
              to: "docs/sponsoring-a-champion",
              position: "right",
            },
            {
              label: "Signaling Objectives",
              to: "docs/signaling-objectives",
              position: "right",
            },
            {
              label: "Giving and Receiving Rewards",
              to: "docs/giving-receiving-rewards",
              position: "right",
            },
            {
              label: "Receiving Rewards",
              to: "docs/receiving-rewards",
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
              label: "Champions",
              to: "docs/champions",
              position: "right",
            },
            {
              label: "Populus",
              to: "docs/populus",
              position: "right",
            },
            {
              label: "Haus",
              to: "docs/haus",
              position: "right",
            },

            {
              label: "Strategic Signaling",
              to: "docs/strategic-signaling",
              position: "right",
            },
            {
              label: "Tactical Execution",
              to: "docs/tactical-execution",
              position: "right",
            },
            {
              label: "Meta Governance",
              to: "docs/meta-governance",
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
