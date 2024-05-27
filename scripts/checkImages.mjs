import byteSize from 'byte-size'
import { globby } from 'globby'
import kleur from 'kleur'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const { underline, grey, red } = kleur

// 1MiB
const MAX_IMAGE_SIZE = 1024 ** 8
const humanMaxSize = byteSize(MAX_IMAGE_SIZE, { toStringFn })

const isActions = !!process.env.GITHUB_ACTIONS

function toStringFn() {
  return this.value + this.unit
}

;(async () => {
  const cwd = path.join(__dirname, '..', 'wiki', '.assets')
  const paths = await globby('**/*.{png,jpg,jpeg,gif}', { cwd, stats: true })

  /**
   * @type {Array<{ file: string; size: number; }>}
   */
  const files = paths.map(x => ({
    name: x.name,
    file: path.join(cwd, x.path),
    size: x.stats.size,
  }))

  const flagged = files.filter(({ size }) => size >= MAX_IMAGE_SIZE)
  if (flagged.length === 0) process.exit(0)

  for (const { name, file, size } of flagged) {
    const humanSize = byteSize(size, { toStringFn }).toString()
    const message = `Image exceeds max size of ${humanMaxSize}`

    if (isActions) {
      console.log(`::warning file=${file}::${message}`)
    } else {
      console.log(underline(file))
      console.log(grey(humanSize) + `\t${message}\n`)
    }
  }

  if (!isActions) {
    const plural = flagged.length === 1 ? ' is' : 's are'
    console.log(red(`${flagged.length} image${plural} too large!`))
  }

  process.exit(1)
})().catch(err => {
  console.error(err)
  process.exit(2)
})
