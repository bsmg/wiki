<template>
  <div class="links">
    <slot />
  </div>
</template>

<style scoped>
.links::v-deep(p) {
  display: flex;
  gap: 1rem;
}
</style>
