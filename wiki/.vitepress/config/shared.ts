import container from 'markdown-it-container'
import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import path, { basename } from 'node:path'
import { env } from 'node:process'
import type { DefaultTheme, PageData, TransformPageContext } from 'vitepress'
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
  original_page_updated?: string
  to_original_page?: string
}

export interface BSMGThemeConfig extends DefaultTheme.Config {
  bsmg?: BSMGConfig
}

export async function transformPageDataForLocalize(
  pageData: PageData,
  context: TransformPageContext,
) {
  let file_path = pageData.relativePath // zh_cn/foo/bar/quest-modding.md
  let m = new RegExp('^[a-z_]+?/(.*)$').exec(file_path)
  if (m) {
    let path_without_prefix = m[1] // foo/bar/quest-modding.md
    let original_full_path = path.join(
      context.siteConfig.srcDir,
      path_without_prefix,
    )
    if (existsSync(original_full_path)) {
      function getGitTimestamp(file) {
        return new Promise((resolve, reject) => {
          let child = spawn('git', ['log', '-1', '--pretty="%ai"', file])
          child.stdout.setEncoding('utf-8')
          let output = ''
          child.stdout.on('data', data => (output += String(data)))
          child.on('close', () => resolve(+new Date(output)))
          child.on('error', err => reject(err))
        })
      }

      try {
        let timestamp = await getGitTimestamp(original_full_path)
        pageData.frontmatter.originalFile = path_without_prefix
        pageData.frontmatter.originalFileTimestamp = timestamp
      } catch (e) {
        pageData.frontmatter.originalFileTimestamp = 0
      }
    }
  }
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
  transformPageData: transformPageDataForLocalize,
})
