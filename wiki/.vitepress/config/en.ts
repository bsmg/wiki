import { defineConfig } from 'vitepress'
import { sidebar } from './shared'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  lang: 'en',
  description:
    'Guides on how to mod Beat Saber, create custom content, and get involved in the community!',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Beginners Guide', link: '/beginners-guide.md' },
      { text: 'BSMG Discord', link: 'https://discord.gg/beatsabermods' },
      { text: 'Contact Us', link: '/contact-us.md' },
    ],

    footer: {
      message:
        'Copyright © 2019-2024 BSMG Community LLC (Beat Saber Modding Group)',
      copyright: 'Licensed under CC BY-NC-SA 4.0',
    },

    editLink: {
      pattern: 'https://github.com/bsmg/wiki/edit/master/wiki/:path',
      text: 'Edit this page on GitHub',
    },

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
        name: 'Modding',
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
                [['Modding With ModsBeforeFriday', '/quest/modding-with-mbf']],
              ],
              ['Modding With Android', '/quest/modding-with-android'],
              [
                'Legacy',
                [
                  ['Modding Quest 1', '/quest/modding-quest1'],
                  ['Modding With a Raspberry Pi', '/quest/modding-with-raspi'],
                ],
              ],
            ],
          ],
          [
            'Other Resources',
            [
              ['Grips and Tricks', '/grips-and-tricks'],
              ['Health and Safety', '/health-and-safety'],
              ['Ranking Guide', '/ranking-guide'],
              ['Contact Us', '/contact-us'],
            ],
          ],
        ],
      },
    ),
  },
})
