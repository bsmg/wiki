import { env } from 'node:process'
import container from 'markdown-it-container'
import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

const IS_DEV = env.NODE_ENV === 'production'

const search = (): DefaultTheme.Config['search'] => {
  if (IS_DEV) return { provider: 'local' }

  return {
    provider: 'algolia',
    options: {
      appId: 'MDQBBYI18P',
      apiKey: '0f36f096b83770eae78115f2d88bd394',
      indexName: 'bsmg',
    },
  }
}

type Route =
  | readonly [name: string, path: string, routes?: Route[]]
  | readonly [name: string, routes: Route[]]

interface SidebarItem {
  name: string
  path: string
  routes: Route[]
}

const convert = ([text, link, routes]: Route): DefaultTheme.SidebarItem => {
  if (typeof link === 'string') {
    return {
      text,
      link,
      items: routes?.map(route => convert(route)),
    }
  }

  return {
    text,
    items: (link ?? routes)?.map(route => convert(route)),
  }
}

const sidebar = (...items: SidebarItem[]): DefaultTheme.SidebarMulti => {
  return Object.fromEntries(
    items.map(({ name, path, routes }) => [
      path,
      [
        {
          text: name,
          link: '.',
          items: routes?.map(route => convert(route)),
        },
      ],
    ]),
  )
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'BSMG Wiki',
  description:
    'Guides on how to mod Beat Saber, create custom content, and get involved in the community!',
  base: '/BSMGwiki/',
  lastUpdated: true,

  head: [['link', { rel: 'icon', href: '/icon.png' }]],

  locales: {
    root: {
      label: 'English',
      lang: 'en',

      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Beginners Guide', link: '/beginners-guide.md' },
          { text: 'BSMG Discord', link: 'https://discord.gg/beatsabermods' },
        ],
      },
    },
    fr: {
      label: 'Français',
      title: 'Wiki BSMG',

      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Guide du Débutant', link: '/fr/beginners-guide.md' },
          { text: 'Discord BSMG', link: 'https://discord.gg/beatsabermods' },
        ],
      },
    },
    de: {
      label: 'Deutsch',
      title: 'Wiki BSMG',

      themeConfig: {
        nav: [
          { text: 'Startseite', link: '/de/' },
          { text: 'Anfänger Guide', link: '/beginners-guide.md' },
          { text: 'BSMG Discord', link: 'https://discord.gg/beatsabermods' },
        ],
      },
    },
    nl: {
      label: 'Nederlands',
      title: 'Wiki BSMG',

      themeConfig: {
        nav: [
          { text: 'Hoofdmenu', link: '/nl/' },
          { text: 'Gids voor beginners', link: '/nl/beginners-guide.md' },
          { text: 'BSMG Discord', link: 'https://discord.gg/beatsabermods' },
        ],
      },
    },
    ja: {
      label: '日本語',
      title: 'Wiki BSMG',

      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: '初心者ガイド', link: '/ja/beginners-guide.md' },
          { text: 'BSMG Discord', link: 'https://discord.gg/beatsabermods' },
        ],
      },
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [2, 3],

    sidebar: sidebar(
      {
        name: 'About Us',
        path: '/about/',
        routes: [
          ['Staff', '/about/staff'],
          ['Moderators', '/about/moderators'],
          ['Modders', '/about/modders'],
          ['Supports', '/about/supports'],
          ['Mapping Supports', '/about/mapping-supports'],
          ['3D Artists', '/about/3d-artists'],
          ['Translators', '/about/translators'],
          ['Event Winners', '/about/event-winner'],
        ],
      },
      {
        name: 'Communities',
        path: '/communities/',
        routes: [
          ['Community Hub', '/communities/community-hub'],
          ['Regional Hub', '/communities/regional-hub'],
        ],
      },
      {
        name: 'Frequently Asked Questions',
        path: '/faq/',
        routes: [['Install Folder', '/faq/install-folder']],
      },
      {
        name: 'Mapping',
        path: '/mapping/',
        routes: [
          [
            'Audio',
            [
              ['Basic Audio Setup', '/mapping/basic-audio'],
              ['Advanced Audio Editing', '/mapping/advanced-audio'],
            ],
          ],
          [
            'Mapping',
            [
              ['Basic Mapping', '/mapping/basic-mapping'],
              ['Downmapping', '/mapping/downmapping'],
              ['Intermediate Mapping', '/mapping/intermediate-mapping'],
              ['Advanced Mapping', '/mapping/advanced-mapping'],
              ['Extended Mapping', '/mapping/extended-mapping'],
              ['Mapping Glossary', '/mapping/glossary'],
            ],
          ],
          [
            'Lighting',
            [
              ['Basic Lighting', '/mapping/basic-lighting'],
              ['Intermediate Lighting', '/mapping/intermediate-lighting'],
              ['Advanced Lighting', '/mapping/advanced-lighting'],
              ['Extended Lighting', '/mapping/extended-lighting'],
              ['Default Environment Colors', '/mapping/lighting-defaults'],
            ],
          ],
          [
            'Editing Resources',
            [
              ['Editor Keybinds', '/mapping/editor-keybinds'],
              ['MMA2 User Guide', '/mapping/mediocre-map-assistant'],
            ],
          ],
          [
            'Map Format',
            [
              ['Overview', '/mapping/map-format'],
              ['Info.dat', '/mapping/infodat-format'],
              ['v3 Difficulty File', '/mapping/difficulty-format-v3'],
              ['v2 Difficulty File', '/mapping/difficulty-format-v2'],
            ],
          ],
          ['Help Playtest Other Maps', '/mapping/how-to-testplay'],
          ['Coping with Mapping Anxiety', '/mapping/mapping-anxiety'],
          ['Mapping Resources Contributors', '/mapping/mapping-credits'],
        ],
      },
      {
        name: 'Modding',
        path: '/modding/',
        routes: [
          ['PC', '/modding/pc-mod-dev-intro'],
          [
            'Quest',
            '/modding/quest-mod-dev-intro',
            [
              ['Config', '/modding/quest-mod-dev-config'],
              ['Custom Types', '/modding/quest-mod-dev-custom-types'],
              ['UI', '/modding/quest-mod-dev-ui'],
            ],
          ],
        ],
      },
      {
        name: 'Models',
        path: '/models/',
        routes: [
          [
            'Installation Guides',
            [
              ['Custom Sabers', '/models/custom-sabers'],
              ['Custom Avatars', '/models/custom-avatars'],
              ['Custom Platforms', '/models/custom-platforms'],
              ['Custom Notes', '/models/custom-notes'],
              ['Custom Walls', '/models/custom-walls'],
            ],
          ],
          [
            'Model Creation Guides',
            [
              ['Custom Sabers Guide', '/models/sabers-guide'],
              ['Custom Avatars Guide', '/models/avatars-guide'],
              ['Custom Platforms Guide', '/models/platforms-guide'],
              ['Custom Notes Guide', '/models/notes-guide'],
              [
                'Baked Lighting Platforms Guide',
                '/models/baked-lighting-platforms-guide',
              ],
              [`Materials Guide`, `./materials-guide`],
            ],
          ],
          ['Shader Migration Guide', '/models/shader-migration'],
        ],
      },
      {
        name: 'Home Page',
        path: '/',
        routes: [
          ['Beginners Guide', '/beginners-guide'],
          [
            'PC Modding',
            [
              ['Using a Windows PC', '/pc-modding'],
              ['Using a Linux PC', '/linux-modding'],
              ['Common Problems', '/support/'],
            ],
          ],
          [
            'Quest Modding',
            [
              ['Overview', '/quest-modding'],
              [
                'Using a Windows PC or Mac',
                [
                  ['Modding With BMBF', '/quest-modding-bmbf'],
                  ['Modding With QAVS', '/quest-modding-qavs'],
                ],
              ],
              ['Modding With Android', '/support/modding-with-android'],
              ['Modding With a Raspberry Pi', '/raspi-modding'],
            ],
          ],
          [
            'Other Resources',
            [
              ['Grips and Tricks', '/grips-and-tricks'],
              ['Health and Safety', '/health-and-safety'],
              ['Ranking Guide', '/ranking-guide'],
            ],
          ],
        ],
      },
    ),

    footer: {
      message: 'Copyright © 2019-2023 Beat Saber Modding Group',
      copyright: 'Licensed under CC BY-NC-SA 4.0',
    },

    externalLinkIcon: true,
    socialLinks: [{ icon: 'github', link: 'https://github.com/bsmg/wiki' }],
    editLink: {
      pattern: 'https://github.com/bsmg/wiki/edit/master/wiki/:path',
    },

    search: search(),
  },

  sitemap: {
    hostname: 'https://undeceiver.github.io/BSMGwiki/',
  },

  markdown: {
    config: md => {
      md.use(container, 'center')
    },
  },
})
