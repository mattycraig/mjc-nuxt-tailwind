<template>
  <footer class="bg-primary-500">
    <div class="container mx-auto flex items-center py-4 text-white">
      <span>&copy; {{ new Date().getFullYear() }} {{ siteName }}</span
      ><span class="ml-auto"
        ><a href="#">
          <font-awesome-icon
            class="mx-1"
            :icon="['fab', 'facebook']"
          ></font-awesome-icon> </a
        ><a href="#"
          ><font-awesome-icon
            class="mx-1"
            :icon="['fab', 'twitter']"
          ></font-awesome-icon></a
        ><a href="#"
          ><font-awesome-icon
            class="mx-1"
            :icon="['fab', 'github']"
          ></font-awesome-icon></a
      ></span>
    </div>
  </footer>
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
