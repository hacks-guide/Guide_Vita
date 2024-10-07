const themeConfig = {
  search: 'Search',
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

  nav: [
    {
      text: 'Guides',
      items: [
        { text: 'Adrenaline', link: '/adrenaline' },
        {
          text: 'SD2Vita',
          link: '/yamt'
        },
          {
          text: 'Uninstalling CFW',
          link: '/uninstalling-cfw'
        },
      ]
    },
    {
      text: 'Help',
      items: [
        { text: 'Troubleshooting', link: '/troubleshooting' },
        { text: 'FAQ', link: '/faq' }
      ]
    },
    {
      text: 'Site Info',
      items: [
        { text: 'Donations', link: '/donations' },
        { text: 'Credits', link: '/credits' },
        { text: 'Site Navigation', link: '/site-navigation' }
      ]
    },
  ],
    
  sidebar: {
    '/installing-henkaku': [
      {
        text: 'Guide',
        items: [
          { text: 'Get Started', link: '/get-started' },
          { text: 'Installing HENkaku', link: '/installing-henkaku' },
          { text: 'Installing Ensō (3.60)', link: '/installing-enso-(3.60)' },
          { text: 'Finalizing Setup (3.60)', link: '/finalizing-setup-(3.60)' }
        ],
      },
    ],
    '/installing-enso-(3.60)': [
      {
        text: 'Guide',
        items: [
          { text: 'Get Started', link: '/get-started' },
          { text: 'Installing HENkaku', link: '/installing-henkaku' },
          { text: 'Installing Ensō (3.60)', link: '/installing-enso-(3.60)' },
          { text: 'Finalizing Setup (3.60)', link: '/finalizing-setup-(3.60)' }
        ],
      },
    ],
    '/finalizing-setup-(3.60)': [
      {
        text: 'Guide',
        items: [
          { text: 'Get Started', link: '/get-started' },
          { text: 'Installing HENkaku', link: '/installing-henkaku' },
          { text: 'Installing Ensō (3.60)', link: '/installing-enso-(3.60)' },
          { text: 'Finalizing Setup (3.60)', link: '/finalizing-setup-(3.60)' }
        ],
      },
    ],
    '/updating-firmware-(3.74)': [
      {
        text: 'Guide',
        items: [
          { text: 'Get Started', link: '/get-started' },
          { text: 'Updating Firmware (3.74)', link: '/updating-firmware-(3.74)' },
          { text: 'Using HENlo', link: '/using-henlo' },
          { text: 'Installing Ensō', link: '/installing-enso' },
          { text: 'Finalizing Setup', link: '/finalizing-setup' }
        ],
      },
    ],
    '/': [
      {
        text: 'Guide',
        items: [
          { text: 'Get Started', link: '/get-started' },
          { text: 'Updating Firmware (3.74)', link: '/updating-firmware-(3.74)' },
          { text: 'Using HENlo', link: '/using-henlo' },
          { text: 'Installing Ensō', link: '/installing-enso' },
          { text: 'Finalizing Setup', link: '/finalizing-setup' }
        ],
      },
    ],
  },
};

export default {
  lang: 'en-US',
  label: "English",
  title: 'Vita Hacks Guide',
  description: 'A complete guide to PS Vita (TV) custom firmware, from stock to Ensō.',
  themeConfig: themeConfig
}
