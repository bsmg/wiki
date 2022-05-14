import { viteBundler } from '@vuepress/bundler-vite'
import { containerPlugin } from '@vuepress/plugin-container'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchPlugin } from '@vuepress/plugin-search'
import { path } from '@vuepress/utils'
import { resolve } from 'path'
import { defaultTheme, defineUserConfig, type SidebarConfigArray } from 'vuepress'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'

const isProd = process.env.NODE_ENV === 'production'

const generateSidebar: (
  link: string,
  title: string,
  routes: string[],
  collapsible?: boolean
) => SidebarConfigArray = (link, title, routes, collapsible = false) => [{
  text: title,
  link,
  collapsible,
  children: [
    link,
    ...routes.map(r => `${link}${r}.md`),
  ],
}]

export default defineUserConfig({
  title: 'BSMG Wiki',

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
    '/nl/': {
      lang: 'nl-NL',
      title: 'BSMG Wiki',
    },
    '/ja/': {
      lang: 'ja-JP',
      title: 'BSMG Wiki',
    },
  },

  theme: defaultTheme({
    repo: 'bsmg/wiki',
    docsDir: 'wiki',
    docsBranch: 'master',
    editLink: true,
    contributors: false,

    locales: {
      '/': {
        selectLanguageText: '🌐 English',
        selectLanguageName: 'English',
        selectLanguageAriaLabel: 'Languages',
        editLinkText: 'Help improve this page!',
        lastUpdatedText: 'Last Updated',
        navbar: [
          { text: 'Home', link: '/' },
          { text: 'Beginners Guide', link: '/beginners-guide.md' },
          { text: 'BSMG Discord', link: 'https://discord.gg/beatsabermods' },
        ],
        sidebar: {
          '/about/': generateSidebar('/about/', 'About', [
            'staff',
            'moderators',
            'modders',
            'supports',
            'mapping-supports',
            '3d-artists',
            'translators',
          ]),
          '/faq/': generateSidebar('/faq/', 'FAQ', [
            'install-folder',
          ]),
          '/modding/': generateSidebar('/modding/', 'Modding', [
            'intro',
            'linux',
          ]),
          '/models/': generateSidebar('/models/', '3D Models', [
            'custom-sabers',
            'custom-avatars',
            'custom-platforms',
            'custom-notes',
            'custom-walls',
          ]),
        },
      },
      '/fr/': {
        selectLanguageText: '🌐 Français',
        selectLanguageName: 'Français',
        editLinkText: 'Aidez à améliorer cette page !',
        lastUpdatedText: 'Dernière mise à jour',
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Guide du Débutant', link: '/fr/beginners-guide.md' },
          { text: 'Discord BSMG', link: 'https://discord.gg/beatsabermods' },
        ],
        sidebar: {
          '/fr/about/': generateSidebar('/fr/about/', 'À propos', [
            'staff',
            'moderators',
            'modders',
            'supports',
            'mapping-supports',
            '3d-artists',
            'translators',
          ]),
          '/fr/faq/': generateSidebar('/fr/faq/', 'FAQ', [
            'install-folder',
          ]),
          '/fr/modding/': generateSidebar('/fr/modding/', 'Modding', [
            'intro',
            'linux',
          ]),
          '/fr/models/': generateSidebar('/fr/models/', 'Modèles 3D', [
            'custom-sabers',
            'custom-avatars',
            'custom-platforms',
            'custom-notes',
          ]),
        },
      },
      '/de/': {
        selectLanguageText: '🌐 Deutsch',
        selectLanguageName: 'Deutsch',
        editLinkText: 'Hilf uns die Seite zu verbessern!',
        lastUpdatedText: 'Zuletzt aktualisiert am',
        nav: [
          { text: 'Startseite', link: '/de/' },
          { text: 'Anfänger Guide', link: '/beginners-guide.md' },
          { text: 'BSMG Discord', link: 'https://discord.gg/beatsabermods' },
        ],
        sidebar: {
          '/de/about/': generateSidebar('/de/about/', 'Über uns', [
            'staff',
            'moderators',
            'modders',
            'supports',
            'mapping-supports',
            '3d-artists',
            'translators',
          ]),
          '/de/faq/': generateSidebar('/de/faq/', 'FAQ', [
            'install-folder',
          ]),
          '/de/modding/': generateSidebar('/de/modding/', 'Modding', [
            'intro',
            'linux',
          ]),
          '/de/models/': generateSidebar('/de/models/', '3D Modelle', [
            'custom-sabers',
            'custom-avatars',
            'custom-platforms',
            'custom-notes',
            'custom-walls',
          ]),
        },
      },
      '/nl/': {
        selectLanguageText: '🌐 Nederlands',
        selectLanguageName: 'Nederlands',
        editLinkText: 'Help deze pagina te verbeteren!',
        lastUpdatedText: 'Laatste keer bijgewerkt',
        nav: [
          { text: 'Hoofdmenu', link: '/nl/' },
          { text: 'Gids voor beginners', link: '/nl/beginners-guide.md' },
          { text: 'BSMG Discord', link: 'https://discord.gg/beatsabermods' },
        ],
        sidebar: {
          '/nl/about/': generateSidebar('/nl/about/', 'Over ons', [
            'staff',
            'moderators',
            'modders',
            'supports',
            'mapping-supports',
            '3d-artists',
            'translators',
          ]),
          '/nl/faq/': generateSidebar('/nl/faq/', 'Veel Gestelde Vragen', [
            'install-folder',
          ]),
          '/nl/modding/': generateSidebar('/nl/modding/', 'Modding', [
            'intro',
            'linux',
          ]),
          '/nl/models/': generateSidebar('/nl/models/', '3D modellen', [
            'custom-sabers',
            'custom-avatars',
            'custom-platforms',
            'custom-notes',
            'custom-walls',
          ]),
        },
      },
      '/ja/': {
        selectLanguageText: '🌐 日本語',
        selectLanguageName: '日本語',
        editLinkText: '言語このページの改善にご協力ください!',
        lastUpdatedText: '最終更新日',
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: '初心者ガイド', link: '/ja/beginners-guide.md' },
          { text: 'BSMG Discord', link: 'https://discord.gg/beatsabermods' },
        ],
        sidebar: {
          '/ja/about/': generateSidebar('/ja/about/', '私たちについて', [
            'staff',
            'moderators',
            'modders',
            'supports',
            'mapping-supports',
            '3d-artists',
            'translators',
          ]),
          '/ja/faq/': generateSidebar('/ja/faq/', 'よくある質問', [
            'install-folder',
          ]),
          '/ja/modding/': generateSidebar('/ja/modding/', 'Mod作成ガイド', [
            'intro',
            'linux',
          ]),
          '/ja/models/': generateSidebar('/ja/models/', '3Dモデル', [
            'custom-sabers',
            'custom-avatars',
            'custom-platforms',
            'custom-notes',
          ]),
        },
      },
    },
  }),

  plugins: [
    // TODO: SEO, Smooth Scroll
    sitemapPlugin({
      hostname: 'https://bsmg.wiki/',
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, 'components')
    }),
    mediumZoomPlugin({
      zoomOptions: {
        margin: 16,
      },
    }),
    containerPlugin({
      type: 'feature',
      before: info => `<div class="feature"><h2>${info}</h2>`,
      after: () => '</div>',
    }),
    containerPlugin({
      type: 'align',
      before: align => `<div align="${align}">`,
      after: () => '</div>',
    }),

    isProd
      ? docsearchPlugin({
        appId: 'MDQBBYI18P',
        apiKey: '0f36f096b83770eae78115f2d88bd394',
        indexName: 'bsmg',
      })
      : searchPlugin({

      })
  ],

  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          '@images': resolve(__dirname, '../.assets/images'),
        }
      },
    },
  }),
})
