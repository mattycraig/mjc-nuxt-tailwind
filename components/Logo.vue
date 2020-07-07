<template>
  <div class="logo">
    <img
      src="~/assets/images/logo.png"
      :srcset="require('~/assets/images/logo.png').srcSet"
      alt="SiteLogo"
    />
  </div>
</template>

<style scoped>
img {
  width: 100px;
}
</style>
