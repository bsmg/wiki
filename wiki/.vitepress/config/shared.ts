import container from 'markdown-it-container'
import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import path, { basename } from 'node:path'
import { env } from 'node:process'
import type { DefaultTheme, PageData, TransformPageContext } from 'vitepress'
import { defineConfigWithTheme } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

const IS_DEV = env.NODE_ENV === 'production'

export const search = (): DefaultTheme.Config['search'] => {
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

export interface SidebarItem {
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
/**
 * use localized path for sidebar item if possible, and comment the untranslated titles.
 * @param items the sidebar arrays
 * @param prefix a folder name in the wiki root
 * @param decorate_no_translated_text a function that add a comment 'untranslated' to title
 */
export function fixSidebarForLocalization(
  items: SidebarItem[],
  prefix: string,
  decorate_no_translated_text?: (text: string) => string,
) {
  const wiki_root_folder = path.join(__dirname, '..', '..')

  function GetLocalizedPath(_path: string) {
    let localized_path = '/' + prefix
    if (_path.startsWith('/')) localized_path += _path
    else localized_path += '/' + _path

    let file_exists = false

    if (localized_path.endsWith('/')) {
      //this is a folder
      file_exists = existsSync(path.join(wiki_root_folder, localized_path))
    } else {
      file_exists = existsSync(
        path.join(wiki_root_folder, localized_path + '.md'),
      )
    }
    if (file_exists) return localized_path
    return undefined
  }

  function HandleRoute(route: Route) {
    const [text, link, routes] = route
    if (typeof link == 'string') {
      let localizedPath = GetLocalizedPath(link)
      if (localizedPath) {
        ;(route as any)[1] = localizedPath
      } else if (decorate_no_translated_text) {
        ;(route as any)[0] = decorate_no_translated_text(text)
        //if this is a folder,
      }

      routes?.forEach(HandleRoute)
      return
    }

    ;(link ?? routes)?.forEach(HandleRoute)
  }
  items.forEach(item => {
    let localized_path = GetLocalizedPath(item.path)
    if (localized_path == undefined) {
      if (decorate_no_translated_text) {
        item.name = decorate_no_translated_text(item.name)
      }
      return
    }
    item.routes.forEach(HandleRoute)
  })
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
