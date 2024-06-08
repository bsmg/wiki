import { defineConfig } from 'vitepress'
import { sidebar } from './shared'

// https://vitepress.dev/reference/site-config
export const nl = defineConfig({
  title: 'Wiki BSMG',
  lang: 'nl',
  description:
    'Guides on how to mod Beat Saber, create custom content, and get involved in the community!',

  themeConfig: {
    nav: [
      { text: 'Hoofdmenu', link: '/nl/' },
      { text: 'Gids voor beginners', link: '/nl/beginners-guide.md' },
      { text: 'BSMG Discord', link: 'https://discord.gg/beatsabermods' },
    ],

    footer: {
      message: 'Copyright © 2019-2024 Beat Saber Modding Group',
      copyright: 'Gelicenseerd onder CC BY-NC-SA 4.0',
    },

    editLink: {
      pattern: 'https://github.com/bsmg/wiki/edit/master/wiki/:path',
      text: 'Edit this page on GitHub',
    },

    sidebar: sidebar(),
  },
})
