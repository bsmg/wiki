<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
const { page, theme, lang } = useData()

const date = computed(() => new Date(page.value.lastUpdated))
console.log(page.value.frontmatter)
const originalFileLink = computed(() => {
  let url = page.value.frontmatter.originalFile
  if (!url.endsWith('.md')) {
    return '/' + url
  }
  return '/' + url.substr(0, url.length - 3)
})

const originalFileDate = computed(
  () => new Date(page.value.frontmatter.originalFileTimestamp),
)

const originalFileTimeStr = computed(() =>
  new Intl.DateTimeFormat(
    theme.value.lastUpdated?.formatOptions?.forceLocale
      ? lang.value
      : undefined,
    theme.value.lastUpdated?.formatOptions ?? {
      dateStyle: 'short',
      timeStyle: 'short',
    },
  ).format(originalFileDate.value),
)

const hintText = computed(
  () =>
    theme.value.bsmg?.original_page_updated ??
    'The original page has been updated at ',
)
const gotoOriginalPage = computed(
  () => theme.value.bsmg?.to_original_page ?? 'Click to original page.',
)
</script>

<template>
  <div class="container" v-if="date < originalFileDate">
    <div class="warning custom-block">
      {{ hintText }} {{ originalFileTimeStr }}
      <a :href="originalFileLink">{{ gotoOriginalPage }}</a>
    </div>
  </div>
</template>
