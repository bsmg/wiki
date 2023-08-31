import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { env } from 'node:process'
import container from 'markdown-it-container'
import { EnumChangefreq, SitemapStream } from 'sitemap'
import type { SitemapItem } from 'sitemap'
import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

const IS_DEV = env.NODE_ENV === 'production'
const sitemapItems: SitemapItem[] = []

const transformLastUpdated = (
  lastUpdated: number | undefined,
): string | undefined => {
  if (lastUpdated === undefined) return undefined

  const date = new Date(lastUpdated)
  return date.toISOString()
}

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
  description: 'BSMG Wiki',
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
          ['Staff', './staff'],
          ['Moderators', './moderators'],
          ['Modders', './modders'],
          ['Supports', './supports'],
          ['Mapping Supports', './mapping-supports'],
          ['3D Artists', './3d-artists'],
          ['Translators', './translators'],
        ],
      },
      {
        name: 'Communities',
        path: '/communities/',
        routes: [
          ['Community Hub', './community-hub'],
          ['Regional Hub', './regional-hub'],
        ],
      },
      {
        name: 'Frequently Asked Questions',
        path: '/faq/',
        routes: [['Install Folder', './install-folder']],
      },
      {
        name: 'Mapping',
        path: '/mapping/',
        routes: [
          [
            'Audio',
            [
              ['Basic Audio Setup', './basic-audio'],
              ['Advanced Audio Editing', './advanced-audio'],
            ],
          ],
          [
            'Mapping',
            [
              ['Basic Mapping', './basic-mapping'],
              ['Downmapping', './downmapping'],
              ['Intermediate Mapping', './intermediate-mapping'],
              ['Extended Mapping', './extended-mapping'],
              ['Mapping Glossary', './glossary'],
            ],
          ],
          [
            'Lighting',
            [
              ['Basic Lighting', './basic-lighting'],
              ['Intermediate Lighting', './intermediate-lighting'],
              ['Advanced Lighting', './advanced-lighting'],
              ['Extended Lighting', './extended-lighting'],
              ['Default Environment Colors', './lighting-defaults'],
            ],
          ],
          [
            'Editing Resources',
            [
              ['Editor Keybinds', './editor-keybinds'],
              ['MMA2 User Guide', './mediocre-map-assistant'],
            ],
          ],
          [
            'Map Format',
            [
              ['Overview', './map-format'],
              ['Info.dat', './infodat-format'],
              ['v3 Difficulty File', './difficulty-format-v3'],
              ['v2 Difficulty File', './difficulty-format-v2'],
            ],
          ],
          ['Help Playtest Other Maps', './how-to-testplay'],
          ['Coping with Mapping Anxiety', './mapping-anxiety'],
          ['Mapping Resources Contributors', './mapping-credits'],
        ],
      },
      {
        name: 'Modding',
        path: '/modding/',
        routes: [
          ['PC', './pc-mod-dev-intro'],
          [
            'Quest',
            './quest-mod-dev-intro',
            [
              ['Config', './quest-mod-dev-config'],
              ['Custom Types', './quest-mod-dev-custom-types'],
              ['UI', './quest-mod-dev-ui'],
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
              ['Custom Sabers', './custom-sabers'],
              ['Custom Avatars', './custom-avatars'],
              ['Custom Platforms', './custom-platforms'],
              ['Custom Notes', './custom-notes'],
              ['Custom Walls', './custom-walls'],
            ],
          ],
          [
            'Model Creation Guides',
            [
              ['Custom Sabers Guide', './sabers-guide'],
              ['Custom Avatars Guide', './avatars-guide'],
              ['Custom Platforms Guide', './platforms-guide'],
              ['Custom Notes Guide', './notes-guide'],
              [
                'Baked Lighting Platforms Guide',
                './baked-lighting-platforms-guide',
              ],
            ],
          ],
          ['Shader Migration Guide', './shader-migration'],
        ],
      },
      {
        name: 'Quest Modding',
        path: '/',
        routes: [
          ['Overview', '/quest-modding'],
          ['Using a Windows PC or Mac',
        [
          ['Modding With BMBF', '/quest-modding-bmbf'],
          ['Modding With QAVS', '/quest-modding-qavs'],
        ]],
        ['Modding With Android', '/support/modding-with-android'],
        ['Modding With a Raspberry Pi', '/raspi-modding'],
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

  markdown: {
    config: md => {
      md.use(container, 'center')
    },
  },

  transformHtml(_, id, { pageData }) {
    if (/[\\/]404\.html$/.test(id)) return

    const url = pageData.relativePath
      .replace(/\/index\.md$/, '/')
      .replace(/\.md$/, '.html')

    const item: SitemapItem = {
      url,
      changefreq: EnumChangefreq.DAILY,
      lastmod: transformLastUpdated(pageData.lastUpdated),

      img: [],
      video: [],
      links: [],
    }

    sitemapItems.push(item)
  },

  async buildEnd({ outDir }) {
    const sitemap = new SitemapStream({ hostname: 'https://bsmg.wiki/' })

    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)

    sitemapItems.forEach(item => sitemap.write(item))
    sitemap.end()

    await new Promise(r => writeStream.on('finish', r))
  },
})
