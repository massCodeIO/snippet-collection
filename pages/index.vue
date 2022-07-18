<template>
  <div class="index-page">
    <SnippetList :list="snippetsByCategory" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  asyncData ({ store }) {
    return {
      snippets: store.state.snippets
    }
  },

  computed: {
    snippetsByCategory () {
      return !this.$route.query.category
        ? this.snippets
        : this.snippets.filter((i) => i.category === this.$route.query.category)
    }
  },

  created () {
    this.$ga.page(this.$route)
  }
}
</script>
