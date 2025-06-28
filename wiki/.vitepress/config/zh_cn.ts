import { defineConfigWithTheme } from 'vitepress'
import { BSMGThemeConfig, transformPageDataForLocalize } from './shared'
import { sidebar } from './shared'

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
      original_page_updated: '这篇文章可能存在过时信息，原文更新于',
      to_original_page: '点击跳转原文',
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
    sidebar: sidebar(
      {
        name: '关于我们（英文）',
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
        name: '社区（英文）',
        path: '/communities/',
        routes: [
          ['Community Hub', '/communities/community-hub'],
          ['Regional Hub', '/communities/regional-hub'],
        ],
      },
      {
        name: '常见问题（英文）',
        path: '/faq/',
        routes: [['Install Folder', '/faq/install-folder']],
      },
      {
        name: '谱面（英文）',
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
              ['Info', '/mapping/map-format/info'],
              ['Audio', '/mapping/map-format/audio'],
              ['Beatmap', '/mapping/map-format/beatmap'],
              ['Lightshow', '/mapping/map-format/lightshow'],
            ],
          ],
          ['Help Playtest Other Maps', '/mapping/how-to-testplay'],
          ['Coping with Mapping Anxiety', '/mapping/mapping-anxiety'],
          ['Mapping Resources Contributors', '/mapping/mapping-credits'],
        ],
      },
      {
        name: '模组（英文）',
        path: '/modding/',
        routes: [
          [
            'PC',
            '/modding/pc/setup',
            [
              ['Setup Guide', '/modding/pc/setup'],
              ['RUE', '/modding/pc/rue'],
              ['Decompiling', '/modding/pc/decompiling'],
              ['Harmony Patching', '/modding/pc/harmony-patching'],
              ['Creating UI', '/modding/pc/bsml'],
              ['Zenject and SiraUtil', '/modding/pc/zenject'],
              ['Full Guide', '/modding/pc/full-mod-guide'],
              ['Testing', '/modding/pc/testing'],
            ],
          ],
          [
            'Quest',
            '/modding/quest/intro',
            [
              ['Config', '/modding/quest/config'],
              ['Custom Types', '/modding/quest/custom-types'],
              ['UI', '/modding/quest/ui'],
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
        name: '主页',
        path: '/',
        routes: [
          ['新手指南', '/zh_cn/beginners-guide'],
          [
            'PC模组（英文）',
            [
              ['使用Windows PC', '/pc-modding'],
              ['使用Linux PC', '/linux-modding'],
              ['常见问题', '/support/'],
            ],
          ],
          [
            'Quest模组',
            [
              ['概览', '/zh_cn/quest-modding'],
              [
                '使用Windows PC或Mac设备',
                [['使用ModsBeforeFriday添加模组', '/quest/modding-with-mbf']],
              ],
              ['使用Android设备添加模组', '/quest/modding-with-android'],
              [
                '传统方案',
                [
                  ['为Quest 1添加模组', '/quest/modding-quest1'],
                  ['使用树莓派来添加模组', '/quest/modding-with-raspi'],
                ],
              ],
            ],
          ],
          [
            '其它资源（英文）',
            [
              ['抓握及技巧', '/grips-and-tricks'],
              ['健康及安全', '/health-and-safety'],
              ['打分指南', '/ranking-guide'],
              ['联系我们', '/contact-us'],
            ],
          ],
        ],
      },
    ),
  },
})
