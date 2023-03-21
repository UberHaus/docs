/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "PublicHAUS",
  tagline: "The governing framework of the DAOhaus ecosystem and protocol.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "PublicHAUS", // Usually your GitHub org/user name.
  projectName: "PublicHAUS", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: "https://daohaus.club/images/daohaus-main.jpg",
    metadatas: [
      { name: "og:type", content: "website" },
      { name: "og:description", content: "PublicHAUS" },
      { name: "og:title", content: "PublicHAUS" },
      { name: "og:site_name", content: "PublicHAUS" },
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
        alt: "PublicHAUS DAO Logo",
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
        alt: "PublicHAUS DAO Logo",
        src: "img/publichaus-logo-extended-white.svg",
      },
      links: [
        {
          title: "PublicHAUS",
          items: [
            {
              label: "Manifesto",
              to: "docs/philosophy-&-vision",
              position: "right",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PublicHAUS, DAO`,
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
