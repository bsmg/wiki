<template>
  <div v-if='valid' class='container'>
    <iframe
      class='video'
      :src='link'
      frameborder='0'
      allow='autoplay; encrypted-media'
      allowfullscreen
    >
    </iframe>
  </div>

  <div v-else>
    <h2>{{ url }} is not a valid YouTube URL!</h2>
  </div>
</template>

<style scoped>
  .container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;

    margin: 12px 0;
  }

  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<script lang="ts">
const rx = /^.*(?:(?:youtu.be\/)|(?:v\/)|(?:\/u\/\w\/)|(?:embed\/)|(?:watch\?))\??v?=?([^#\&\?]*).*/

export default {
  name: 'YouTube',

  props: {
    url: String,
  },

  data() {
    return {
      valid: false,
      link: 'https://www.youtube.com/embed/',
    }
  },

  mounted() {
    const match = this.url.match(rx)
    if (match) {
      this.valid = true
      this.link += match[1]
    }
  },
}
</script>
