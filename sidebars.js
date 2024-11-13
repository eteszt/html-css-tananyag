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
        'kvizek/css-kviz',
        'kvizek/html-css-integration-kviz',
      ],
    },
    {
      type: 'category',
      label: 'Érettségi feladatok',
      items: [
        'feladatok/erettsegi-iskolacsalogato'
      ],
    },
  ],
};

module.exports = sidebars;