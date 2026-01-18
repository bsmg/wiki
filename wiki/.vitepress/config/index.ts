import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
import { fr } from './fr'
import { de } from './de'
import { nl } from './nl'
import { ja } from './ja'
import { zh_cn } from './zh_cn'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: 'English', ...en },
    fr: { label: 'Français', ...fr },
    de: { label: 'Deutsch', ...de },
    nl: { label: 'Nederlands', ...nl },
    ja: { label: '日本語', ...ja },
    zh_cn: { label: '简体中文', ...zh_cn },
  },
})
