<template>
  <div class="default-layout">
    <TheHeader />
    <div class="container">
      <TheHero />
      <div class="main">
        <TheSidebar />
        <div class="content">
          <Nuxt />
        </div>
      </div>
      <TheFooter />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',

  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.default-layout {
  height: 100vh;
  .main {
    display: grid;
    grid-template-columns: 250px 1fr;
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
