<template>
  <header>
    <div class="container mx-auto flex items-center py-4">
      <span>{{ siteName }}</span>
      <div class="ml-auto">
        <nuxt-link class="btn btn-sm btn-link mx-1" to="/">Home</nuxt-link>
        <nuxt-link class="btn btn-sm btn-link mx-1" to="/about"
          >About</nuxt-link
        >
        <Theme class="inline-block"></Theme>
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

<style lang="scss">
.nuxt-link-exact-active {
  @apply text-primary-400;
  @apply font-bold;
}
</style>
