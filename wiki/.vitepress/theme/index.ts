// https://vitepress.dev/guide/custom-theme
import mediumZoom from 'medium-zoom'
import type { EnhanceAppContext } from 'vitepress'
import { useRoute } from 'vitepress'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import Theme from 'vitepress/theme'
import { h, nextTick, onMounted, watch } from 'vue'

import AboutLinks from '../components/AboutLinks.vue'
import YouTube from '../components/YouTube.vue'

import './custom.css'
import './style.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('#VPContent img', { background: 'var(--vp-c-bg)' })
    }

    onMounted(() => {
      initZoom()
    })

    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    )
  },
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    app.component('AboutLinks', AboutLinks)
    app.component('YouTube', YouTube)
    enhanceAppWithTabs(app)
  },
}
