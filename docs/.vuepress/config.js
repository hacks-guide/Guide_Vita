const config = require("./configs");
const path = require("path");

module.exports = {
  locales: {
    '/': config.en_US.locales
  },

	plugins: [
		[
			"@vuepress/plugin-search", {
				locales: {
					"/": {placeholder: config.en_US.search}
				}
			}
		],
	],
  
  themeConfig: {
    repo: 'hacks-guide/Guide_Vita',
		docsBranch: "master",
		docsDir: "docs",
    selectLanguageText: '<i class="fas fa-globe"/>',
    adTagOne: 'waldo-tag-5340',
    adTagTwo: 'waldo-tag-5340',
    splashAd: [{
      id: 'div-gpt-ad-1644457402236-0',
      size: [970, 90]
    }],
    locales: {
      '/': config.en_US.themeConfig
    },
  },
  
  head: [
    [ 'link', { rel: 'apple-touch-icon', sizes: "180x180", href: '/assets/images/apple-touch-icon.png?v=PYEmwKvQAx' } ],
    [ 'link', { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/assets/images/favicon-16x16.png?v=PYEmwKvQAx' } ],
    [ 'link', { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/assets/images/favicon-32x32.png?v=PYEmwKvQAx' } ],
    [ 'link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/assets/images/android-chrome-192x192.png?v=PYEmwKvQAx' } ],
    [ 'link', { rel: 'icon', type: 'image/png', sizes: "194x194", href: '/assets/images/favicon-194x194.png?v=PYEmwKvQAx' } ],
    [ 'link', { rel: 'manifest', href: '/assets/images/manifest.json?v=PYEmwKvQAx' } ],
    [ 'link', { rel: 'mask-icon', color: '#2E3440', href: '/assets/images/safari-pinned-tab.svg?v=PYEmwKvQAx' } ],
    [ 'link', { rel: 'shortcut icon', href: '/assets/images/favicon.ico?v=PYEmwKvQAx' } ],
    [ 'meta', { name: 'apple-mobile-web-app-title', content: 'Guide' } ],
    [ 'meta', { name: 'application-name', content: 'Guide' } ],
    [ 'meta', { name: 'msapplication-TileColor', content: '#2E3440' } ],
    [ 'meta', { name: 'msapplication-TileImage', content: '/assets/images/mstile-144x144.png?v=PYEmwKvQAx' } ],
    [ 'meta', { name: 'msapplication-config', content: '/assets/images/browserconfig.xml?v=PYEmwKvQAx' } ],
    [ 'meta', { name: 'theme-color', content: '#2E3440' } ],
    [ 'link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' } ],
    [ 'script', { src: 'https://cdn.thisiswaldo.com/static/js/5303.js'} ],
    [ 'script', { src: 'https://www.googletagmanager.com/gtag/js?id=UA-152619365-1'} ],
		[ 'script', {}, 'function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-152619365-1");' ],
  ],

  theme: path.resolve(__dirname, './vuepress-theme'),
  
	templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
	templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
};