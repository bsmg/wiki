<script setup lang="ts">
defineProps<{
  name: string
  href: string
}>()
</script>

<template>
  <li>
    <a :href="href">{{ name }}</a>
  </li>
</template>

<style scoped>
a {
  transition: color 0.25s;
}

a:hover {
  color: var(--vp-c-brand);
}
</style>
