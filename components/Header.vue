<template>
  <header>
    <div class="container mx-auto">
      <div class="flex flex-row py-4">
        <span>{{ siteName }}</span>
        <div class="ml-auto">
          <nuxt-link class="btn btn-sm btn-link mx-1" to="/">Home</nuxt-link>
          <nuxt-link class="btn btn-sm btn-link mx-1" to="/about"
            >About</nuxt-link
          >
        </div>
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
.nuxt-link-exact-active {
  color: blue;
  font-weight: bold;
}
</style>
