<template>
  <aside class="sidebar">
    <SidebarCategoryList />
    <CarbonAd />
  </aside>
</template>

<script>
export default {
  name: 'TheSidebar',

  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: sticky;
  top: 100px;
  width: var(--sidebar-width);
  align-self: start;
}
</style>
