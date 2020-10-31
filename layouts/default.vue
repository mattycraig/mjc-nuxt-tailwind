<template>
  <div class="app app--default flex flex-col h-screen">
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
#content {
  flex: 1 0 auto;
}
</style>
