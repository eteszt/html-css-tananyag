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