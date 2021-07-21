/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "UberHaus",
  tagline: "Your #1 Guide to UberHaus DAO",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "UberHaus", // Usually your GitHub org/user name.
  projectName: "UberHaus", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: "https://daohaus.club/images/daohaus-main.jpg",
    metadatas: [
      { name: "og:type", content: "website" },
      { name: "og:description", content: "UberHaus" },
      { name: "og:title", content: "UberHaus" },
      { name: "og:site_name", content: "UberHaus" },
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
        alt: "UberHaus DAO Logo",
        src: "img/uberhaus-logo-extended-white.svg",
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
          to: "https://github.com/UberHaus/docs",
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
          label: "Become a Member DAO",
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
        alt: "UberHaus DAO Logo",
        src: "img/uberhaus-logo-extended-white.svg",
      },
      links: [
        {
          title: "UberHaus",
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
              label: "UberHaus Members",
              to: "docs/uberhaus-members",
              position: "right",
            },
            {
              label: "UberHaus Shares",
              to: "docs/uberhaus-shares",
              position: "right",
            },
            {
              label: "Community",
              to: "docs/community",
              position: "right",
            },
            {
              label: "Forum",
              to: "https://forum.daohaus.club/c/uberhaus/58",
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
              label: "Moloch V2",
              to: "docs/molochv2",
              position: "right",
            },
            {
              label: "Proposal Flow",
              to: "docs/proposal-flow",
              position: "right",
            },
            {
              label: "Proposal Type",
              to: "docs/proposal-type",
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
      copyright: `Copyright © ${new Date().getFullYear()} UberHaus, DAO`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/UberHaus/docs/blob/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
