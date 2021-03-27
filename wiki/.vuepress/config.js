const path = require('path')

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
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#2196f3' }],
  ],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'BSMG Wiki',
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'Wiki BSMG',
    },
    '/de/': {
      lang: 'de-DE',
      title: 'BSMG Wiki',
    },
  },

  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },

  theme: 'yuu',
  themeConfig: {
    yuu: {
      defaultColorTheme: 'blue',
    },

    repo: 'bsmg/wiki',
    docsDir: 'wiki',
    editLinks: true,

    displayAllHeaders: true,

    locales: {
      '/': {
        selectText: 'English',
        label: 'English',
        ariaLabel: 'English',
        editLinkText: 'Help improve this page!',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Beginners Guide', link: '/beginners-guide.md' },
          { text: 'BSMG Discord', link: 'https://discord.gg/beatsabermods' },
        ],
        sidebar: {
          '/about/': generateSidebar('About', [
            '',
            'staff',
            'moderators',
            'modders',
            'supports',
            'mapping-supports',
            '3d-artists',
          ]),
          '/faq/': generateSidebar('FAQ', [
            '',
            'install-folder',
          ]),
          '/modding/': generateSidebar('Modding', [
            '',
            'intro',
            'linux',
          ]),
          '/models/': generateSidebar('3D Models', [
            '',
            'custom-sabers',
            'custom-avatars',
            'custom-platforms',
            'custom-notes',
            'custom-walls',
          ]),
        },
      },
      '/fr/': {
        selectText: 'Français',
        label: 'Français',
        ariaLabel: 'Français',
        editLinkText: 'Aidez à améliorer cette page !',
        lastUpdated: 'Dernière mise à jour',
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Guide du Débutant', link: '/fr/beginners-guide.md' },
          { text: 'Discord BSMG', link: 'https://discord.gg/beatsabermods' },
        ],
        sidebar: {
          '/fr/about/': generateSidebar('À propos', [
            '',
            'staff',
            'moderators',
            'modders',
            'supports',
            'mapping-supports',
            '3d-artists',
          ]),
          '/fr/faq/': generateSidebar('FAQ', [
            '',
            'install-folder',
          ]),
          '/fr/modding/': generateSidebar('Modding', [
            '',
            'intro',
            'linux',
          ]),
          '/fr/models/': generateSidebar('Modèles 3D', [
            '',
            'custom-sabers',
            'custom-avatars',
            'custom-platforms',
            'custom-notes',
          ]),
        },
      },
      '/de/': {
        selectText: 'Deutsch',
        label: 'Deutsch',
        ariaLabel: 'Deutsch',
        editLinkText: 'Hilf uns die Seite zu verbessern!',
        lastUpdated: 'Zuletzt aktualisiert am',
        nav: [
          { text: 'Startseite', link: '/de/' },
          { text: 'Anfänger Guide', link: '/beginners-guide.md' },
          { text: 'BSMG Discord', link: 'https://discord.gg/beatsabermods' },
        ],
        sidebar: {
          '/de/about/': generateSidebar('About', [
            '',
            'staff',
            'moderators',
            'modders',
            'supports',
            'mapping-supports',
            '3d-artists',
          ]),
          '/de/faq/': generateSidebar('FAQ', [
            '',
            'install-folder',
          ]),
          '/de/modding/': generateSidebar('Modding', [
            '',
            'intro',
            'linux',
          ]),
          '/de/models/': generateSidebar('3D Models', [
            '',
            'custom-sabers',
            'custom-avatars',
            'custom-platforms',
            'custom-notes',
            'custom-walls',
          ]),
        },
      },
    },
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
    ['container', {
      type: 'align',
      before: align => `<div align="${align}">`,
      after: '</div>',
    }],
    ['named-chunks', {
      pageChunkName: ({ key }) => `page${key.slice(1)}`,
      layoutChunkName: ({ componentName }) => `layout-${componentName}`,
    }],
    ['sitemap', {
      hostname: 'https://bsmg.wiki/'
    }],
    ['seo', {
      customMeta: (add, context) => {
        const [_, { title }] = Object.entries(context.$site.locales).find(([key, value]) => key === context.$page._localePath)
        add('og:site_name', title)
      },
    }],
    'smooth-scroll',
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.resolve(__dirname, '../.assets/images'),
      },
    },
  },
}
