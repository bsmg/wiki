/**
 * @param {string} title Sidebar Title
 * @param {string[]} routes Routes
 * @param {boolean} [collapsable] Collapsible Title
 * @returns {{}}
 */
function generateSidebar(title, routes, collapsable = false) {
  return [{
    title,
    collapsable,
    children: routes,
  }]
}

module.exports = {
  title: 'BSMG Wiki',

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],

  theme: 'yuu',
  themeConfig: {
    yuu: {
      defaultColorTheme: 'blue',
    },

    repo: 'beat-saber-modding-group/wiki',
    docsDir: 'wiki',
    editLinks: true,
    editLinkText: 'Help improve this page!',
    lastUpdated: 'Last Updated',

    displayAllHeaders: true,
    sidebar: {
      '/about/': generateSidebar('About', [
        '',
        'staff',
        'moderators',
        'modders',
        'supports',
        '3d-artists',
      ]),
      '/faq/': generateSidebar('FAQ', [
        '',
        'install-folder',
      ]),
      '/modding/': generateSidebar('Modding', [
        '',
        'intro',
        'extras',
        'linux',
      ]),
      '/models/': generateSidebar('3D Models', [
        '',
        'custom-sabers',
        'custom-avatars',
        'custom-platforms',
        'custom-notes',
      ]),
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Beginners Guide', link: '/beginners-guide.md' },
      { text: 'BSMG Discord', link: 'https://discord.gg/beatsabermods' },
    ],
  },
  plugins: [
    ['@vuepress/last-updated', {
      transformer: timestamp => {
        const dateformat = require('dateformat')
        return dateformat(timestamp, 'yyyy/mm/dd hh:MM:ss TT')
      },
    }],
    ['@vuepress/medium-zoom', {
      options: {
        margin: 8,
        background: '#21253073',
      },
    }],
    '@vuepress/nprogress',
    ['container', {
      type: 'feature',
      before: info => `<div class="feature"><h2>${info}</h2>`,
      after: '</div>',
    }],
    ['named-chunks', {
      pageChunkName: ({ key }) => `page${key.slice(1)}`,
      layoutChunkName: ({ componentName }) => `layout-${componentName}`,
    }],
    'seo',
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': '../',
      },
    },
  },
}
