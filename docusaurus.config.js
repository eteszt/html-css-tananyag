const config = {
  title: 'HTML és CSS Tananyag',
  tagline: 'Kezdő webfejlesztő tananyag',
  favicon: 'img/favicon.ico',

  url: 'https://eteszt.github.io',
  baseUrl: '/html-css-tananyag/',
  organizationName: 'eteszt', 
  projectName: 'html-css-tananyag',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Csak a live-codeblock marad itt
  themes: [
    '@docusaurus/theme-live-codeblock'
  ],

  i18n: {
    defaultLocale: 'hu',
    locales: ['hu'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    // Itt bekapcsoljuk az Algoliát
    algolia: {
      // A DocSearch fog adni egy appId-t és API kulcsot
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'html-css-tananyag'
    },

    navbar: {
      title: 'HTML és CSS Tananyag',
      items: [
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/eteszt/html-css-tananyag',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright ©TiSoft ${new Date().getFullYear()} HTML és CSS Tananyag`,
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
  },
};

module.exports = config;