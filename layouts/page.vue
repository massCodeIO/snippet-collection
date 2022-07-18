<template>
  <div class="editor-layout">
    <TheHeader />
    <div class="container">
      <div class="main">
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
  name: 'PageLayout',

  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding-top: var(--header-height);
}
</style>
