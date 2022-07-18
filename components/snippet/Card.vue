<template>
  <div class="snippet-card">
    <div class="header">
      {{ title }}
    </div>
    <div class="body">
      <CodePreview :css="css" :html="html" />
    </div>
    <div class="footer">
      <div class="left">
        <a
          v-if="author"
          :href="`https://github.com/${author}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          @{{ author }}</a>
      </div>
      <div class="right">
        <NuxtLink :to="link">
          <AppButton> View code <UniconsArrowRight /> </AppButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import UniconsArrowRight from '~icons/unicons/arrow-right'

export default {
  name: 'SnippetCard',

  components: {
    UniconsArrowRight
  },

  props: {
    title: {
      type: String,
      default: () => ''
    },
    author: {
      type: String,
      default: () => ''
    },
    css: {
      type: String,
      default: () => ''
    },
    html: {
      type: String,
      default: () => ''
    },
    link: {
      type: String,
      default: () => ''
    }
  },

  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.snippet-card {
  position: relative;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  .body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
  }
  .header {
    position: absolute;
    top: var(--spacing-sm);
    left: var(--spacing-sm);
    font-size: 14px;
  }
  .footer {
    position: absolute;
    bottom: var(--spacing-sm);
    padding: 0 var(--spacing-sm);
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    a {
      color: var(--color-contrast-medium);
      text-decoration: none;
    }
  }
  :deep(.app-button) {
    font-size: 12px;
  }
}
</style>
