import { defineConfig } from 'vitepress'
import { sidebar } from './shared'

// https://vitepress.dev/reference/site-config
export const de = defineConfig({
  title: 'Wiki BSMG',
  lang: 'de',
  description:
    'Guides on how to mod Beat Saber, create custom content, and get involved in the community!',

  themeConfig: {
    nav: [
      { text: 'Startseite', link: '/de/' },
      { text: 'Anfänger Guide', link: '/de/beginners-guide.md' },
      { text: 'BSMG Discord', link: 'https://discord.gg/beatsabermods' },
    ],

    footer: {
      message: 'Copyright © 2019-2024 Beat Saber Modding Group',
      copyright: 'Lizenziert unter CC BY-NC-SA 4.0',
    },

    editLink: {
      pattern: 'https://github.com/bsmg/wiki/edit/master/wiki/:path',
      text: 'Edit this page on GitHub',
    },

    sidebar: sidebar(),
  },
})
