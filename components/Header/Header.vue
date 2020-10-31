<template>
  <header>
    <div class="container mx-auto">
      <span>{{ siteName }}</span>
      <div class="ml-auto">
        <nuxt-link class="btn btn-sm btn-link mx-1" to="/">Home</nuxt-link>
        <nuxt-link class="btn btn-sm btn-link mx-1" to="/about"
          >About</nuxt-link
        >
        <Theme class="d-inline-block"></Theme>
      </div>
    </div>
  </header>
</template>

<script>
import config from '~/data/siteConfig'

export default {
  data() {
    return {
      siteName: config.siteTitle,
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  padding: 1rem 0;
}

.nuxt-link-exact-active {
  color: red;
  font-weight: bold;
}
</style>
