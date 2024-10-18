// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '1BLOCK.AI',
  tagline: 'An Unified Open Source Cloud-Native LLMOps Platform That Empowers Generative AI Applications Innovation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://1block.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '1BLOCK.AI', // Usually your GitHub org/user name.
  projectName: '1block.ai', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cn'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
        label: 'English'
      },
      cn: {
        label: '简体中文'
      }
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/oneblock-ai/1block.ai/tree/main/',
        },
        theme: {
          customCss: [
            './src/css/custom.scss',
          ]
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo/logo-vertical.png',
      navbar: {
        title: '1BLOCK.AI',
        hideOnScroll: false,
        style: 'dark',
        logo: {
          alt: '1BLOCK.AI Logo',
          src: 'img/logo/logo-white.png',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://llmos.1block.ai/docs',
            label: 'Docs',
            position: 'right',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/llmos-ai/llmos',
            label: 'Try LLMOS',
            className: 'button button-bordered margin-left--md',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'LLMOS Docs',
                href: 'https://llmos.1block.ai/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/llmos-ai/llmos/discussions',
              },
              {
                label: 'Issues',
                href: 'https://github.com/llmos-ai/llmos/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/llmos-ai/llmos',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 1Block.AI. Built with love 💙.`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-G76DM1XFSQ',
      },
    ],
    [
      'docusaurus-plugin-sass', {}
    ]
  ],
};

export default config;
