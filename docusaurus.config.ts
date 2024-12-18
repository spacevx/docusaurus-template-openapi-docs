// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "BTS API",
  tagline: "Documentation de l'API fait pour mon BTS",
  url: "https://spacevx.github.io",
  baseUrl: "/docusaurus-template-openapi-docs/",
  organizationName: 'spacevx', // nom d'utilisateur GitHub
  projectName: 'docusaurus-template-openapi-docs', // nom du repository
  deploymentBranch: 'gh-pages', // branche où sera déployé le site
  trailingSlash: false,
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  presets: [
    [
      "classic",
      {
        docs: {
          // routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.ts"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          onInlineAuthors: "ignore",
          onUntruncatedBlogPosts: "ignore",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "BTS API Documenation",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Tutorial",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            label: "BTS API",
            position: "left",
            to: "/docs/category/bts-api",
          },
          {
            href: "https://github.com/spacevx/bts_api",
            label: "GitHub",
            position: "right",
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
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              // {
              //   label: "Stack Overflow",
              //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
              // },
              // {
              //   label: "Discord",
              //   href: "https://discordapp.com/invite/docusaurus",
              // },
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/docusaurus",
              // },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/spacevx/bts_api",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BTS API by Ahcene Zidahnal, Inc. Built with Docusaurus.`,
      },
      prism: {
        prism: {
          additionalLanguages: [
            // "ruby",
            // "csharp",
            // "php",
            // "java",
            // "powershell",
            // "json",
            // "bash",
          ],
        },
        // languageTabs: [
        //   {
        //     highlight: "python",
        //     language: "python",
        //     logoClass: "python",
        //   },
        //   {
        //     highlight: "bash",
        //     language: "curl",
        //     logoClass: "bash",
        //   },
        //   {
        //     highlight: "csharp",
        //     language: "csharp",
        //     logoClass: "csharp",
        //   },
        //   {
        //     highlight: "go",
        //     language: "go",
        //     logoClass: "go",
        //   },
        //   {
        //     highlight: "javascript",
        //     language: "nodejs",
        //     logoClass: "nodejs",
        //   },
        //   {
        //     highlight: "ruby",
        //     language: "ruby",
        //     logoClass: "ruby",
        //   },
        //   {
        //     highlight: "php",
        //     language: "php",
        //     logoClass: "php",
        //   },
        //   {
        //     highlight: "java",
        //     language: "java",
        //     logoClass: "java",
        //     variant: "unirest",
        //   },
        //   {
        //     highlight: "powershell",
        //     language: "powershell",
        //     logoClass: "powershell",
        //   },
        // ],
      },
    } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          petstore: {
            specPath: "docs/flotte/petstore.yaml",
            outputDir: "docs/api",
            downloadUrl:
              "https://raw.githubusercontent.com/spacevx/docusaurus-template-openapi-docs/refs/heads/main/data.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

export default async function createConfig() {
  return config;
}
