import { defineConfig } from 'vitepress'
import { sidebar } from './shared'

// https://vitepress.dev/reference/site-config
export const ja = defineConfig({
  title: 'Wiki BSMG',
  lang: 'ja',
  description:
    'Guides on how to mod Beat Saber, create custom content, and get involved in the community!',

  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/ja/' },
      { text: '初心者ガイド', link: '/ja/beginners-guide.md' },
      { text: 'BSMG Discord', link: 'https://discord.gg/beatsabermods' },
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
