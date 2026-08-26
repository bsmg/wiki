import path, { relative } from 'node:path'
import { env } from 'node:process'

const is_in_github_action = env.GITHUB_ACTIONS == 'true'

// the slugify function is used in vitepress to generate title id
const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g
const slugify = str =>
  str
    .normalize('NFKD')
    .replace(rCombining, '')
    .replace(rControl, '')
    .replace(rSpecial, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/^(\d)/, '_$1')
    .toLowerCase()

export default {
  names: ['check-internal-link'],
  description: 'check the internal title is referenced currectly in wiki',
  tags: ['link'],
  function: function rule(params, onError) {
    // warn_only will just generate a `console.warn` message and will not block CI build
    // config it at `.markdownlint.jsonc`
    const warn_only = params.config && params.config.warn_only

    let found_title = new Set()

    let title_level = 0
    let pending_title = undefined

    function find_titles(token) {
      if (token.children) {
        for (let t of token.children) {
          find_titles(t)
        }
        return
      }

      switch (token.type) {
        case 'heading_open':
          pending_title = ''
          title_level++
          break
        case 'text':
          if (title_level > 0) pending_title += token.content
          break
        case 'heading_close':
          title_level--
          found_title.add(slugify(pending_title))
          break
      }
    }
    for (let token of params.parsers.markdownit.tokens) {
      find_titles(token)
    }
    if (title_level != 0) {
      console.warn(
        "warning: checkInternalLink.js can't find title currectly, it will not check the file " +
          params.name,
      )
      return
    }

    //console.log("found title in file", found_title)

    function handle(token) {
      if (token.type == 'link_open') {
        const href = token.attrs[0][1]
        if (href.startsWith('#')) {
          const title = href.substr(1)
          if (!found_title.has(decodeURI(title))) {
            if (warn_only) {
              let file_name = relative(
                path.join(import.meta.dirname, '..'),
                params.name,
              )
              let lineno = token.lineNumber + params.frontMatterLines.length

              if (is_in_github_action) {
                // github has 10 limit of annotation, it's not visible in the logs
                // so output the file_name and lineno in the next line
                console.log(
                  `::warning file=${file_name},line=${lineno},title=Title not found::${href}\nat ${file_name}:${lineno}`,
                )
              } else {
                console.warn(
                  'warning: ' +
                    file_name +
                    ':' +
                    lineno +
                    ': title not found: ' +
                    href,
                )
              }
            } else {
              onError({
                lineNumber: token.lineNumber,
                detail: 'title not found: ' + href,
              })
            }
          }
        }
      } else {
        if (token.children) {
          for (let t of token.children) {
            handle(t)
          }
        }
      }
    }

    for (let token of params.parsers.markdownit.tokens) {
      handle(token)
    }
  },
}
