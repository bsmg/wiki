import { resolve } from 'node:path'
import { env } from 'node:process'
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

interface SidebarItem {
  name: string
  path: string
  routes: readonly [name: string, path: string][]
}

// TODO: Use
const sidebar = (
  ...items: SidebarItem[]
): Required<DefaultTheme.Config['sidebar']> => {
  return Object.fromEntries(
    items.map(({ name, path, routes }) => [
      path,
      [
        {
          text: name,
          link: '.',
          items: routes.map(([text, link]) => ({ text, link })),
        },
      ],
    ]),
  )
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'BSMG Wiki',
  description: 'BSMG Wiki',

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

        outline: [2, 3],

        // sidebar: sidebar(
        //   {
        //     name: 'About Us',
        //     path: '/about/',
        //     routes: [
        //       ['Staff', './staff'],
        //       ['Moderators', './moderators'],
        //       ['Modders', './modders'],
        //       ['Supports', './supports'],
        //       ['Mapping Supports', './mapping-supports'],
        //       ['3D Artists', './3d-artists'],
        //       ['Translators', './translators'],
        //     ],
        //   },
        //   {
        //     name: 'Frequently Asked Questions',
        //     path: '/faq/',
        //     routes: [['Install Folder', './install-folder']],
        //   },
        //   {
        //     name: 'Modding',
        //     path: '/modding/',
        //     routes: [
        //       ['.', './intro'],
        //       ['Linux', './linux'],
        //     ],
        //   },
        //   {
        //     name: 'Modding',
        //     path: '/modding/',
        //     routes: [
        //       ['', './'],
        //       ['', './'],
        //       ['', './'],
        //       ['', './'],
        //       ['', './'],
        //     ],
        //   },
        // ),
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
    footer: {
      message: 'Copyright © 2019-2023 Beat Saber Modding Group',
      copyright: 'Licensed under CC BY-NC-SA 4.0',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/bsmg/wiki' }],
    editLink: {
      pattern: 'https://github.com/bsmg/wiki/edit/master/wiki/:path',
    },

    search: search(),
  },

  vite: {
    resolve: {
      alias: {
        '@images': resolve(__dirname, '/.assets/images'),
      },
    },
  },
})
