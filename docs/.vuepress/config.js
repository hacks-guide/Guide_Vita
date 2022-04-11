const config = require("./configs");
const path = require("path");

const adArr = [
  { slot: '/22046652915/vita-0', size: [[728, 90], [320, 50]], id: 'div-gpt-ad-1649073007284-0' },
  { slot: '/22046652915/vita-1', size: [[728, 90], [320, 50]], id: 'div-gpt-ad-1649073038121-0' }
]

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
		[
			'@vuepress/register-components',
			{
				componentsDir: path.resolve(__dirname, './components')
			}
		],
	],
  
  themeConfig: {
    repo: 'hacks-guide/Guide_Vita',
		docsBranch: "master",
		docsDir: "docs",
    selectLanguageText: '<i class="fas fa-globe"/>',
    adArr: adArr,
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
    [ 'script', { src: 'https://cdn.thisiswaldo.com/static/js/5303.js' } ],
    [ 'script', { src: 'https://www.googletagmanager.com/gtag/js?id=UA-152619365-1'} ],
		[ 'script', {}, 'function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-152619365-1");' ],
    require('./plugins/createAdScript/lib/')(adArr)
  ],

  theme: path.resolve(__dirname, './vuepress-theme'),
  
	templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
	templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
};