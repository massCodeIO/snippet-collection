<template>
  <div class="snippet-list">
    <SnippetCard
      v-for="(i, index) in list"
      :key="index"
      :title="i.title"
      :author="i.author"
      :css="i.css"
      :html="i.html"
      :link="`snippet/${i.category}/${i.id}`"
      :is-gray="i.isGray"
      :is-dark="i.isDark"
    />
  </div>
</template>

<script>
export default {
  name: 'SnippetList',

  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.snippet-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-md);
}
</style>
