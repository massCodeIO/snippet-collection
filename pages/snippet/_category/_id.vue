<template>
  <div class="snippet">
    <div class="preview" :class="{ 'is-dark': darkMode }">
      <div class="tools">
        <div class="item">
          <AppSwitch v-model="darkMode" label-on="Dark" label-off="Light" />
        </div>
      </div>
      <CodePreview :html="snippet.html" :css="snippet.css" />
      <div class="info">
        <a
          :href="`https://github.com/${snippet.author}`"
          target="_blank"
          rel="noopener noreferrer"
        >@{{ snippet.author }}</a>
        <div class="actions">
          <AppButton @click="onCopy">
            <UniconsCopy />
          </AppButton>
        </div>
      </div>
    </div>
    <CodeEditor v-model="snippet.html" mode="html" />
    <CodeEditor v-model="snippet.css" mode="css" />
  </div>
</template>

<script>
import { formatSnippetData } from '@/helpers'
import UniconsCopy from '~icons/unicons/copy'

export default {
  name: 'SnippetPage',

  components: {
    UniconsCopy
  },

  layout: 'page',

  async asyncData ({ $content, route }) {
    const data = await $content(
      `/${route.params.category}/${route.params.id}`,
      { text: true }
    ).fetch()

    const snippet = formatSnippetData(data)

    return {
      snippet
    }
  },

  data () {
    return {
      darkMode: false
    }
  },

  created () {
    this.$ga.page(this.$route)
  },

  methods: {
    async onCopy () {
      await navigator.clipboard.writeText(this.snippet.html + this.snippet.css)
    }
  }
}
</script>

<style lang="scss" scoped>
.snippet {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
}
.preview {
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  grid-column: span 2;
  &.is-dark {
    background-color: var(--color-dark-mode);
    :deep(.app-switch) {
      color: #fff;
    }
    :deep(svg) {
      fill: #fff;
    }
    .info {
      color: #fff;
    }
  }
  .info {
    position: absolute;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--spacing-sm);
    bottom: var(--spacing-sm);
  }
  .tools {
    position: absolute;
    right: var(--spacing-sm);
    top: var(--spacing-sm);
  }
  .actions {
    :deep(svg) {
      width: 20px;
      height: 20px;
    }
  }
}
.back {
  display: inline-block;
  margin-top: var(--spacing-sm);
}
</style>
