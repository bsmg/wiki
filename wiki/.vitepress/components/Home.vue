<!-- Based on https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPFeatures.vue -->
<template>
  <div class="VPFeatures">
    <div class="container">
      <div class="items">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPFeatures {
  position: relative;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .VPFeatures {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .VPFeatures {
    padding: 0 64px;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}
</style>
