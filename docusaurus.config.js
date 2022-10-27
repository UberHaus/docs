/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "HausDao",
  tagline: "Your #1 Guide to Haus DAO",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "HausDao", // Usually your GitHub org/user name.
  projectName: "HausDao", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: "https://daohaus.club/images/daohaus-main.jpg",
    metadatas: [
      { name: "og:type", content: "website" },
      { name: "og:description", content: "HausDAO" },
      { name: "og:title", content: "HausDAO" },
      { name: "og:site_name", content: "HausDao" },
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
        alt: "HausDao DAO Logo",
        src: "img/hausdao-logo-extended-white.svg",
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
          to: "https://github.com/HausDao/docs",
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
        {
          to: "/docs/become-a-member",
          label: "Become a Member",
          position: "right",
        },
        { to: "/docs/welcome/", label: "Docs", position: "right" },
        {
          to:
            "https://app.daohaus.club/dao/0x64/0x4bec8e49aa44bb520bd5e29d6358e22464b5eb68",
          label: "Launch App ➔",
          position: "right",
          className: "navbar__launch__app",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "HausDao DAO Logo",
        src: "img/hausdao-logo-extended-white.svg",
      },
      links: [
        {
          title: "HausDao",
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
              label: "HausDao Members",
              to: "docs/hausdao-members",
              position: "right",
            },
            {
              label: "HausDao Shares",
              to: "docs/hausdao-shares",
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
      copyright: `Copyright © ${new Date().getFullYear()} HausDao, DAO`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/HausDao/docs/blob/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
