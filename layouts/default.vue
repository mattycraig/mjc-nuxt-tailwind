<template>
  <div class="layout layout--default">
    <Header></Header>
    <main id="content">
      <div class="container mx-auto">
        <nuxt></nuxt>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#content {
  flex: 1 0 auto;
}
</style>
