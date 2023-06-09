// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { EnhanceAppContext } from 'vitepress'
import Theme from 'vitepress/theme'

import YouTube from '../components/YouTube.vue'

import './style.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    app.component('YouTube', YouTube)
  },
}
