<template>
  <footer>
    <div class="container mx-auto">
      <div class="flex flex-row py-4">
        <span>&copy; {{ new Date().getFullYear() }} {{ siteName }}</span
        ><span class="ml-auto"
          ><a href="#"
            ><font-awesome-icon
              class="mx-1"
              :icon="['fab', 'facebook']"
            ></font-awesome-icon></a
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
