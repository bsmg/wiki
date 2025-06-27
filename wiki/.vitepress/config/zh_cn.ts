import { defineConfigWithTheme } from 'vitepress'
import { BSMGThemeConfig } from './shared'

// https://vitepress.dev/reference/site-config
export const zh_cn = defineConfigWithTheme<BSMGThemeConfig>({
  title: 'BSMG Wiki',
  lang: 'zh_cn',
  description:
    '这是一个指南，介绍如何向节奏光剑添加模组，创建自定义内容，并与社区取得联系！',
  lastUpdated: true,

  themeConfig: {
    outlineTitle: '当前页面',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    bsmg: {
      external_links: '外部链接',
    },
    nav: [
      { text: '主页', link: './' },
      { text: '新手指南', link: './beginners-guide.md' },
      {
        text: 'BSMG Discord(英文社区)',
        link: 'https://discord.gg/beatsabermods',
      },
      { text: '联系我们(英文)', link: '/contact-us.md' },
    ],

    footer: {
      message:
        'Copyright © 2019-2025 BSMG Community LLC (Beat Saber Modding Group)',
      copyright: '依照CC BY-NC-SA 4.0进行许可',
    },
    notFound: {
      title: '找不到页面',
      quote:
        '功夫不负有心人，希望你最终能够找到答案。或许这个页面没有翻译，回英文看看？',
      linkText: '回到主页',
    },
    editLink: {
      pattern: 'https://github.com/bsmg/wiki/edit/master/wiki/:path',
      text: '在GitHub上编辑这个页面',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索',
          },
        },
      },
    },
  },
})
