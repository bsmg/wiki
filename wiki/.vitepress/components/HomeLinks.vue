<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
const { theme } = useData()

const title = computed(
  () => theme.value.bsmg?.external_links ?? 'External Links',
)
</script>

<template>
  <div class="container">
    <div class="vp-doc">
      <h2>{{ title }}</h2>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .container {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .container {
    padding: 0 64px;
  }
}

.vp-doc {
  max-width: 1152px;
  margin: 0 auto;
}

h2 {
  border: none;
}
</style>
