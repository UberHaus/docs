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
          to: "#",
          position: "left",
          className: "navbar__twitter",
        },
        {
          to: "#",
          position: "left",
          className: "navbar__discord",
        },
        {
          to: "#",
          position: "left",
          className: "navbar__github",
        },
        {
          to: "#",
          position: "left",
          className: "navbar__substack",
        },
        {
          to: "#",
          position: "left",
          className: "navbar__telegram",
        },

        { to: "/manifesto", label: "Manifesto", position: "right" },
        {
          to: "/become-member-dao",
          label: "Become a Member DAO",
          position: "right",
        },
        { to: "/docs", label: "Docs", position: "right" },
        {
          to: "/launch-app",
          label: "Launch App ➔",
          position: "right",
          className: "navbar__launch__app",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/welcome",
              position: "left",
            },
            {
              label: "GitHub",
              href: "https://github.com/UberHaus/docs",
              position: "left",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/7K4HenWeJa",
              position: "right",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/nowdaoit",
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
