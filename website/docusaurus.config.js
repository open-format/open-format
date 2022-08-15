// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const EDIT_LINK = "https://github.com/simpleweb/open-format/edit/main/website";
const GITHUB_LINK = "https://github.com/simpleweb/open-format";
const TWITTER_LINK = "https://twitter.com/simpleweb";
const DISCORD_LINK = "https://discord.gg/8WV52tVqbZ";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Open Format",
  tagline: "Dinosaurs are cool",
  url: "https://openformat.simpleweb.co.uk/docs",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "simpleweb", // Usually your GitHub org/user name.
  projectName: "open-format", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: EDIT_LINK,
          breadcrumbs: false,
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }]
          ]
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true
        }
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false
      },
      navbar: {
        hideOnScroll: true,
        title: "Open Format",
        logo: {
          alt: "Open Format Logo",
          src: "img/logo.svg"
        },
        items: [
          {
            label: "Docs",
            type: "doc",
            docId: "introduction",
            position: "left"
          },
          {
            label: "API",
            type: "doc",
            docId: "api",
            position: "left"
          },
          ...(process.env.NODE_ENV === "development"
            ? [
                {
                  label: "Styleguide",
                  type: "doc",
                  docId: "styleguide",
                  position: "left"
                }
              ]
            : []),
          {
            href: GITHUB_LINK,
            className: "navbar-item-github",
            position: "right"
          },
          {
            href: DISCORD_LINK,
            className: "navbar-item-discord",
            position: "right"
          },
          {
            href: TWITTER_LINK,
            className: "navbar-item-twitter",
            position: "right"
          }
        ]
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Simpleweb`
      },
      prism: {
        theme: require("prism-react-renderer/themes/dracula"),
        darkTheme: require("prism-react-renderer/themes/dracula")
      }
    })
};

module.exports = config;
