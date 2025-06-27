import container from 'markdown-it-container'
import { env } from 'node:process'
import type { DefaultTheme } from 'vitepress'
import { defineConfigWithTheme } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

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

export const sidebar = (...items: SidebarItem[]): DefaultTheme.SidebarMulti => {
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

export interface BSMGConfig {
  external_links?: string
}

export interface BSMGThemeConfig extends DefaultTheme.Config {
  bsmg?: BSMGConfig
}

// https://vitepress.dev/reference/site-config
export const shared = defineConfigWithTheme<BSMGThemeConfig>({
  title: 'BSMG Wiki',

  lastUpdated: true,

  head: [['link', { rel: 'icon', href: '/icon.png' }]],

  themeConfig: {
    outline: [2, 3],
    externalLinkIcon: true,
    socialLinks: [{ icon: 'github', link: 'https://github.com/bsmg/wiki' }],

    search: search(),
  },

  sitemap: { hostname: 'https://bsmg.wiki/' },

  markdown: {
    config: md => {
      md.use(container, 'center'), md.use(tabsMarkdownPlugin)
    },
  },
})
