const config = {
  title: 'HTML és CSS Tananyag',
  tagline: 'Kezdő webfejlesztő tananyag',
  favicon: 'img/favicon.ico',

  // GitHub Pages beállítások
  url: 'https://eteszt.github.io',
  baseUrl: '/html-css-tananyag/',
  organizationName: 'eteszt', 
  projectName: 'html-css-tananyag',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Live Code blokkok beállítása
  themes: ['@docusaurus/theme-live-codeblock'],

  i18n: {
    defaultLocale: 'hu',
    locales: ['hu'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'HTML és CSS Tananyag',
      items: [
        {
          href: 'https://github.com/eteszt/html-css-tananyag',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} HTML és CSS Tananyag`,
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
  },
};

module.exports = config;