<template>
  <div class="hero">
    <h1>Community-driven<br>snippet collection</h1>
    <p>Copy / Past / Edit</p>
  </div>
</template>

<script>
export default {
  name: 'TheHero',

  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  padding: calc(var(--spacing-xl) * 2) 0;
  h1 {
    font-size: 48px;
    margin-bottom: 0;
  }
  p {
    font-size: 16px;
    color: var(--color-contrast-medium);
  }
}
</style>
