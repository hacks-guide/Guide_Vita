module.exports = {
  search: 'Search',
  
  locales: {
    lang: 'en-US',
    title: 'Vita Guide',
    description: 'A complete guide to PS Vita (TV) custom firmware, from stock to Ensō.'
  },
  
  themeConfig: {
  	selectLanguageName: "English",

  	backToHome: "Take me home",
  	contributorsText: "Contributors",
  	editLinkText: "Edit this page",
  	lastUpdatedText: "Last Updated",
  	openInNewWindow: "Open in new window",
  	selectLanguageAriaLabel: "Select language",
  	toggleDarkMode: "Toggle dark mode",
  	toggleSidebar: "Toggle sidebar",
  	discordNoticeText: "For support in English, ask for help at [HENkaku on Discord](https://discord.gg/m7MwpKA).",
      
    navbar: [
      {
        text: 'Guides',
        children: [
          'adrenaline',
          {
            text: 'SD2Vita',
            link: 'yamt'
          },
           {
            text: 'Uninstalling CFW',
            link: 'uninstalling-cfw.md'
          },
        ]
      },
      {
        text: 'Help',
        children: [
          'troubleshooting',
          'faq',
          {
            text: 'Discord',
            link: 'https://discord.gg/m7MwpKA'
          },
        ]
      },
      {
        text: 'Site Info',
        children: [
          'donations',
          'credits',
          'site-navigation'
        ]
      },
    ],
      
    sidebar: {
      '/': [
        {
          text: 'Guide',
          children: [
            'index.html',
            'get-started',
            'updating-firmware-(3.74)',
            'installing-h-encore',
             children: [
             'uninstalling-cfw.md',
              ],
            'installing-enso',
            'finalizing-setup'
          ],
        },
      ],
      
      '/installing-henkaku': [
        {
          text: 'Guide',
          children: [
            'index.html',
            'get-started',
            'installing-henkaku',
            'installing-enso-(3.60)',
            'finalizing-setup-(3.60)'
          ],
        },
      ],
    },
  }
};
