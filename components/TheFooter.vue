<template>
  <div class="footer">
    <p>
      All snippets tested in Chrome.<br>
      Released under the CC-BY-4.0 License.<br>
      Copyright © 2022 Anton Reshetov
    </p>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',

  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  padding: var(--spacing-xl);
}
</style>
