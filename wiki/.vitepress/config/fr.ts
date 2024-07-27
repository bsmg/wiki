import { defineConfig } from 'vitepress'
import { sidebar } from './shared'

// https://vitepress.dev/reference/site-config
export const fr = defineConfig({
  title: 'Wiki BSMG',
  lang: 'fr',
  description:
    'Guides on how to mod Beat Saber, create custom content, and get involved in the community!',

  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/fr/' },
      { text: 'Guide du Débutant', link: '/fr/beginners-guide.md' },
      { text: 'Discord BSMG', link: 'https://discord.gg/beatsabermods' },
    ],

    footer: {
      message: 'Copyright © 2019-2024 BSMG Community LLC (Beat Saber Modding Group)',
      copyright: 'Licensed under CC BY-NC-SA 4.0',
    },

    editLink: {
      pattern: 'https://github.com/bsmg/wiki/edit/master/wiki/:path',
      text: 'Edit this page on GitHub',
    },

    sidebar: sidebar(),
  },
})
