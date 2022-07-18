<template>
  <div class="category-list">
    <ul>
      <li>
        <NuxtLink to="/">
          <AppButton :class="{ 'is-selected': !$route.query.category }">
            All
          </AppButton>
        </NuxtLink>
        <span class="count">
          {{ snippets.length }}
        </span>
      </li>
      <li v-for="i in Object.entries(categories)" :key="i[0]">
        <NuxtLink :to="`?category=${i[0]}`">
          <AppButton :class="{ 'is-selected': i[0] === $route.query.category }">
            {{ capFirst(i[0]) }}
          </AppButton>
        </NuxtLink>
        <span class="count">
          {{ i[1] }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { capFirst } from '@/helpers'

export default {
  name: 'SidebarCategoryList',

  data () {
    return {}
  },

  computed: {
    snippets () {
      return this.$store.state.snippets
    },
    categories () {
      return this.$store.getters.categories
    }
  },

  methods: {
    capFirst
  }
}
</script>

<style lang="scss" scoped>
.category-list {
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    padding: 2px 0;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  .is-selected {
    color: var(--color-contrast-low-alt);
  }
  .count {
    font-size: 10px;
    min-width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4px;
    background-color: var(--color-contrast-lower-alt);
    border-radius: 10px;
  }
}
</style>
