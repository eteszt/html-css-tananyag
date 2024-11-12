const sidebars = {
  tutorialSidebar: [
    'bevezetes',
    {
      type: 'category',
      label: 'HTML',
      items: [
        'html-alapok',
        'html-elemek',
        "html-tablazatok-alapok",
        "html-links-images"
      ],
    },
    {
    type: 'category',
      label: 'CSS',
      items: [
        "css-basics",
        "css-properties",
        "css-box-model",
        "html-css-cooperation"
      ],
    },
    {
      type: 'category',
      label: 'Kvízek',
      items: [
        'kvizek/html-kviz',
        // később: 'kvizek/css-kviz',
        // később: 'kvizek/integracio-kviz',
      ],
    },
  ],
};

module.exports = sidebars;